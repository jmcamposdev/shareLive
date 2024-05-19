import { useEffect, useState } from 'react'
import StatsService from '../services/StatsService'

const useDshHomeAdmin = () => {
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      try {
        const roomStats = await StatsService.getRoomsStats()
        const reviewsStats = await StatsService.getReviewsStats()
        setStats({
          rooms: roomStats,
          reviews: reviewsStats
        })

        setLoading(false)
      } catch (error) {
        console.error('Error getting stats:', error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading }
}

export default useDshHomeAdmin
