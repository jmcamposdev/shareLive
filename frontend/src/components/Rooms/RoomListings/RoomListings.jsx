import PropTypes from 'prop-types'
import RoomSimple from '../../common/Room/RoomSimple/RoomSimple'
import RoomDetailed from '../../common/Room/RoomDetailed/RoomDetailed'
import { PaginationContext } from '../../../context/PaginationContext'
import { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'

const RoomListings = ({ rooms, isGridView }) => {
  const { loading } = useContext(RoomContext)
  const { pageData, itemsPerPage } = useContext(PaginationContext)
  const roomsData = pageData || rooms

  const renderLoading = () => {
    if (!loading) return null

    if (isGridView) {
      return (
        <>
          {
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <RoomSimple key={_} loading />
            ))
          }
        </>
      )
    }

    return (
      <>
        {
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <RoomDetailed key={_} loading />
          ))
        }
      </>
    )
  }

  return (
    <div className={`row ${isGridView ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
      {renderLoading()}

      {
        roomsData.length === 0
          ? (
            <h4 className='text-center'>No rooms found</h4>
            )
          : (
              roomsData.map((room) => (
                isGridView ? <RoomSimple key={room._id} room={room} /> : <RoomDetailed key={room._id} room={room} />
              ))
            )
      }
    </div>
  )
}

RoomListings.propTypes = {
  rooms: PropTypes.array,
  isGridView: PropTypes.bool.isRequired
}

export default RoomListings
