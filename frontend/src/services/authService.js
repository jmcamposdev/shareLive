import api from './api'

const AuthService = {
  signIn: async (email, password) => {
    try {
      const user = await api.post('auth/signin', { email, password })
      return user
    } catch (error) {
      console.error('Error signing in:', error.message)
      throw error
    }
  },

  signUp: async (username, email, password) => {
    try {
      const newUser = await api.post('auth/signup', { username, email, password })
      return newUser
    } catch (error) {
      console.error('Error signing up:', error.message)
      throw error
    }
  },

  verifyToken: async () => {
    try {
      const newUser = await api.post('auth/verify', null)
      return newUser
    } catch (error) {
      console.error('Error signing up:', error.message)
      throw error
    }
  }
}

export default AuthService
