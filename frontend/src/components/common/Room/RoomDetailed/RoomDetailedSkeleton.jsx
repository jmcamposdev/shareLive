import { Link } from 'react-router-dom'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'
import LoadingImg from '../../Loading/LoadingImg'

const RoomDetailedSkeleton = () => {
  return (
    <div className='item dark:bg-midnight'>
      <div className='listing-style1 listCustom listing-type flex-col md:flex-row dark:bg-midnight'>
        <div className='list-thumb'>
          <LoadingImg className='md:h-full h-60 ' />
          <div className='list-price flex justify-center items-center gap-2 dark:bg-midnight/80 dark:text-white !font-medium'><LoadingSkeleton className='w-9 h-4' />€ <span className='font-light'>/</span> <span>mo</span></div>
        </div>
        <div className='list-content flex flex-col'>
          <h6 className='list-title'>
            <Link href='/sigle-v2' className='hover:!text-orangePrimary'><LoadingSkeleton className='w-52 h-6' /></Link>
          </h6>
          <div className='list-text flex items-center'>
            <i className='fa-solid fa-location-dot pr-3' />
            <LoadingSkeleton className='w-40 h-4' />
          </div>
          <div className='list-meta d-flex align-items-center'>
            <a className='text-[#717171] flex justify-center items-center'>
              <span className='flaticon-bed text-[#717171]' /> <LoadingSkeleton className='w-5 h-4 mr-1' /> bed
            </a>
            <a className='text-[#717171] flex justify-center items-center'>
              <span className='flaticon-shower text-[#717171]' /> <LoadingSkeleton className='w-5 h-4 mr-1' /> bath
            </a>
            <a className='text-[#717171] flex justify-center items-center'>
              <span className='flaticon-expand text-[#717171]' /> <LoadingSkeleton className='w-5 h-4 mr-1' /> sqft
            </a>
          </div>
          <div className='list-text2 flex flex-col gap-1 mt-3 mb-4'>
            <LoadingSkeleton className='w-full h-4' />
            <LoadingSkeleton className='w-full h-4' />
            <LoadingSkeleton className='w-full h-4' />
          </div>
          <hr className='mt-auto mb-3 text-[#C5C6C7] dark:!text-borderColor/20 dark:!bg-borderColor/20' />
          <div className='flex justify-between'>
            <a href='/' className='ud-btn btn-thm !text-[12px] !px-4 !py-1'>
              Explore
              <i className='fal fa-arrow-right-long !text-[12px]' />
            </a>
            <div className='list-meta2 icons d-flex align-items-center gap-1'>
              <a href='#' className='!bg-borderColor/30 hover:!bg-borderColor/50 dark:!bg-lightmidnight dark:hover:!bg-orangePrimary/10'><span className='flaticon-fullscreen dark:text-white' /></a>
              <a href='#' className='!bg-borderColor/30 hover:!bg-borderColor/50 dark:!bg-lightmidnight dark:hover:!bg-orangePrimary/10'><span className='flaticon-like dark:text-white' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailedSkeleton
