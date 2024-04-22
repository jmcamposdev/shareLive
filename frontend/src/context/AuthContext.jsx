import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ROLES } from '../constants/roles.constants'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(window.localStorage.getItem('token'))
  const [user, setUser] = useState(window.localStorage.getItem('user'))

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken)
  }

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token)
    } else {
      window.localStorage.removeItem('token')
    }
  }, [token])

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', user)
    } else {
      window.localStorage.removeItem('user')
    }
  }, [user])

  const updateUserData = (newUser) => {
    setUser(JSON.stringify(newUser))
  }

  const isAdministrator = () => {
    if (user) {
      const { roles } = JSON.parse(user)
      return roles.some((role) => role.name === 'admin')
    }
    return false
  }

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user: user ? JSON.parse(user) : null,
      updateUserData,
      role: user ? JSON.parse(user).roles[0].name : ROLES.GUEST,
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