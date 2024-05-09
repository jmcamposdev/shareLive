import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { isAdministrator } from '../../../utils/user.utils'
import DashboardHomeUser from './DashboardHomeUser'
import DashboardHomeAdmin from './DashboardHomeAdmin'

function DashboardHome () {
  const user = useAuthUser()
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
