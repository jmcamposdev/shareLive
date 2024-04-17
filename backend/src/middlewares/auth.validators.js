import { body, validationResult } from 'express-validator'
import User from '../models/User.js'

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const formattedErrors = errors.array().map(error => ({
        message: error.msg
      }))
      return res.status(400).json({ errors: formattedErrors })
    }
    next()
  }
}

export const signInValidations = [
  body('email')
    .exists()
    .isEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .exists()
    .withMessage('Please provide a password')
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: req.body.email })

      if (!user) {
        throw new Error('Invalid email or password')
      }

      const isPasswordValid = await User.comparePassword(value, user.password)
      if (!isPasswordValid) {
        throw new Error('Invalid email or password')
      }

      // Add the user to the request object
      req.user = user

      return true
    })
]

export const signUpValidations = [
  body('username')
    .exists()
    .withMessage('Please provide a username')
    .custom(async (value) => {
      const existingUser = await User.findOne({ username: value })
      if (existingUser) {
        throw new Error('The username is already in use')
      }
      return true
    }),
  body('email')
    .exists()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .custom(async (value, { req }) => {
      const existingUser = await User.findOne({ email: value })
      if (existingUser) {
        throw new Error('The email is already in use')
      }

      return true
    }),
  body('password')
    .exists()
    .withMessage('Please provide a password')
]

export const signInMiddleware = validate(signInValidations)
export const signUpMiddleware = validate(signUpValidations)
