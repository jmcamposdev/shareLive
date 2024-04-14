import api from './api'

const LocationService = {
  getLocation: async () => {
    try {
      const response = await fetch('https://ipapi.co/json')
      return api.handleResponse(response)
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
}

export default LocationService
