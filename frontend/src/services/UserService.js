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
  }
}

export default UserService
