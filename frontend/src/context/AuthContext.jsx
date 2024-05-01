import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ROLES } from '../constants/roles.constants'
import AuthService from '../services/authService'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(window.localStorage.getItem('token'))
  const [user, setUser] = useState(window.localStorage.getItem('user'))

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken)
  }

  // Check that the token is valid
  useEffect(() => {
    if (token) {
      AuthService.verifyToken(token)
        .catch((error) => {
          console.error('Error verifying token:', error.message)
          setToken(null)
          setUser(null)
        })
    }
  }, [token])

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
    let isAdministrator = false
    if (user) {
      const { roles } = JSON.parse(user)
      isAdministrator = roles.some((role) => role.name === 'admin')
    }
    return isAdministrator
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
