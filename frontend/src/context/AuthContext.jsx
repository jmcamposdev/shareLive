import { createContext, useContext, useMemo } from 'react'
import { ROLES } from '../constants/roles.constants'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const authHeader = useAuthHeader()
  const [user, setUser] = useAuthUser()
  const token = authHeader.split(' ')[1]

  const isAdministrator = () => {
    let isAdministrator = false
    if (user) {
      const { roles } = user
      isAdministrator = roles.some((role) => role.name === ROLES.SUPER_ADMIN || role.name === ROLES.ADMIN)
    }
    return isAdministrator
  }

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      user: user || null,
      setUser,
      role: user ? user.roles[0].name : ROLES.GUEST,
      isAdministrator: isAdministrator()
    }),
    [token, user]
  )

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
