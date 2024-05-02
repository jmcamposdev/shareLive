import TitleDashboard from '../../../common/Dashboard/TitleDashboard/TitleDashboard'
import roomsColumns from './searchRoomsColumns.jsx'
import Table from '../../../common/Table/Table'
import { useState } from 'react'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'
import RoomService from '../../../../services/roomService.js'
import useAlertToast from '../../../../hooks/useToast.js'

const SearchRoomsTable = ({ rooms, loading, title, subTitle }) => {
  const { toast } = useAlertToast()
  const [filter, setFilter] = useState('')

  const onDelete = (roomId) => {
    RoomService.deleteRoom(roomId)
      .then(() => {
        toast.showSuccess('Room deleted successfully')
        console.log('Room deleted successfully')
      })
      .catch((error) => {
        toast.showError(error.message)
        console.error('Error deleting room:', error.message)
      }
      )
  }

  const onEdit = (roomId) => {
    console.log('Edit room:', roomId)
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <TitleDashboard title={title} subtitle={subTitle} />
        <div className='flex gap-4 pb40'>
          <div className='item1 mb15-sm'>
            <div className='search_area'>
              <input
                type='text'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 placeholder:text-[#181A20]/50 dark:text-white dark:outline-white'
                placeholder='Search'
                required=''
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <label>
                <span className='flaticon-search dark:text-white' />
              </label>
            </div>
          </div>
          <a href='#' className='ud-btn btn-thm'>Add New Room<i className='fal fa-arrow-right-long' /></a>
        </div>
      </div>
      {/* End Title | Search | Add Room */}

      <BoxDashboard>
        <Table
          data={rooms}
          loading={loading}
          columns={roomsColumns}
          filterValue={filter}
          onFilter={setFilter}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </BoxDashboard>

    </>
  )
}

export default SearchRoomsTable
