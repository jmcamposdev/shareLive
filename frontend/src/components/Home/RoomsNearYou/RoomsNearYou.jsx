import roomsData from '../../../data/roomsItems'
import { Link } from 'react-router-dom'
import RoomSlider from '../../common/RoomSlider/RoomSlider'
import RoomPagination from '../../common/RoomSlider/RoomPagination'
import { useEffect, useState } from 'react'
import RoomService from '../../../services/roomService'
import { useLocation } from '../../../context/LocationContext'

const RoomsNearYou = () => {
  const location = useLocation()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        // Fetch the formations from the server
        const roomsData = await RoomService.getAllRooms()
        // Save the formations in the state
        setRooms(roomsData)
      } catch (error) {
        // If there's an error, set the error message
        // toast.showError(error.message)
      }
    }

    fetchRooms()
  }, [])

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
        <RoomSlider rooms={roomsData} />
      </div>

      <RoomPagination />
    </section>
  )
}

export default RoomsNearYou
