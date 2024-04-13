import { useEffect, useState } from 'react'
import RoomService from '../services/roomService'

const useRooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const roomsData = await RoomService.getAllRooms()
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
