import { Router } from 'express'
import { handleCreateReview, handleDeleteReview, handleUpdateReview } from '../middlewares/review.validator.js'
import { createReview, deleteReview, updateReview } from '../controllers/reviews.controller.js'
/**
 * ----------------------------------------------
 * Routes to do CRUD operations on reviews
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle user routes
const router = Router()

router.post('/users/:id/reviews', [handleCreateReview], createReview) // Create a review for a user by id
router.put('/users/:userId/reviews/:id', [handleUpdateReview], updateReview) // Update a review for a user by id
router.delete('/users/:userId/reviews/:id', [handleDeleteReview], deleteReview) // Delete a review for a user by id

// Export router to use it in the app
export default router
