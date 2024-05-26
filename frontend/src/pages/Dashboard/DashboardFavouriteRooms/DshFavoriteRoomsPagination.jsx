import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PaginationContext } from '../../../context/PaginationContext'
import RoomSmall from '../../../components/common/Room/RoomSmall/RoomSmall'

const DshFavoriteRoomsPagination = ({ onDelete }) => {
  const { pageData } = useContext(PaginationContext)

  return (
    <>
      {pageData.map(room => (
        <RoomSmall
          key={room._id}
          room={room}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

DshFavoriteRoomsPagination.propTypes = {
  onDelete: PropTypes.func.isRequired
}

export default DshFavoriteRoomsPagination
