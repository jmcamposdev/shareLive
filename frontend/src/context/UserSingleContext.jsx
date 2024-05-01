import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../services/UserService'
import useAlertToast from '../hooks/useToast'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'

export const UserSingleContext = createContext()

export const useUserSingle = () => useContext(UserSingleContext)

export const UserSingleProvider = ({ userId, children }) => {
  // Get the id from the URL or use the userId prop
  const navigate = useNavigate()
  const { toast } = useAlertToast()
  const id = useParams().id || userId
  const user = useAuthUser()
  const [userSingle, setUserSingle] = useState({})
  const [userRooms, setUserRooms] = useState([])
  const [loadingCount, setLoadingCount] = useState(2) // Dos peticiones
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true) // Establecer loading a true cuando se inicia la carga

    const fetchUser = async () => {
      try {
        const userData = await UserService.getUser(id)
        setUserSingle(userData)
      } catch (error) {
        console.error('Error fetching user:', error)
        navigate('/404')
      } finally {
        setLoadingCount(prev => prev - 1) // Decrementar el contador cuando la petición se complete
      }
    }
    fetchUser()
  }, [id])

  useEffect(() => {
    setLoading(true) // Establecer loading a true cuando se inicia la carga

    const fetchUserRooms = async () => {
      try {
        const rooms = await UserService.getAllRoomsByUser(id)
        setUserRooms(rooms)
      } catch (error) {
        console.error('Error fetching user rooms:', error)
      } finally {
        setLoadingCount(prev => prev - 1) // Decrementar el contador cuando la petición se complete
      }
    }

    fetchUserRooms()
  }, [id])

  // Actualizar el estado de loading cuando loadingCount llegue a cero
  useEffect(() => {
    setLoading(loadingCount > 0)
  }, [loadingCount])

  const checkIfYouAlreadyReviewed = () => {
    return userSingle.reviews?.some(review => review.ownerId === user?._id) || false
  }

  const getYourReview = () => {
    return userSingle.reviews?.find(review => review.ownerId === user?._id) || null
  }

  const updateReview = async (review) => {
    try {
      // Actualizar la reseña en el estado local
      const updatedReviews = userSingle.reviews.map(r => r._id === review._id ? review : r)
      setUserSingle({ ...userSingle, reviews: updatedReviews })
      // Actualizar la reseña en la base de datos
      await UserService.updateUserReview(id, review)
    } catch (error) {
      console.error('Error updating user review:', error)
    }
  }

  const createReview = async (review) => {
    try {
      const resReview = await UserService.createReview(id, review)
      // Add the review to the user
      setUserSingle({ ...userSingle, reviews: [...userSingle.reviews, resReview] })
      // Show success toast
      toast.showSuccess('Review created successfully')
    } catch (error) {
      console.error('Error creating user review:', error)
      // Show error toast
      toast.showError(error.message)
    }
  }

  const contextValue = useMemo(() => ({
    id,
    user: userSingle,
    userRooms,
    loading,
    youAlreadyReviewed: checkIfYouAlreadyReviewed(),
    yourReview: getYourReview(),
    updateReview,
    createReview
  }), [id, userSingle, loading])

  return (
    <UserSingleContext.Provider value={contextValue}>
      {children}
    </UserSingleContext.Provider>
  )
}
