import './userChatItem.css'
import { useMessages } from '../../../../../../context/MessagesContext'
import { getAvatarImage } from '../../../../../../utils/user.utils'
import UserChatItemSkeleton from './UserChatItemSkeleton'

const UserChatItem = ({ user, loading }) => {
  const { handleSelectContact, isSelectedContact } = useMessages()

  const isSelected = isSelectedContact(user)

  return (
    <>
      {loading
        ? (
          <UserChatItemSkeleton />
          )
        : (
          <div
            className={`hover:bg-[#f7f7f7] dark:hover:!bg-lightmidnight p-3 rounded-lg transition-all duration-200 cursor-pointer ${isSelected ? 'selected-chat-item dark:!bg-lightmidnight' : ''}`}
            onClick={() => handleSelectContact(user)}
          >
            <div className='flex items-center relative'>
              <img
                width={50}
                height={50}
                className='w-full h-auto rounded-circle mr10'
                src={getAvatarImage(user.avatar)}
                alt={`${user.name}'s profile`}
              />
              <div className='flex flex-1 justify-between'>
                <div className='d-inline-block'>
                  <div className='fz14 fw600 dark-color ff-heading mb-0 dark:text-white'>
                    {user.name}
                  </div>
                  <span className='preview dark:text-white'>
                    {
                    user.lastMessage?.message
                      ? (
                          user.lastMessage.message.length > 30
                            ? `${user.lastMessage.message.substring(0, 30)}...`
                            : user.lastMessage.message
                        )
                      : 'No messages'
})
                  </span>
                </div>
              </div>
            </div>
          </div>
          )}
    </>
  )
}

export default UserChatItem
