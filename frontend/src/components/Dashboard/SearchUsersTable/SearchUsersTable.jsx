import TitleDashboard from '../../common/Dashboard/TitleDashboard/TitleDashboard.jsx'
import Table from '../../common/Table/Table.jsx'
import { useState } from 'react'
import BoxDashboard from '../../common/Dashboard/BoxDashboard/BoxDashboard.jsx'
import searchUsersColumns from './SearchUsersColumns.jsx'

const SearchUsersTable = ({ users }) => {
  const [filter, setFilter] = useState('')
  return (
    <>
      <div className='flex justify-between items-center mb30'>
        <TitleDashboard title='Search Users' subtitle='Search any users in here.' />
        <div className='flex gap-4'>
          <div className='item1 mb15-sm'>
            <div className='search_area'>
              <input
                type='text'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 placeholder:text-borderColor/40 dark:text-white dark:outline-white'
                placeholder='Search Users'
                required=''
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <label>
                <span className='flaticon-search dark:text-white' />
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* End Title | Search | Add Room */}

      <BoxDashboard>
        <Table data={users} columns={searchUsersColumns} filterValue={filter} onFilter={setFilter} />
      </BoxDashboard>

    </>
  )
}

export default SearchUsersTable
