import DashboardLayout from '../../../layout/DashboardLayout'
import SearchUsersTable from '../../../components/Dashboard/SearchUsersTable/SearchUsersTable'
import useUsers from '../../../hooks/useUsers'
import { useAuth } from '../../../context/AuthContext'
import { useMemo } from 'react'

const DashboardSearchUsers = () => {
  const { users, setUsers, loading } = useUsers()
  const { user } = useAuth()

  // Remove the current user from the list
  const filteredUsers = useMemo(() => users.filter(u => u._id !== user._id), [users, user])

  return (
    <DashboardLayout>
      <SearchUsersTable
        users={filteredUsers}
        setUsers={setUsers}
        loading={loading}
      />
    </DashboardLayout>
  )
}

export default DashboardSearchUsers
