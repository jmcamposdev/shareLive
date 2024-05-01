import { useContext } from 'react'
import { RoomSearchContext } from '../../../context/RoomSearchContext'
import { PaginationProvider } from '../../../context/PaginationContext'
import TopFilterBar from '../TopFilterBar/TopFilterBar'
import RoomListings from '../RoomListings/RoomListings'
import Pagination from '../../common/pagination/Pagintacion'

const RoomsSidebar = () => {
  const { rooms } = useContext(RoomSearchContext)
  // Get the rooms from the context
  const { gridView } = useContext(RoomSearchContext)
  const { isGridView } = gridView
  return (
    <PaginationProvider
      presetData={rooms}
      defaultItemsPerPage={6}
      elementIdToScroll='roomsContent'
    >
      <div className='row align-items-center mb20'>
        <TopFilterBar />
      </div>
      {/* End TopFilterBar */}
      <RoomListings isGridView={isGridView} />
      {/* End RoomListings */}
      <Pagination />
      {/* End Pagination */}
    </PaginationProvider>
  )
}

export default RoomsSidebar
