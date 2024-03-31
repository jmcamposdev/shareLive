import TitleDashboard from '../../../common/Dashboard/TitleDashboard/TitleDashboard'
import roomsColumns from './searchRoomsColumns.jsx'
import Table from '../../../common/Table/Table'
import { useState } from 'react'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'

const SearchRoomsTable = ({ rooms }) => {
  const [filter, setFilter] = useState('')
  return (
    <>
      <div className='flex justify-between items-center mb30'>
        <TitleDashboard title='Search Rooms' subtitle='Search all for rooms here!' />
        <div className='flex gap-4'>
          <div className='item1 mb15-sm'>
            <div className='search_area'>
              <input
                type='text'
                className='form-control bdrs12'
                placeholder='Search'
                required=''
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <label>
                <span className='flaticon-search' />
              </label>
            </div>
          </div>
          <a href='#' className='ud-btn btn-thm'>Add New Room<i className='fal fa-arrow-right-long' /></a>
        </div>
      </div>
      {/* End Title | Search | Add Room */}

      <BoxDashboard>
        <Table data={rooms} columns={roomsColumns} filterValue={filter} onFilter={setFilter} />
      </BoxDashboard>

    </>
  )
}

export default SearchRoomsTable
