import LoadingImg from '../../Loading/LoadingImg'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const RoomSimpleSkeleton = () => {
  return (
    <div className='item'>
      <div className='listing-style1 mb-0 dark:bg-midnight'>
        <div className='list-thumb'>
          <LoadingImg className='h-80' />
          <LoadingSkeleton innerClasses='shadow-sm !rounded-md' className='absolute bottom-5 left-5 !p-0 w-[72px] h-[33px]' />
        </div>
        <div className='list-content dark:bg-midnight'>
          <h6 className='list-title'>
            <LoadingSkeleton className='w-52 h-6' />
          </h6>
          <h6 className='list-title flex gap-2 !mb-0'>
            <LoadingSkeleton className='w-40 h-4' />
          </h6>
          <div className='list-text flex items-center mt-[5px]'>
            <LoadingSkeleton className='w-56 h-4' />
          </div>
          <div className='list-meta d-flex align-items-center gap-1'>
            <a className='text-[#717171] flex justify-center items-center !m-0'>
              <LoadingSkeleton className='w-16 h-4 mr-1' />
            </a>
            <a className='text-[#717171] flex justify-center items-center !m-0'>
              <LoadingSkeleton className='w-16 h-4 mr-1' />
            </a>
            <a className='text-[#717171] flex justify-center items-center !m-0'>
              <LoadingSkeleton className='w-16 h-4 mr-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomSimpleSkeleton
