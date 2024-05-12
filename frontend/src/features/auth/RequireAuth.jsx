import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation()
  const user = useAuthUser()
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  const { roles } = user
  const role = roles[0].name
  const content = (
    allowedRoles.includes(role)
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )

  return content
}

export default RequireAuth
