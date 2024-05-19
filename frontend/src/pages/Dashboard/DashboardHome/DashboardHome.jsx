import { isAdministrator } from '../../../utils/user.utils'
import DashboardHomeUser from './DashboardHomeUser'
import DashboardHomeAdmin from './DashboardHomeAdmin'
import { useAuth } from '../../../context/AuthContext'

function DashboardHome () {
  const { user } = useAuth()
  const isAdmin = isAdministrator(user.roles)

  return (
    <>
      {isAdmin
        ? (
          <DashboardHomeAdmin />
          )
        : (
          <DashboardHomeUser />
          )}
    </>

  )
}

export default DashboardHome
