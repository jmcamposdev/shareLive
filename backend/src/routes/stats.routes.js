import { Router } from 'express'
import { activitiesLogs, reviewsStats, roomsStats, weeklyStats } from '../controllers/stats.controller.js'

/**
 * ----------------------------------------------
 * Routes to do CRUD operations on rooms
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle room routes
const router = Router()

router.get('/rooms-stats', roomsStats) // Get stats for all rooms
router.get('/reviews/stats', reviewsStats) // Get stats for all reviews
router.get('/weekly-stats', weeklyStats) // Get weekly stats
router.get('/activities-logs', activitiesLogs) // Get activities logs
router.get('/activities-logs/:limit', activitiesLogs) // Get activities logs

// Export router to use it in the app
export default router
