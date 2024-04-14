import { Link } from 'react-router-dom'
import RoomSlider from '../../common/RoomSlider/RoomSlider'
import RoomPagination from '../../common/RoomSlider/RoomPagination'
import { useLocation } from '../../../context/LocationContext'
import useRooms from '../../../hooks/useRooms'
import { roomsNearYouFilter } from '../../../utils/roomsNearYour.utils'

const RoomsNearYou = () => {
  const location = useLocation()
  const { rooms, loading } = useRooms()
  const filteredRooms = roomsNearYouFilter(rooms, location)

  return (
    <section className='pt0 pb90 bgc-white'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap justify-between  items-center' data-aos='fade-up'>
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
              <Link className='ud-btn2' href='/grid-full-3-col'>
                See All Properties
                <i className='fal fa-arrow-right-long' />
              </Link>
            </div>
          </div>
        </div>
        {/* End header */}
        <RoomSlider rooms={filteredRooms} loading={loading} />
      </div>

      <RoomPagination />
    </section>
  )
}

export default RoomsNearYou
