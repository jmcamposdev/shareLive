import DashboardLayout from '../../../layout/DashboardLayout'
import SearchRoomsTable from '../../../components/Dashboard/SearchRooms/SearchRoomsTable/SearchRoomsTable'
import useRooms from '../../../hooks/useRooms'
import { isAdministrator } from '../../../utils/user.utils'
import { useAuth } from '../../../context/AuthContext'
import DashboardMyRooms from '../DashboardMyRooms/DashboardMyRooms'

const DshSearchRooms = () => {
  const { user } = useAuth()
  const isAdmin = isAdministrator(user.roles)
  const { rooms, setRooms, loading } = useRooms(isAdmin ? null : user._id)
  return (
    <DashboardLayout>
      {isAdmin
        ? (
          <SearchRoomsTable
            rooms={rooms}
            setRooms={setRooms}
            loading={loading}
            title={isAdmin ? 'Search Rooms' : 'My Rooms'}
            subTitle={isAdmin ? 'Search all for rooms here!' : 'Search your rooms here!'}
          />
          )
        : (
          <DashboardMyRooms rooms={rooms} loading={loading} />
          )}
    </DashboardLayout>
  )
}

export default DshSearchRooms
