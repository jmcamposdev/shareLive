import SingleRoomSlider from '../../common/SingleRoom/SingleRoomSlider'
import SingleRoomPagination from '../../common/SingleRoom/SingleRoomPagination'
import { useLocation } from '../../../context/LocationContext'
import useRooms from '../../../hooks/useRooms'
import { roomsNearYouFilter } from '../../../utils/roomsNearYour.utils'

const NearbySimilarProperty = ({ rooms }) => {
  const location = useLocation()
  const { loading } = useRooms()
  const filteredRooms = roomsNearYouFilter(rooms, location)
  return (
    <>
      <div className='mx-auto row mt30 wow fadeInUp'>
        <div className='flex flex-wrap justify-between' data-aos='fade-up'>
          <div className='lg:w-3/4 w-auto pr-4 pl-4'>
            <div className='main-title2'>
              <h2 className='title'>Discover Rooms Near You </h2>
              <p className='paragraph'>
                Explore our rooms in your area
              </p>
            </div>
          </div>
          <div className='lg:w-1/4 w-auto pr-4 pl-4'>
            <div className='text-end sm:text-start mb-3'>
              <SingleRoomPagination />
            </div>
          </div>
        </div>
        <SingleRoomSlider rooms={filteredRooms} loading={loading} />
      </div>
    </>
  )
}

export default NearbySimilarProperty
