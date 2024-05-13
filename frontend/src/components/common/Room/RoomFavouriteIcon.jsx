import { useState } from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { useNavigate } from 'react-router-dom'
import useAlertToast from '../../../hooks/useToast'
import UserService from '../../../services/UserService'

const RoomFavouriteIcon = ({ roomId, className }) => {
  const { toast } = useAlertToast()
  const user = useAuthUser()
  const authHeader = useAuthHeader()
  const navigate = useNavigate()
  const signIn = useSignIn()
  const [favouriteLoading, setFavouriteLoading] = useState(false)
  const [isRoomFavourite, setIsRoomFavourite] = useState(user && user.favouriteRoomsIds.includes(roomId))

  const handleFavourite = async () => {
    if (!user) {
      navigate('/login')
    } else {
      setFavouriteLoading(true)
      try {
        const updatedUser = await UserService.toggleFavoriteRoom(user._id, roomId)
        signIn({
          auth: {
            token: authHeader.split(' ')[1],
            type: authHeader.split(' ')[0]
          },
          userState: { ...updatedUser }
        })
        setIsRoomFavourite(!isRoomFavourite)
        setFavouriteLoading(false)
      } catch (error) {
        console.log(error)
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
