import { createContext, useContext, useEffect, useState } from 'react'
import RoomService from '../services/roomService'
import { useParams } from 'react-router-dom'

export const RoomSingleContext = createContext()

export const useRoomSingle = () => useContext(RoomSingleContext)

export const RoomSingleProvider = ({ roomId, children }) => {
  // Get the id from the URL or use the roomId prop
  const id = useParams().id || roomId
  const [room, setRoom] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomsData = await RoomService.getRoom(id)
        setRoom(roomsData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching rooms:', error)
      }
    }

    fetchRoom()
  }, [id])

  const contextValue = {
    id,
    room,
    loading
  }

  return (
    <RoomSingleContext.Provider value={contextValue}>
      {children}
    </RoomSingleContext.Provider>
  )
}
