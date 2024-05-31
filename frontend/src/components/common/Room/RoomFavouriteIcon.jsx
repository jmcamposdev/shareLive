import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAlertToast from '../../../hooks/useToast'
import UserService from '../../../services/UserService'
import { useAuth } from '../../../context/AuthContext'

const RoomFavouriteIcon = ({ roomId, className }) => {
  const { toast } = useAlertToast()
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()
  const [favouriteLoading, setFavouriteLoading] = useState(false)
  const [isRoomFavourite, setIsRoomFavourite] = useState(user && user.favouriteRoomsIds.includes(roomId))

  const handleFavourite = async () => {
    if (!user) {
      navigate('/login')
    } else {
      setFavouriteLoading(true)
      try {
        const updatedUser = await UserService.toggleFavoriteRoom(user._id, roomId)
        updateUser(updatedUser)
        setIsRoomFavourite(!isRoomFavourite)
        setFavouriteLoading(false)
      } catch (error) {
        toast.showError('Error adding to favourites')
      }
    }
  }

  return (
    <button
      disabled={favouriteLoading}
      onClick={handleFavourite}
      className={`
      !flex justify-center items-center icon mr-[10px] dark:bg-midnight dark:!border-none  dark:hover:!bg-orangePrimary/10 
      ${isRoomFavourite ? 'text-red-500' : ''}
      ${className}
      `}
    >
      <span className={`fa-heart dark:text-white ${isRoomFavourite ? 'text-red-500 fa-solid' : 'fa-light'}`} />
    </button>
  )
}

export default RoomFavouriteIcon
