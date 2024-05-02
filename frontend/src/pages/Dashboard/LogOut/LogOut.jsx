import { useEffect } from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
  const navigate = useNavigate()
  const signOut = useSignOut()

  useEffect(() => {
    signOut()
    navigate('/')
  }
  , [navigate, signOut])

  return null
}

export default LogOut
