import Activity, { ACTIVITY_TYPES } from '../models/Activity.js'
import Role, { ROLES } from '../models/Role.js'
import User from '../models/User.js'
import dotenv from 'dotenv'
import { sendEmail } from '../utils/email.utils.js'
import { CLOUDINARY_FOLDERS, checkAndCreateFolder } from '../storage/cloudinary.js'

// Cargar variables de entorno según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

export const signIn = async (req, res) => {
  // Extract the user from the request
  const { user } = req

  // Populate the user's roles
  await user.populate('roles')
  await user.populate('reviews')

  // Generate a token
  const token = await User.generateToken(user)

  // Register the login activity
  Activity.createUserActivity(ACTIVITY_TYPES.LOGIN, user._id, user, user)

  // Send the token
  res.json({ token, user })
}

export const signUp = async (req, res) => {
  // Extract the user from the request
  const { username, firstName, lastName, email, password } = req.body

  const roles = await Role.find()
  const userRole = roles.find(role => role.id === ROLES.USER)

  // Create a new user
  const newUser = new User({
    username,
    email,
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    avatar: process.env.DEFAULT_AVATAR_URL,
    password: await User.encryptPassword(password),
    roles: [userRole._id],
    joinDate: new Date()
  })

  // Register the create user activity
  Activity.createUserActivity(ACTIVITY_TYPES.CREATE, newUser._id, newUser, newUser)
  // Create the cloudinary folder for the user
  await checkAndCreateFolder(`${CLOUDINARY_FOLDERS.USERS}/${newUser._id}`)
  // Create the avatar folder for the user
  await checkAndCreateFolder(`users/${newUser._id}/avatar`)

  // Save the user in the database
  await newUser.save()

  // Populate the user's roles
  await newUser.populate('roles')
  await newUser.populate('reviews')

  // Generate a token
  const token = await User.generateToken(newUser)

  // Send the token
  res.json({ token, user: newUser })
}

export const sendResetPasswordEmail = async (req, res) => {
  const { email, OPT } = req.body

  // Find the user by email
  const user = await User.findOne({ email })

  // If the user does not exist, return an error
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  // Send the email
  await sendEmail(
    email,
    'Reset your password',
    `Use this code to reset your password: ${OPT}`,
    `<p>Use this code to reset your password: <strong>${OPT}</strong></p>`
  )

  // Send a success message
  res.json({ message: 'Email sent' })
}
