import api from './api'

const RadarService = {
  getAutocomplete: async (searchValue) => {
    if (!searchValue) return []

    const query = searchValue.replace(' ', '+')
    try {
      const response = await fetch(`https://api.radar.io/v1/search/autocomplete?query=${query}`, {
        headers: {
          Authorization: import.meta.env.VITE_RADAR_API_KEY
        }
      })
      return api.handleResponse(response)
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
}

export default RadarService
