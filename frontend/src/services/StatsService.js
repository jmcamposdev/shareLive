import api from './api'

const StatsService = {
  getWeeklyStats: async () => {
    try {
      const stats = await api.get('weekly-stats')
      return stats
    } catch (error) {
      console.error('Error getting weekly stats:', error.message)
      throw error
    }
  },

  getRoomsStats: async () => {
    try {
      const stats = await api.get('rooms-stats')
      return stats
    } catch (error) {
      console.error('Error getting rooms stats:', error.message)
      throw error
    }
  },

  getReviewsStats: async () => {
    try {
      const stats = await api.get('reviews/stats')
      return stats
    } catch (error) {
      console.error('Error getting reviews stats:', error.message)
      throw error
    }
  }
}

export default StatsService
