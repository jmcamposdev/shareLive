import { Router } from 'express'
import { sendResetPasswordEmail, signIn, signUp } from '../controllers/auth.controller.js'
import { signInMiddleware, signUpMiddleware } from '../middlewares/auth.validators.js'
import { verifyToken } from '../middlewares/authJwt.js'

/**
 * ----------------------------------------------
 * Routes to Sign Up and Sign In users
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle auth routes
const router = Router()

// Sign In
router.post('/auth/signin', signInMiddleware, signIn) // Sign In
router.post('/auth/signup', signUpMiddleware, signUp) // Sign Up
router.post('/auth/verify', [verifyToken], (req, res) => res.json({ user: req.user }))
router.post('/auth/send-reset-password-email', sendResetPasswordEmail)

// Export router to use it in the app
export default router
