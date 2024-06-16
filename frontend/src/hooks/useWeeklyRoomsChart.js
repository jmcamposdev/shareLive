import { useEffect, useState } from 'react'
import StatsService from '../services/StatsService'

const useWeeklyRoomsChart = () => {
  const lines = [
    {
      name: 'Users',
      dataKey: 'users',
      stroke: '#8884d8',
      fill: '#8884d8'
    },
    {
      dataKey: 'rooms',
      name: 'Rooms',
      stroke: '#82ca9d',
      fill: '#82ca9d'
    },
    {
      dataKey: 'reviews',
      name: 'Reviews',
      stroke: '#ffc658',
      fill: '#ffc658'
    }
  ]
  const [weeklyStats, setWeeklyStats] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchWeeklyStats = async () => {
      setLoading(true)
      try {
        const result = await StatsService.getWeeklyStats()

        // Obtener todas las fechas únicas
        const dates = new Set()
        result.users.forEach(user => dates.add(user._id))
        result.rooms.forEach(room => dates.add(room._id))
        result.reviews.forEach(review => dates.add(review._id))

        // Inicializar el objeto de resultados con todas las fechas
        const formattedData = Array.from(dates).map(date => ({
          date,
          users: 0,
          rooms: 0,
          reviews: 0
        }))

        // Crear un mapa para un acceso más fácil
        const dataMap = Object.fromEntries(formattedData.map(item => [item.date, item]))

        // Rellenar los contadores de usuarios, habitaciones y reseñas
        result.users.forEach(user => {
          dataMap[user._id].users = user.count
        })
        result.rooms.forEach(room => {
          dataMap[room._id].rooms = room.count
        })
        result.reviews.forEach(review => {
          dataMap[review._id].reviews = review.count
        })

        // Convertir el objeto de vuelta a array y ordenar por fecha
        const finalData = Object.values(dataMap).sort((a, b) => new Date(a.date) - new Date(b.date))

        setWeeklyStats(finalData)

        setLoading(false)
      } catch (error) {
        console.error('Error getting weekly stats:', error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeeklyStats()
  }, [])

  return { weeklyStats, loading, lines }
}

export default useWeeklyRoomsChart
