import api from './api'

const MessageService = {
  getMessages: async (fromId, toId) => {
    try {
      const messages = await api.get(`messages/${fromId}/${toId}`)
      return messages
    } catch (error) {
      console.error('Error fetching messages:', error)
      throw error
    }
  },

  createMessage: async (msg, fromId, toId) => {
    try {
      const message = await api.post('messages', { message: msg, from: fromId, to: toId })
      return message
    } catch (error) {
      console.error('Error creating message:', error.message)
      throw error
    }
  }
}

export default MessageService
