import DashboardLayout from '../../../layout/DashboardLayout'
import roomsData from '../../../data/roomsItems'
import SearchRoomsTable from '../../../components/Dashboard/SearchRooms/SearchRoomsTable/SearchRoomsTable'

const DshSearchRooms = () => {
  return (
    <DashboardLayout>
      <SearchRoomsTable rooms={roomsData} />
    </DashboardLayout>
  )
}

export default DshSearchRooms
