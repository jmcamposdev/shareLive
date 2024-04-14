import LoadingImg from '../../Loading/LoadingImg'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const RoomSimpleSkeleton = () => {
  return (
    <div className='item'>
      <div className='listing-style1 mb-0'>
        <div className='list-thumb'>
          <LoadingImg className='h-80' />
          <div className='list-price flex justify-center items-center'>
            <i className='fa-light fa-camera pr-3' />
            <LoadingSkeleton className='w-5 h-4 d-inline-block' />
          </div>
        </div>
        <div className='list-content'>
          <h6 className='list-title'>
            <LoadingSkeleton className='w-52 h-6' />
          </h6>
          <h6 className='list-title flex gap-2 !mb-0'>
            <LoadingSkeleton className='w-24 h-4' /> / <span className='font-normal'>month</span>
          </h6>
          <div className='list-text flex items-center'>
            <i className='fa-solid fa-location-dot pr-3' /> <LoadingSkeleton className='w-48 h-4' />
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
        </div>
      </div>
    </div>
  )
}

export default RoomSimpleSkeleton
