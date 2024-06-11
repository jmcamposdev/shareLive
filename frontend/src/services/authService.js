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

  signUp: async (username, firstName, lastName, email, password) => {
    try {
      const newUser = await api.post('auth/signup', { username, firstName, lastName, email, password })
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
  },

  sendPasswordResetEmail: async (email, OPT) => {
    try {
      const response = await api.post('auth/send-reset-password-email', { email, OPT })
      return response
    } catch (error) {
      console.error('Error sending password reset email:', error.message)
      throw error
    }
  }
}

export default AuthService
