import { createContext, useContext, useEffect, useMemo, useState, useRef } from 'react'
import UserService from '../services/UserService'
import MessageService from '../services/MessageService'
import { io } from 'socket.io-client'
import { useAuth } from './AuthContext'

/**
 * ---------------------------------------------
 * Messages Context
 * ---------------------------------------------
 * This context will handle the messages between the logged user and the contacts that he has.
 * It will also handle the selected contact to show the messages.
 * @type {Context}
 */
const MessagesProvider = ({ children }) => {
  const socket = useRef(null)
  const scrollRef = useRef(null)
  const { user } = useAuth()
  const [search, setSearch] = useState('')
  const [contactList, setContactList] = useState([])
  const [loading, setLoading] = useState(true)
  const [messagesLoading, setMessagesLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)

  const filteredContacts = useMemo(() => {
    return contactList.filter(contact => {
      return contact.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [contactList, search])

  // #region Fetching Logic

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Fetch the contacts of the user
        const contacts = await UserService.getContactList(user._id)
        setContactList(contacts)
        // Set the first contact as the selected contact
        setSelectedContact(contacts[0])
      } catch (error) {
        console.error('Error fetching contacts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContacts()
  }, [])

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedContact) return
      setMessagesLoading(true)
      try {
        // Fetch the messages between the user and the selected contact
        const messages = await MessageService.getMessages(user._id, selectedContact._id)
        setMessages(messages)
      } catch (error) {
        console.error('Error fetching messages:', error)
      } finally {
        setMessagesLoading(false)
      }
    }

    fetchMessages()
  }, [selectedContact])

  // #endregion
  // #region Socket Logic

  /**
   * Establish the connection with the socket server
   * and add the user to the online users list
   */
  useEffect(() => {
    if (!user) return

    socket.current = io('http://localhost:3001')
    socket.current.emit('add-user', user._id)

    return () => socket.current.disconnect()
  }, [user])

  // #endregion
  // #region Handlers

  /**
   * Handle the search of contacts
   * @param {Event} e The event object
   */
  const handleSearchContacts = (e) => {
    setSearch(e.target.value)
  }

  const handleSelectContact = (contact) => {
    const contactIndex = contactList.findIndex(c => c._id === contact._id)
    if (contactIndex === -1) return
    setSelectedContact(contactList[contactIndex])
  }

  const isSelectedContact = (contact) => {
    return selectedContact && selectedContact._id === contact._id
  }

  const createMessage = async (msg, fromId, toId) => {
    try {
      const message = await MessageService.createMessage(msg, fromId, toId)
      socket.current.emit('send-message', { _id: message._id, to: toId, msg: message.message })
      const newMessages = [...messages, { _id: message._id, message: message.message, fromSelf: true, createdAt: message.createdAt }]
      setMessages(newMessages)
      // Add the last message to the selected contact
      const contactIndex = contactList.findIndex(c => c._id === toId)
      if (contactIndex !== -1) {
        const updatedContact = { ...contactList[contactIndex], lastMessage: message }
        const updatedContacts = [...contactList]
        updatedContacts[contactIndex] = updatedContact
        setContactList(updatedContacts)
      }
      return message
    } catch (error) {
      console.error('Error creating message:', error.message)
      throw error
    }
  }

  const deleteConversation = async (contactId) => {
    try {
      await UserService.deleteContact(user._id, contactId)
      setMessages([])
      const contactIndex = contactList.findIndex(c => c._id === contactId)
      if (contactIndex !== -1) {
        const updatedContacts = contactList.filter(c => c._id !== contactId)
        setContactList(updatedContacts)
        setSelectedContact(updatedContacts[0] || null)
      }
    } catch (error) {
      console.error('Error deleting conversation:', error.message)
    }
  }

  useEffect(() => {
    if (!socket.current) return

    const handleMessageReceive = (message) => {
      setMessages((prevMessages) => [...prevMessages, { _id: message._id, message: message.message, fromSelf: false, createdAt: new Date() }])
      // Add the last message to the selected contact
      const contactIndex = contactList.findIndex(c => c._id === selectedContact._id)
      if (contactIndex !== -1) {
        const updatedContact = { ...contactList[contactIndex], lastMessage: message }
        const updatedContacts = [...contactList]
        updatedContacts[contactIndex] = updatedContact
        setContactList(updatedContacts)
      }
    }

    socket.current.on('msg-recieve', handleMessageReceive)

    // Cleanup function
    return () => socket.current.off('msg-recieve', handleMessageReceive)
  }, [messages])

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const contextValue = useMemo(() => ({
    loading,
    contactList: filteredContacts,
    user,
    selectedContact,
    messages,
    messagesLoading,
    socket,
    scrollRef,
    setSelectedContact,
    handleSearchContacts,
    handleSelectContact,
    isSelectedContact,
    createMessage,
    deleteConversation
  }), [contactList,
    selectedContact,
    filteredContacts,
    loading,
    user,
    messages,
    messagesLoading,
    socket,
    scrollRef,
    handleSearchContacts,
    handleSelectContact,
    isSelectedContact,
    createMessage,
    deleteConversation
  ])

  return (
    <MessagesContext.Provider value={contextValue}>
      {children}
    </MessagesContext.Provider>
  )
}

export const MessagesContext = createContext()

export const useMessages = () => useContext(MessagesContext)

export default MessagesProvider
