import { Router } from 'express'
import { createMessage, getMessages } from '../controllers/messages.controller.js'
/**
 * ----------------------------------------------
 * Routes to do CRUD operations on reviews
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle user routes
const router = Router()

router.get('/messages/:from/:to', getMessages) // Get all the messages
router.post('/messages', createMessage) // Create a message

// Export router to use it in the app
export default router
