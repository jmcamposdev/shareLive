import DashboardLayout from '../../../layout/DashboardLayout'
import SearchRoomsTable from '../../../components/Dashboard/SearchRooms/SearchRoomsTable/SearchRoomsTable'
import useRooms from '../../../hooks/useRooms'
import { isAdministrator } from '../../../utils/user.utils'
import { useAuth } from '../../../context/AuthContext'

const DshSearchRooms = () => {
  const { user } = useAuth()
  const isAdmin = isAdministrator(user.roles)
  const { rooms, loading } = useRooms(isAdmin ? null : user._id)
  return (
    <DashboardLayout>
      <SearchRoomsTable
        rooms={rooms}
        loading={loading}
        title={isAdmin ? 'Search Rooms' : 'My Rooms'}
        subTitle={isAdmin ? 'Search all for rooms here!' : 'Search your rooms here!'}
      />
    </DashboardLayout>
  )
}

export default DshSearchRooms
