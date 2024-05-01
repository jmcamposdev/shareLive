import api from './api'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

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

  verifyToken: async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/verify`, {
        method: 'POST',
        // Pass the token in the Authorization header
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token // Añade el token al encabezado
        },
        body: JSON.stringify({ token })
      })
      return api.handleResponse(response)
    } catch (error) {
      console.error('Error posting data:', error)
      throw error
    }
  }
}

export default AuthService
