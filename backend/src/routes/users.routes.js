import { Router } from 'express'
import { getFavouriteRooms, getUser, getUserRooms, getUsers, toggleFavoriteRoom, updateUser } from '../controllers/users.controller.js'

/**
 * ----------------------------------------------
 * Routes to do CRUD operations on users
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle user routes
const router = Router()

router.get('/users', getUsers) // Get all users
router.get('/users/:id', getUser) // Get a user by id
router.put('/users/:id', updateUser) // Update a user by id

// Relation with rooms
router.get('/users/:id/rooms', getUserRooms) // Get rooms of a user by id

// Favourites rooms
router.get('/users/:id/rooms/favourites', getFavouriteRooms)
router.post('/users/:id/rooms/favourites', toggleFavoriteRoom)

// Export router to use it in the app
export default router
