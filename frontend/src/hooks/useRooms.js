import { useEffect, useState } from 'react'
import RoomService from '../services/roomService'
import UserService from '../services/UserService'

const useRooms = (userId) => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        let roomsData = []

        if (userId) {
          roomsData = await UserService.getAllRoomsByUser(userId)
        } else {
          roomsData = await RoomService.getAllRooms()
        }

        setRooms(roomsData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching rooms:', error)
      }
    }

    fetchRooms()
  }, [])

  return { rooms, loading }
}

export default useRooms
