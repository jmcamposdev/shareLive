import DashboardLayout from '../../../layout/DashboardLayout'
import SearchRoomsTable from '../../../components/Dashboard/SearchRooms/SearchRoomsTable/SearchRoomsTable'
import useRooms from '../../../hooks/useRooms'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { isAdministrator } from '../../../utils/user.utils'

const DshSearchRooms = () => {
  const user = useAuthUser()
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
