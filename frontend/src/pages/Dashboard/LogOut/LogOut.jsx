import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

const LogOut = () => {
  const { logOutUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    logOutUser()
    navigate('/')
  }
  , [navigate, logOutUser])

  return null
}

export default LogOut
