import LoadingImg from '../Loading/LoadingImg'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

const ContactWithAgentSkeleton = () => {
  return (
    <>
      <div className='agent-single d-sm-flex align-items-center pb25'>
        <div className='single-img'>
          <div className='w-[90px] h-[90px] rounded-full overflow-hidden'>
            <LoadingImg className='w-full h-full' />
          </div>

        </div>
        <div className='single-contant ml20 ml0-xs w-[142px]'>
          <h6 className='title mb-[10px] dark:text-white'>
            <LoadingSkeleton className='h-[18px] w-4/5' />
          </h6>
          <div className='agent-meta d-md-flex align-items-center'>
            <a className='text fz15 dark:text-white dark:hover:text-orangePrimary w-full'>
              <LoadingSkeleton className='h-[18px] w-full' />
            </a>
          </div>
          <LoadingSkeleton className='h-[18px] w-full mt-2' />
        </div>
      </div>

      <div className='d-grid'>
        <LoadingSkeleton className='w-full h-[55px]' innerClasses='rounded-xl' />
      </div>
    </>
  )
}

export default ContactWithAgentSkeleton
