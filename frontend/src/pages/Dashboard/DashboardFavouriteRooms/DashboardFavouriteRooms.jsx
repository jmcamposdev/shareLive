import DashboardLayout from '../../../layout/DashboardLayout'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import useFavoriteRooms from '../../../hooks/useFavoriteRooms'
import { useAuth } from '../../../context/AuthContext'
import { useState } from 'react'
import DshRoomsListing from '../../../components/Dashboard/DshRoomsListing/DshRoomsListing'

const DashboardFavouriteRooms = () => {
  const { user } = useAuth()
  const [search, setSearch] = useState('')
  const { favoriteRooms, loading, deleteFavoriteRoom } = useFavoriteRooms(user)

  return (

    <DashboardLayout>
      <div className='flex justify-between items-center 2xl:mb30 mt-56 2xl:mt-0'>
        <TitleDashboard title='Your favourite Rooms' subtitle='Search your favourite rooms here.' />

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
        </div>
      </div>
      <DshRoomsListing rooms={favoriteRooms} onDelete={deleteFavoriteRoom} search={search} loading={loading} />
    </DashboardLayout>
  )
}

export default DashboardFavouriteRooms
