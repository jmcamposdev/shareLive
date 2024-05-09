import { Router } from 'express'
import { handleCreateReview, handleDeleteReview, handleUpdateReview } from '../middlewares/review.validator.js'
import { createReview, deleteReview, getReviews, updateReview } from '../controllers/reviews.controller.js'
import { verifyToken } from '../middlewares/authJwt.js'
/**
 * ----------------------------------------------
 * Routes to do CRUD operations on reviews
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle user routes
const router = Router()

router.get('/users/:id/reviews', getReviews) // Get all the reviews for a user by id
router.post('/users/:id/reviews', [verifyToken, handleCreateReview], createReview) // Create a review for a user by id
router.put('/users/:userId/reviews/:id', [verifyToken, handleUpdateReview], updateReview) // Update a review for a user by id
router.delete('/users/:userId/reviews/:id', [verifyToken, handleDeleteReview], deleteReview) // Delete a review for a user by id

// Export router to use it in the app
export default router
