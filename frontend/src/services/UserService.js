import useAuth from '../hooks/useAuth'
import api from './api'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const UserService = {
  getAllUsers: async () => {
    try {
      const users = await api.get('users')
      return users
    } catch (error) {
      console.error('Error getting users:', error.message)
      throw error
    }
  },

  getUser: async (id) => {
    try {
      const user = await api.get(`users/${id}`)
      return user
    } catch (error) {
      console.error('Error getting user:', error.message)
      throw error
    }
  },

  createUser: async (user) => {
    try {
      const newUser = await api.post('users', user)
      return newUser
    } catch (error) {
      console.error('Error creating user:', error.message)
      throw error
    }
  },

  updateUser: async (user) => {
    try {
      const updatedUser = await api.put(
            `users/${user._id}`,
            user
      )
      return updatedUser
    } catch (error) {
      console.error('Error updating user:', error.message)
      throw error
    }
  },

  uploadAvatar: async (id, avatar) => {
    const { token } = useAuth()
    try {
      const formData = new FormData()
      formData.append('avatar', avatar)

      const avatarResponse = await fetch(`${BASE_URL}/users/${id}/avatar`, {
        method: 'POST',
        headers: {
          'x-access-token': token
        },
        body: formData
      })
      if (avatarResponse.ok) { // Verificar si la solicitud fue exitosa
        const avatarData = await avatarResponse.json() // Obtener el JSON devuelto por el servidor
        return avatarData
      } else {
        throw new Error('Error al cargar el avatar: ' + avatarResponse.status)
      }
    } catch (error) {
      console.error('Error uploading avatar:', error.message)
      throw error
    }
  },

  changePassword: async (id, currentPassword, newPassword) => {
    try {
      await api.put(`users/${id}/password`, { currentPassword, newPassword })
    } catch (error) {
      console.error('Error changing password:', error.message)
      throw error
    }
  },

  resetPassword: async (email, password) => {
    try {
      await api.post('users/reset-password', { email, password })
    } catch (error) {
      console.error('Error resetting password:', error.message)
      throw error
    }
  },

  deleteUser: async (id) => {
    try {
      await api.delete(`users/${id}`)
    } catch (error) {
      console.error('Error deleting user:', error.message)
      throw error
    }
  },

  getUserReviews: async (id) => {
    try {
      const reviews = await api.get(`users/${id}/reviews`)
      return reviews
    } catch (error) {
      console.error('Error getting user reviews:', error.message)
      throw error
    }
  },

  updateUserReview: async (userId, review) => {
    try {
      const updatedReview = await api.put(
            `users/${userId}/reviews/${review._id}`,
            review
      )
      return updatedReview
    } catch (error) {
      console.error('Error updating user review:', error.message)
      throw error
    }
  },

  createReview: async (userId, review) => {
    try {
      const newReview = await api.post(`users/${userId}/reviews`, review)
      return newReview
    } catch (error) {
      console.error('Error creating user review:', error.message)
      throw error
    }
  },

  deleteReview: async (userId, reviewId) => {
    try {
      await api.delete(`users/${userId}/reviews/${reviewId}`)
    } catch (error) {
      console.error('Error deleting user review:', error.message)
      throw error
    }
  },

  getAllRoomsByUser: async (id) => {
    if (!id) {
      return []
    }

    try {
      const rooms = await api.get(`users/${id}/rooms`)
      return rooms
    } catch (error) {
      console.error('Error getting rooms:', error.message)
      throw error
    }
  },

  toggleFavoriteRoom: async (userId, roomId) => {
    try {
      const user = await api.post(`users/${userId}/rooms/favourites`, { roomId })
      return user
    } catch (error) {
      console.error('Error toggling favorite room:', error.message)
      throw error
    }
  },

  getFavouriteRooms: async (id) => {
    try {
      const rooms = await api.get(`users/${id}/rooms/favourites`)
      return rooms
    } catch (error) {
      console.error('Error getting favourite rooms:', error.message)
      throw error
    }
  },

  getContactList: async (id) => {
    try {
      const contacts = await api.get(`users/${id}/contacts`)
      return contacts
    } catch (error) {
      console.error('Error getting contacts:', error.message)
      throw error
    }
  },

  addContact: async (userId, contactId) => {
    try {
      const contact = await api.post(`users/${userId}/contacts`, { contactId })
      return contact
    } catch (error) {
      console.error('Error adding contact:', error.message)
      throw error
    }
  },

  deleteContact: async (userId, contactId) => {
    try {
      await api.delete(`users/${userId}/contacts/${contactId}`)
    } catch (error) {
      console.error('Error deleting contact:', error.message)
      throw error
    }
  }

}

export default UserService
