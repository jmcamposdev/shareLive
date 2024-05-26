import { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import { useAuth } from '../context/AuthContext'

const useFavoriteRooms = (favoriteUser) => {
  const { user, updateUser } = useAuth()
  const [favoriteRooms, setFavoriteRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await UserService.getFavouriteRooms(favoriteUser._id)
        setFavoriteRooms(roomData)
      } catch (error) {
        console.error('Error fetching room:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRoom()
  }
  , [])

  const deleteFavoriteRoom = async (roomId) => {
    if (!favoriteUser) return

    try {
      setFavoriteRooms(favoriteRooms.filter((room) => room._id !== roomId))
      const updatedUser = await UserService.toggleFavoriteRoom(user._id, roomId)
      if (user._id === favoriteUser._id) {
        updateUser(updatedUser)
      }
    } catch (error) {
      console.error('Error deleting favorite room:', error)
    }
  }

  return {
    favoriteRooms,
    loading,
    deleteFavoriteRoom
  }
}

export default useFavoriteRooms
