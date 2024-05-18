import { Router } from 'express'
import { reviewsStats, roomsStats, weeklyStats } from '../controllers/stats.controller.js'

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

// Export router to use it in the app
export default router
