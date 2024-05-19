import Activity from '../models/Activity.js'
import Review from '../models/Review.js'
import Room from '../models/Room.js'
import User from '../models/User.js'

const roomsStats = async (req, res) => {
  try {
    const rooms = await Room.find()
    const totalRooms = rooms.length
    const totalVisits = rooms.reduce((acc, room) => acc + room.visits, 0)
    const totalFavorites = await User.aggregate([
      {
        $group: {
          _id: null, // No queremos agrupar por un campo específico, solo queremos la suma total
          totalFavourites: { $sum: { $size: '$favouriteRoomsIds' } } // Suma el tamaño de cada array favourites
        }
      },
      {
        $project: {
          _id: 0, // No queremos el _id en el resultado
          totalFavourites: { $ifNull: ['$totalFavourites', 0] } // Asegura que si no hay resultados, se devuelve 0
        }
      }
    ])

    res.json({
      totalRooms,
      totalVisits,
      totalFavorites: totalFavorites[0].totalFavourites
    })
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting room stats',
      error
    })
  }
}

const reviewsStats = async (req, res) => {
  try {
    // Get the number of reviews
    const totalReviews = await Review.countDocuments()

    // Get the average rate
    const reviews = await Review.find()
    const reviewsRate = reviews.reduce((acc, review) => acc + review.reviewRate, 0)
    const averageRate = reviewsRate / reviews.length

    // Return the stats
    res.json({
      totalReviews,
      averageRate
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

const weeklyStats = async (req, res) => {
  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 7)

    const users = await User.aggregate([
      { $match: { joinDate: { $gte: startDate } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$joinDate' } },
          count: { $sum: 1 }
        }
      }
    ])

    const rooms = await Room.aggregate([
      { $match: { createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 }
        }
      }
    ])

    const reviews = await Review.aggregate([
      { $match: { createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 }
        }
      }
    ])

    const result = {
      users,
      rooms,
      reviews
    }

    res.json(result)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error })
  }
}

const activitiesLogs = async (req, res) => {
  const { limit } = req.params
  try {
    let activities = await Activity.find().sort({ timestamp: -1 })
    if (limit) {
      activities = activities.slice(0, limit)
    }
    res.json(activities)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities', error })
  }
}

export { roomsStats, reviewsStats, weeklyStats, activitiesLogs }
