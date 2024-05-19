import { useEffect, useState } from 'react'
import StatsService from '../services/StatsService'

const useRecentActivities = (limit) => {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activities = await StatsService.getActivitiesLogs(limit)
        setActivities(convertActivities(activities))
      } catch (error) {
        console.error('Error fetching activities:', error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [limit])

  const convertActivities = (activities) => {
    return activities.map(activity => {
      return {
        icon: getActivityIcon(activity.entity),
        text: activity.details
      }
    })
  }

  const getActivityIcon = (entity) => {
    switch (entity) {
      case 'ROOM':
        return 'flaticon-home'
      case 'REVIEW':
        return 'flaticon-review'
      case 'FAVORITE':
        return 'flaticon-like'
      default:
        return 'flaticon-home'
    }
  }

  return { activities, loading }
}

export default useRecentActivities
