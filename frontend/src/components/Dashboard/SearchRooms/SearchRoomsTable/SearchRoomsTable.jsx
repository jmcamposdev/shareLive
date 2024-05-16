import TitleDashboard from '../../../common/Dashboard/TitleDashboard/TitleDashboard'
import roomsColumns from './searchRoomsColumns.jsx'
import Table from '../../../common/Table/Table'
import { useState } from 'react'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'
import RoomService from '../../../../services/roomService.js'
import useAlertToast from '../../../../hooks/useToast.js'
import { Link, useNavigate } from 'react-router-dom'

const SearchRoomsTable = ({ rooms, setRooms, loading, title, subTitle }) => {
  const { toast } = useAlertToast()
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()

  const onDelete = async (roomId) => {
    try {
      await RoomService.deleteRoom(roomId)
      toast.showSuccess('Room deleted successfully')
    } catch (error) {
      toast.showError(error.message)
    }
  }

  const onEdit = (roomId) => {
    navigate(`/dashboard/rooms/edit/${roomId}`)
  }

  return (
    <>
      <div className='flex justify-between items-center 2xl:mb30 mt-56 2xl:mt-0 flex-wrap gap-9'>
        <TitleDashboard title={title} subtitle={subTitle} />
        <div className='flex gap-4 pb40 w-full sm:w-fit'>
          <div className='item1 mb15-sm'>
            <div className='search_area z-40 w-[100dvw] lg:w-[calc(100dvw-300px)] 2xl:w-fit top-[65px] lg:top-[92px] rounded-b-lg bg-white dark:bg-midnight py-4 px-5 box-border 2xl:bg-transparent 2xl:dark:bg-transparent !right-0 !fixed 2xl:!relative 2xl:!top-0 !rounded-none'>
              <input
                type='text'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 dark:placeholder:text-borderColor/40 dark:text-white dark:outline-white placeholder:text-[#212529bf]'
                placeholder='Search'
                required=''
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <label className='!absolute !left-[36px] !top-[34px] 2xl:relative'>
                <span className='flaticon-search dark:text-white' />
              </label>
            </div>
          </div>
          <Link to='/dashboard/rooms/add' className='ud-btn btn-thm w-fit m-auto sm:translate-y-0 translate-y-[-30px]'>
            Add New Room <i className='fal fa-arrow-right-long' />
          </Link>
        </div>
      </div>
      {/* End Title | Search | Add Room */}

      <BoxDashboard>
        <Table
          data={rooms}
          setData={setRooms}
          loading={loading}
          columns={roomsColumns}
          filterValue={filter}
          onFilter={setFilter}
          onDelete={onDelete}
          onEdit={onEdit}
          itemName='room'
        />
      </BoxDashboard>

    </>
  )
}

export default SearchRoomsTable
