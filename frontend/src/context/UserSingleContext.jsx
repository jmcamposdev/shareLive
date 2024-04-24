import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserService from '../services/UserService'

export const UserSingleContext = createContext()

export const useUserSingle = () => useContext(UserSingleContext)

export const UserSingleProvider = ({ userId, children }) => {
  // Get the id from the URL or use the userId prop
  const id = useParams().id || userId
  const [user, setUser] = useState({})
  const [userRooms, setUserRooms] = useState([])
  const [loadingCount, setLoadingCount] = useState(2) // Dos peticiones
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true) // Establecer loading a true cuando se inicia la carga

    const fetchUser = async () => {
      try {
        const userData = await UserService.getUser(id)
        setUser(userData)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoadingCount(prev => prev - 1) // Decrementar el contador cuando la petición se complete
      }
    }
    fetchUser()
  }, [id])

  useEffect(() => {
    setLoading(true) // Establecer loading a true cuando se inicia la carga

    const fetchUserRooms = async () => {
      try {
        const rooms = await UserService.getAllRoomsByUser(id)
        setUserRooms(rooms)
      } catch (error) {
        console.error('Error fetching user rooms:', error)
      } finally {
        setLoadingCount(prev => prev - 1) // Decrementar el contador cuando la petición se complete
      }
    }

    fetchUserRooms()
  }, [id])

  // Actualizar el estado de loading cuando loadingCount llegue a cero
  useEffect(() => {
    setLoading(loadingCount > 0)
  }, [loadingCount])

  const contextValue = useMemo(() => ({
    id,
    user,
    userRooms,
    loading
  }), [id, user, loading])

  return (
    <UserSingleContext.Provider value={contextValue}>
      {children}
    </UserSingleContext.Provider>
  )
}
