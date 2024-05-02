import { Router } from 'express'
import { createRoom, getRoom, getRooms, updateRoom } from '../controllers/rooms.controller.js'
import { verifyToken } from '../middlewares/authJwt.js'

/**
 * ----------------------------------------------
 * Routes to do CRUD operations on rooms
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle room routes
const router = Router()

router.get('/rooms', getRooms) // Get all rooms
router.get('/rooms/:id', getRoom) // Get a room by id
router.post('/rooms', [verifyToken], createRoom) // Create a new room
router.put('/rooms/:id', [verifyToken], updateRoom) // Update a room by id

// Export router to use it in the app
export default router
