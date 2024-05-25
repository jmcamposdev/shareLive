import { useMessages } from '../../../../../context/MessagesContext'
import UserChatItem from './UserChatItem/UserChatItem'

const UserChatList = () => {
  const { contactList, loading } = useMessages()
  return (
    <div className='chat-member-list flex flex-col gap-2'>
      {loading
        ? (
            Array.from({ length: 5 }).map((_, index) => (
              <UserChatItem key={index} loading />
            ))
          )
        : (
            contactList.length === 0
              ? (
                <p className='text-center text-gray-500'>No contacts found</p>
                )
              : (
                  contactList.map(contact => (
                    <UserChatItem key={contact._id} user={contact} />
                  ))
                )
          )}
    </div>
  )
}

export default UserChatList
