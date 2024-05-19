import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import RoomService from '../services/roomService'
import { useNavigate, useParams } from 'react-router-dom'

export const RoomSingleContext = createContext()

export const useRoomSingle = () => useContext(RoomSingleContext)

export const RoomSingleProvider = ({ roomId, children }) => {
  // Get the id from the URL or use the roomId prop
  const navigate = useNavigate()
  const id = useParams().id || roomId
  const [room, setRoom] = useState({})
  const [visits, setVisits] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomsData = await RoomService.getRoom(id)
        setRoom(roomsData)
        const visitsData = await RoomService.getVisits(id)
        setVisits(visitsData)
        setLoading(false)
      } catch (error) {
        navigate('/404')
        console.error('Error fetching rooms:', error)
      }
    }

    fetchRoom()
  }, [id])

  const contextValue = useMemo(() => ({
    id,
    room,
    visits,
    loading
  }), [id, room, loading])

  return (
    <RoomSingleContext.Provider value={contextValue}>
      {children}
    </RoomSingleContext.Provider>
  )
}
