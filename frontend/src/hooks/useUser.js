import { useEffect, useState } from 'react'
import UserService from '../services/UserService'

const useUser = (userId) => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getUser(userId)
        setUser(response)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [userId])

  return { user, setUser, loading }
}

export default useUser
