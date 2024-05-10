import { useEffect, useState } from 'react'
import UserService from '../services/UserService'

const useUserReviews = (userId) => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const reviews = await UserService.getUserReviews(userId)
        setLoading(false)
        setReviews(reviews)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUserReviews()
  }, [userId])

  const updateReview = async (review) => {
    try {
      // Actualizar la reseña en el estado local
      const updatedReviews = reviews.map(r => r._id === review._id ? review : r)
      setReviews(updatedReviews)
      // Actualizar la reseña en la base de datos
      await UserService.updateUserReview(review.assignedId, review)
    } catch (error) {
      console.error('Error updating user review:', error)
    }
  }

  const deleteReview = async (reviewId) => {
    try {
      // Eliminar la reseña del estado local
      const updatedReviews = reviews.filter(r => r._id !== reviewId)
      setReviews(updatedReviews)
      // Eliminar la reseña de la base de datos
      await UserService.deleteReview(userId, reviewId)
    } catch (error) {
      console.error('Error deleting user review:', error)
    }
  }

  return { reviews, loading, updateReview, deleteReview }
}

export default useUserReviews
