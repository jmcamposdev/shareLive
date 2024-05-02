import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ROLES } from '../constants/roles.constants'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import getUserCookiesData from '../utils/getUserCookiesData'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const user = useAuthUser()
  // const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const { token } = getUserCookiesData()
    setToken(token)
  }, [])

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
