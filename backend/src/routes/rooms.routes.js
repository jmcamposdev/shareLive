import { Router } from 'express'
import { createRoom, deleteImages, deleteRoom, getRoom, getRooms, getVisits, updateRoom, uploadImages } from '../controllers/rooms.controller.js'
import { verifyToken } from '../middlewares/authJwt.js'
import { upload } from '../storage/storage.js'

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
router.get('/rooms/:id/visits', getVisits) // Get visits for a room by id
router.post('/rooms', [verifyToken], createRoom) // Create a new room
router.post('/rooms/:id/upload', [verifyToken, upload.array('images')], uploadImages) // Upload images for a room by id
router.delete('/rooms/:id/upload', [verifyToken], deleteImages) // Delete images for a room by id
router.put('/rooms/:id', [verifyToken], updateRoom) // Update a room by id
router.delete('/rooms/:id', [verifyToken], deleteRoom) // Delete a room by id

// Export router to use it in the app
export default router
