import { Link } from 'react-router-dom'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'
import LoadingImg from '../../Loading/LoadingImg'

const RoomDetailedSkeleton = () => {
  return (
    <div className='item '>
      <div className='listing-style1 listCustom listing-type flex-col md:flex-row dark:bg-midnight'>
        <div style={{ borderTopRightRadius: 0 }} className='list-thumb overflow-hidden'>
          <LoadingImg className='md:h-full h-60 !rounded-none' />
          <LoadingSkeleton className='absolute bottom-5 left-5 w-[125px] h-[32px]' innerClasses='!rounded-md shadow-sm' />

        </div>
        <div className='list-content flex flex-col'>
          <h6 className='list-title'>
            <Link className='hover:!text-orangePrimary'><LoadingSkeleton className='w-52 h-6' /></Link>
          </h6>
          <div className='list-text flex items-center mt-2'>
            <LoadingSkeleton className='w-44 h-4' />
          </div>
          <div className='list-meta d-flex align-items-center'>
            <a className='text-[#717171] flex justify-center items-center'>
              <LoadingSkeleton className='w-16 h-4' />
            </a>
            <a className='text-[#717171] flex justify-center items-center'>
              <LoadingSkeleton className='w-16 h-4' />
            </a>
            <a className='text-[#717171] flex justify-center items-center'>
              <LoadingSkeleton className='w-16 h-4' />
            </a>
          </div>
          <div className='list-text2 flex flex-col mt-3 mb-4'>
            <LoadingSkeleton className='w-full h-4 mb-[6px]' />
            <LoadingSkeleton className='w-full h-4' />
            <LoadingSkeleton className='w-full h-4 mt-[6px]' />
          </div>

          <LoadingSkeleton innerClasses='rounded-none' className='w-full h-[1px]' />

          <div className='flex justify-between mt-3'>
            <LoadingSkeleton className='w-[102px] h-[37px]' innerClasses='rounded-xl' />

            <div className='list-meta2 icons d-flex align-items-center gap-[5px]'>
              <LoadingSkeleton className='w-[35px] h-[35px]' innerClasses='rounded-md' />
              <LoadingSkeleton className='w-[35px] h-[35px]' innerClasses='rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailedSkeleton
