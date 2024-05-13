import TitleDashboard from '../../common/Dashboard/TitleDashboard/TitleDashboard.jsx'
import Table from '../../common/Table/Table.jsx'
import { useState } from 'react'
import BoxDashboard from '../../common/Dashboard/BoxDashboard/BoxDashboard.jsx'
import searchUsersColumns from './SearchUsersColumns.jsx'

const SearchUsersTable = ({ users }) => {
  const [filter, setFilter] = useState('')
  return (
    <>
      <div className='flex justify-between items-center 2xl:mb30 mt-56 2xl:mt-0'>
        <TitleDashboard title='Search Users' subtitle='Search any users in here.' />
        <div className='flex gap-4'>
          <div className='item1 mb15-sm'>
            <div className='search_area  z-40 w-[100dvw] lg:w-[calc(100dvw-300px)] 2xl:w-fit top-[65px] lg:top-[92px] rounded-b-lg bg-white dark:bg-midnight py-4 px-5 box-border 2xl:bg-transparent 2xl:dark:bg-transparent !right-0 !fixed 2xl:!relative 2xl:!top-0'>
              <input
                type='text'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 dark:placeholder:text-borderColor/40 dark:text-white dark:outline-white placeholder:text-[#212529bf]'
                placeholder='Search Users'
                required=''
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              <label className='!absolute !left-[36px] !top-[34px] 2xl:relative'>
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
