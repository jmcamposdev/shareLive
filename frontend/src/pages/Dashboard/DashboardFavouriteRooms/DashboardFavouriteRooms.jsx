import DashboardLayout from '../../../layout/DashboardLayout'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import RoomsContainer from '../../../components/common/Dashboard/RoomsContainer/RoomsContainer'
import RoomSmallSkeleton from '../../../components/common/Room/RoomSmall/RoomsSmallSkeleton'
import useFavoriteRooms from '../../../hooks/useFavoriteRooms'
import { useAuth } from '../../../context/AuthContext'
import { PaginationProvider } from '../../../context/PaginationContext'
import Pagination from '../../../components/common/pagination/Pagintacion'
import DshFavoriteRoomsPagination from './DshFavoriteRoomsPagination'
import Selector from '../../../components/common/Inputs/Selector'
import { useMemo, useState } from 'react'

const ENTRIES_PER_PAGES = [
  { value: 8, label: 1 },
  { value: 16, label: 16 },
  { value: 24, label: 24 },
  { value: 32, label: 32 },
  { value: 40, label: 40 }
]

const DashboardFavouriteRooms = () => {
  const { user } = useAuth()
  const [search, setSearch] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(ENTRIES_PER_PAGES[0])
  const { favoriteRooms, loading, deleteFavoriteRoom } = useFavoriteRooms(user)
  const filteredFavoriteRooms = useMemo(() =>
    favoriteRooms.filter(room =>
      room.title.toLowerCase().includes(search) ||
        room.excerpt?.toLowerCase().includes(search) ||
        room.description?.toLowerCase().includes(search) ||
        room.city.toLowerCase().includes(search) ||
        room.state.toLowerCase().includes(search) ||
        room.country.toLowerCase().includes(search)
    ), [favoriteRooms, search])
  const loadingFavoriteRooms = Array.from({ length: entriesPerPage.value }, (_, index) => <RoomSmallSkeleton key={index} />)

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
      {/* Start of Search and Entries per page */}
      <div className=''>
        <div className='flex items-center font-medium !mb-7 w-'>
          <Selector
            id='entriesPerPage'
            inputName='entriesPerPage'
            inputType='select'
            labelClassName='dark:text-white'
            containerClassName='w-40 dark:bg-midnight !mb-0'
            options={ENTRIES_PER_PAGES}
            optionName='label'
            optionValue='value'
            value={entriesPerPage.value}
            onChange={(option) => setEntriesPerPage(option)}
          />
          <span className='pl-2 dark:!text-white duration-300 ease-linear mb-0'>Entries Per Page</span>
        </div>
      </div>
      {/* End of Search and Entries per page */}
      <RoomsContainer>
        {loading && loadingFavoriteRooms}
        {favoriteRooms.length === 0 && !loading
          ? (
            <div className='min-h-[40dvh] w-full flex items-center justify-center'>
              <h3 className='black:text-white'>No rooms favourited yet...</h3>
            </div>
            )
          : (
            <PaginationProvider
              presetData={filteredFavoriteRooms}
              defaultItemsPerPage={entriesPerPage.value}
              elementType='rooms'
            >
              <DshFavoriteRoomsPagination onDelete={deleteFavoriteRoom} />
              <div className='w-full mt-7'>
                <Pagination />
              </div>
            </PaginationProvider>
            )}
      </RoomsContainer>
    </DashboardLayout>
  )
}

export default DashboardFavouriteRooms
