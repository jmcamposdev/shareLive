import api from './api'

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
            `users/${user.id}`,
            user
      )
      return updatedUser
    } catch (error) {
      console.error('Error updating user:', error.message)
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
  }
}

export default UserService
