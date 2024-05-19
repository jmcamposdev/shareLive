import { useEffect, useState } from 'react'
import UserService from '../services/UserService'

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getAllUsers()
        setUsers(response)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  return { users, setUsers, loading }
}

export default useUsers
