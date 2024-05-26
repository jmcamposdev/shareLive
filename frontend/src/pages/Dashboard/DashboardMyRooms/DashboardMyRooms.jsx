import { useMemo, useState } from 'react'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import DshRoomsListing from '../../../components/Dashboard/DshRoomsListing/DshRoomsListing'
import { Link, useNavigate } from 'react-router-dom'
import RoomService from '../../../services/roomService'
import useAlertToast from '../../../hooks/useToast'

const DashboardMyRooms = ({ rooms, loading }) => {
  const { toast } = useAlertToast()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [excludedRoomsId, setExcludedRoomsId] = useState([])
  const filteredRooms = useMemo(() => rooms.filter(room => !excludedRoomsId.includes(room._id)), [rooms, excludedRoomsId])

  const onEdit = (roomId) => {
    navigate(`/dashboard/rooms/edit/${roomId}`)
  }

  const onDelete = async (roomId) => {
    try {
      setExcludedRoomsId([...excludedRoomsId, roomId])
      toast.showSuccess('Room deleted successfully')
      await RoomService.deleteRoom(roomId)
    } catch (error) {
      toast.showError(error.message)
    }
  }

  return (

    <>
      <div className='flex justify-between items-center 2xl:mb30 mt-56 2xl:mt-0'>
        <TitleDashboard title='My Rooms' subtitle='Search your rooms here!' />

        <div className='flex gap-4 pb40 w-full sm:w-fit'>
          <div className='item1 mb15-sm'>
            <div className='search_area  z-40 w-[100dvw] lg:w-[calc(100dvw-300px)] 2xl:w-fit top-[65px] lg:top-[92px] rounded-b-lg bg-white dark:bg-midnight py-4 px-5 box-border 2xl:bg-transparent 2xl:dark:bg-transparent !right-0 !fixed 2xl:!relative 2xl:!top-0 !rounded-none'>
              <input
                type='text'
                id='search'
                name='search'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 dark:placeholder:text-borderColor/40 dark:text-white dark:outline-white placeholder:text-[#212529bf]'
                placeholder='Search Rooms'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
              />
              <label className='!absolute !left-[36px] !top-[34px] 2xl:relative' htmlFor='search'>
                <span className='flaticon-search dark:text-white' />
              </label>
            </div>
          </div>
          <Link to='/dashboard/rooms/add' className='ud-btn btn-thm w-fit m-auto sm:translate-y-0 translate-y-[-30px]'>
            Add New Room <i className='fal fa-arrow-right-long' />
          </Link>
        </div>
      </div>
      <DshRoomsListing rooms={filteredRooms} onDelete={onDelete} onEdit={onEdit} search={search} loading={loading} />
    </>
  )
}

export default DashboardMyRooms
