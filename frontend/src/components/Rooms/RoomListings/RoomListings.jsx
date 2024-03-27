import RoomSimple from '../../common/Room/RoomSimple'
import RoomDetailed from '../../common/Room/RoomDetailed'
import { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'

const RoomListings = () => {
  // Get the rooms from the context
  const { rooms, gridView } = useContext(RoomContext)
  const { isGridView } = gridView
  return (
    <div className={`row ${isGridView ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
      {rooms.map((room) => (
        isGridView ? <RoomSimple key={room.id} room={room} /> : <RoomDetailed key={room.id} room={room} />
      ))}
    </div>
  )
}

export default RoomListings
