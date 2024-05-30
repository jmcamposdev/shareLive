import LoadingImg from '../../../../common/Loading/LoadingImg'
import LoadingSkeleton from '../../../../common/Loading/LoadingSkeleton'

const UserChatHeaderSkeleton = () => {
  return (
    <div className='user_heading px-0 mx30'>
      <div className='flex w-full'>
        <span className='contact-status online' />
        <div className='w-[50px] h-[50px] mr10'>
          <LoadingImg className='w-full h-full !rounded-full' />
        </div>
        <div className='flex justify-between items-center flex-1'>
          <div className='authors'>
            <LoadingSkeleton className='h-4 w-36' />
            {/* <p className='preview'>Active</p> */}
          </div>
          <div>
            <a className='text-decoration-underline fz14 fw600 dark-color ff-heading'>
              <LoadingSkeleton className='h-4 w-36' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserChatHeaderSkeleton
