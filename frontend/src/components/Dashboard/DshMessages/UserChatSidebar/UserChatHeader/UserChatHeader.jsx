import { useDeleteDialog } from '../../../../../hooks/useDeleteDialog'
import { getAvatarImage } from '../../../../../utils/user.utils'
import UserChatHeaderSkeleton from './UserChatHeaderSkeleton'

const UserChatHeader = ({ user, loading, onDeleteUser }) => {
  const { DialogElement, handleOpen } = useDeleteDialog({
    onSave: onDeleteUser,
    title: 'Delete Conversation',
    message: 'Are you sure you want to delete this conversation? This action cannot be undone.',
    deleteElementName: 'Conversation'
  })
  return (
    <>
      {loading
        ? (
          <UserChatHeaderSkeleton />
          )
        : (
          <div className='user_heading px-0 border-b border-gray-200 py-3'>
            <div className='flex w-full'>
              <span className='contact-status online' />
              <img
                width={50}
                height={50}
                className='rounded-circle mr10'
                src={getAvatarImage(user.avatar)}
                alt={`${user.name}'s profile`}
              />
              <div className='flex justify-between items-center flex-1'>
                <div className='authors'>
                  <h6 className='name mb-0'>{user.name}</h6>
                  {/* <p className='preview'>Active</p> */}
                </div>
                <div>
                  <a
                    className='text-decoration-underline fz14 fw600 dark-color ff-heading cursor-pointer'
                    onClick={() => handleOpen()}
                  >
                    Delete Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>
          )}
      {DialogElement}
    </>
  )
}

export default UserChatHeader
