import TitleDashboard from '../../common/Dashboard/TitleDashboard/TitleDashboard.jsx'
import Table from '../../common/Table/Table.jsx'
import { useState } from 'react'
import BoxDashboard from '../../common/Dashboard/BoxDashboard/BoxDashboard.jsx'
import searchUsersColumns from './SearchUsersColumns.jsx'

const SearchUsersTable = ({ users }) => {
  const [filter, setFilter] = useState('')
  return (
    <>
      <div className='flex justify-between items-center mb30 mt-44 lg:mt-0'>
        <TitleDashboard title='Search Users' subtitle='Search any users in here.' />
        <div className='flex gap-4'>
          <div className='item1 mb15-sm'>
            <div className='search_area  z-40 w-[100dvw] lg:w-fit top-[65px] lg:top-0 rounded-b-lg bg-white dark:bg-midnight py-4 px-5 box-border lg:bg-transparent lg:dark:bg-transparent !left-0 !fixed lg:!relative'>
              <input
                type='text'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 placeholder:text-borderColor/40 dark:text-white dark:outline-white'
                placeholder='Search Users'
                required=''
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <label className='!absolute !left-[36px] !top-[34px] lg:relative'>
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
