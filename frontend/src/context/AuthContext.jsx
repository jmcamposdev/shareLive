import { createContext, useContext, useMemo, useState } from 'react'
import { ROLES } from '../constants/roles.constants'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import useSignOut from 'react-auth-kit/hooks/useSignOut'

const AuthContext = createContext()

const AuthUserProvider = ({ children }) => {
  const authHeader = useAuthHeader()
  const signIn = useSignIn()
  const signOut = useSignOut()
  const token = authHeader?.split(' ')[1] || null
  const [user, setUser] = useState(useAuthUser())

  const isAdministrator = useMemo(() => {
    let isAdministrator = false
    if (user) {
      const { roles } = user
      isAdministrator = roles.some((role) => role.name === ROLES.SUPER_ADMIN || role.name === ROLES.ADMIN)
    }
    return isAdministrator
  }, [user])

  const updateUser = (newUser) => {
    signIn({
      auth: {
        token: authHeader.split(' ')[1],
        type: authHeader.split(' ')[0]
      },
      userState: { ...newUser }
    })
    setUser(newUser)
  }

  const signInUser = (user, token) => {
    signIn({
      auth: {
        token,
        type: 'Bearer'
      },
      userState: { ...user }
    })
    setUser(user)
  }

  const logOutUser = () => {
    signOut()
    setUser(null)
  }

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      user: user || null,
      setUser,
      role: user ? user.roles[0].name : ROLES.GUEST,
      isAdministrator,
      updateUser,
      signInUser,
      logOutUser
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

export default AuthUserProvider
