import PropTypes from 'prop-types'
import { useContext } from 'react'
import { PaginationContext } from '../../../context/PaginationContext'
import RoomSmall from '../../common/Room/RoomSmall/RoomSmall'

const DshRoomsPagination = ({ onDelete, onEdit }) => {
  const { pageData } = useContext(PaginationContext)

  return (
    <>
      {pageData.map(room => (
        <RoomSmall
          key={room._id}
          room={room}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  )
}

DshRoomsPagination.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
}

export default DshRoomsPagination
