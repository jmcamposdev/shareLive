import { useEffect, useState } from 'react'
import RoomService from '../services/roomService'

const useRoom = (roomId) => {
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await RoomService.getRoom(roomId)
        setRoom(roomData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching room:', error)
      }
    }

    fetchRoom()
  }
  , [roomId])

  return { room, loading }
}

export default useRoom
