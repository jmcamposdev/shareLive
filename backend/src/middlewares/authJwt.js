import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { ROLES } from '../models/Role.js'

/** -------------------------------------
 * This file contains all the middlewares to verify the JWT token.
 * And also to verify if the user is an admin.
 * @function verifyToken: Verify the JWT token.
 * @function isAdmin: Verify if the user has the admin role.
 */

/**
 * Verify the JWT token.
 * @param {*} req The request object
 * @param {*} res The response object
 * @param {*} next The next middleware function
 */
export const verifyToken = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.headers['x-access-token']

    // If there is no token, send a 403 status code and a message
    if (!token) {
      return res.status(403).json({ message: 'No token provided' })
    }

    // Verify the token with the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Add the user ID to the request
    req.userId = decoded._id

    // Find the user in the database
    const user = await User.findById(req.userId).populate('roles')

    // If the user is not found, send a 404 status code and a message
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // If the user is found, continue
    req.user = user
    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Manage the error if the token has expired
      res.status(401).json({ message: 'Token has expired' })
    } else if (error.name === 'JsonWebTokenError') {
      // Manage the error if the token is invalid
      res.status(401).json({ message: 'Invalid token' })
    } else {
      // If there's another error, send it
      res.status(500).json({ message: error.message })
    }
  }
}

/**
 * Verify if the user has the admin role.
 * @param {*} req The request object
 * @param {*} res The response object
 * @param {*} next The next middleware function
 */
export const isAdmin = async (req, res, next) => {
  const user = req.user

  if (user.roleId !== ROLES.ADMIN || user.roleId !== ROLES.SUPER_ADMIN) {
    return res.status(403).json({ message: 'Unauthorized Admin Required' })
  }

  next()
}
