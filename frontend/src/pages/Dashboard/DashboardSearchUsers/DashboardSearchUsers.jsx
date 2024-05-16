import DashboardLayout from '../../../layout/DashboardLayout'
import SearchUsersTable from '../../../components/Dashboard/SearchUsersTable/SearchUsersTable'
import useUsers from '../../../hooks/useUsers'

const DashboardSearchUsers = () => {
  const { users, setUsers, loading } = useUsers()

  return (
    <DashboardLayout>
      <SearchUsersTable
        users={users}
        setUsers={setUsers}
        loading={loading}
      />
    </DashboardLayout>
  )
}

export default DashboardSearchUsers
