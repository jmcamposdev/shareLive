import PropTypes from 'prop-types'
import RoomsContainer from '../../common/Dashboard/RoomsContainer/RoomsContainer'
import { PaginationProvider } from '../../../context/PaginationContext'
import Pagination from '../../common/pagination/Pagintacion'
import { useMemo, useState } from 'react'
import Selector from '../../common/Inputs/Selector'
import RoomSmallSkeleton from '../../common/Room/RoomSmall/RoomsSmallSkeleton'
import DshRoomsPagination from './DshRoomsPagination'
import BoxDashboard from '../../common/Dashboard/BoxDashboard/BoxDashboard'
import LottiePlayer from '../../common/LottiePlayer/LottiePlayer'
import NoFavorites from '../../../assets/lotties/noFavorites.json'

const ENTRIES_PER_PAGES = [
  { value: 8, label: 8 },
  { value: 16, label: 16 },
  { value: 24, label: 24 },
  { value: 32, label: 32 },
  { value: 40, label: 40 }
]

const DshRoomsListing = ({ rooms, onDelete, onEdit, search, loading = false }) => {
  const [entriesPerPage, setEntriesPerPage] = useState(ENTRIES_PER_PAGES[0])
  const favoriteRoomsSkeletons = Array.from({ length: entriesPerPage.value }, (_, index) => <RoomSmallSkeleton key={index} />)

  const filteredFavoriteRooms = useMemo(() =>
    rooms.filter(room =>
      room.title.toLowerCase().includes(search) ||
        room.excerpt?.toLowerCase().includes(search) ||
        room.description?.toLowerCase().includes(search) ||
        room.city.toLowerCase().includes(search) ||
        room.state.toLowerCase().includes(search) ||
        room.country.toLowerCase().includes(search)
    ), [rooms, search])

  return (
    <BoxDashboard>
      <div className='2xl:p-5'>
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
          {loading && favoriteRoomsSkeletons}

          {filteredFavoriteRooms.length === 0 && !loading
            ? (
              <>
                <h3 className='dark:text-white w-full text-center'>No Rooms here...</h3>
                <LottiePlayer lottie={NoFavorites} />
              </>
              )
            : (
              <PaginationProvider
                presetData={filteredFavoriteRooms}
                defaultItemsPerPage={entriesPerPage.value}
                elementType='rooms'
              >
                <DshRoomsPagination onDelete={onDelete} onEdit={onEdit} />
                <div className='w-full mt-7'>
                  <Pagination />
                </div>
              </PaginationProvider>
              )}
        </RoomsContainer>
      </div>

    </BoxDashboard>
  )
}

DshRoomsListing.propTypes = {
  rooms: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  search: PropTypes.string,
  loading: PropTypes.bool
}

export default DshRoomsListing
