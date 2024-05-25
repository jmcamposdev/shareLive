import LoadingImg from '../../../../../common/Loading/LoadingImg'
import LoadingSkeleton from '../../../../../common/Loading/LoadingSkeleton'

const UserChatItemSkeleton = () => {
  return (
    <div
      className='hover:bg-[#f7f7f7] p-3 rounded-lg transition-all duration-200 cursor-pointer'
    >
      <div className='flex items-center relative'>
        <div className='w-[50px] h-[50px] mr10'>
          <LoadingImg className='w-full h-full !rounded-full' />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='d-inline-block'>
            <div className='fz14 fw600 dark-color ff-heading mb10'>
              <LoadingSkeleton className='h-4 w-36' />
            </div>
            <span className='preview'>
              <LoadingSkeleton className='h-4 w-10' />
            </span>
          </div>

          <div className=''>
            <LoadingSkeleton className='h-2 w-10' />
            {/* {user.notificationStatus !== undefined && (
              <div className={`m_notif ${user.notificationStatus}`}>2</div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserChatItemSkeleton
