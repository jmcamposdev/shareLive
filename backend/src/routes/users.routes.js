import { Router } from 'express'
import { getUser, getUsers, updateUser } from '../controllers/users.controller.js'

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

// Export router to use it in the app
export default router
