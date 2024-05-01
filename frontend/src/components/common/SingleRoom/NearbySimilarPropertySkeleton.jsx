import RoomPaginationSkeleton from '../RoomSlider/RoomPaginationSkeleton'
import RoomSliderSkeleton from '../RoomSlider/RoomSliderSkeleton'

const NearbySimilarPropertySkeleton = () => {
  return (
    <div className='mx-auto row mt30 wow fadeInUp'>
      <div className='flex flex-wrap justify-between' data-aos='fade-up'>
        <div className='lg:w-3/4 w-auto pr-4 pl-4'>
          <div className='main-title2'>
            <h2 className='title'>Nearby Similar Rooms</h2>
            <p className='paragraph'>
              Explore similar rooms
            </p>
          </div>
        </div>
        <div className='lg:w-1/4 w-auto pr-4 pl-4'>
          <div className='text-end sm:text-start mb-3'>
            <RoomPaginationSkeleton />
          </div>
        </div>
      </div>
      <RoomSliderSkeleton />
    </div>
  )
}

export default NearbySimilarPropertySkeleton
