import DashboardLayout from '../../../layout/DashboardLayout'
import usersItems from '../../../data/usersItems'
import SearchUsersTable from '../../../components/Dashboard/SearchUsersTable/SearchUsersTable'

const DashboardSearchUsers = () => {
  return (
    <DashboardLayout>
      <SearchUsersTable users={usersItems} />
    </DashboardLayout>
  )
}

export default DashboardSearchUsers
