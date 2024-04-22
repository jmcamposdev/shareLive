import { useLocation } from '../../../context/LocationContext'
import useRooms from '../../../hooks/useRooms'
import { roomsNearYouFilter } from '../../../utils/roomsNearYour.utils'
import RoomPagination from '../RoomSlider/RoomPagination'
import RoomSlider from '../RoomSlider/RoomSlider'

const NearbySimilarProperty = () => {
  const location = useLocation()
  const { loading, rooms } = useRooms()

  const filteredRooms = roomsNearYouFilter(rooms, location)
  return (
    <>
      <div className='mx-auto row mt30 wow fadeInUp'>
        <div className='flex flex-wrap justify-between' data-aos='fade-up'>
          <div className='lg:w-3/4 w-auto pr-4 pl-4'>
            <div className='main-title2'>
              <h2 className='title dark:text-white'>Nearby Similar Rooms</h2>
              <p className='paragraph dark:text-white'>
                Explore similar rooms
              </p>
            </div>
          </div>
          <div className='lg:w-1/4 w-auto pr-4 pl-4'>
            <div className='text-end sm:text-start mb-3'>
              <RoomPagination />
            </div>
          </div>
        </div>
        <RoomSlider rooms={filteredRooms} loading={loading} />
      </div>
    </>
  )
}

export default NearbySimilarProperty
