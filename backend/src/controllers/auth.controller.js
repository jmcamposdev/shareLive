import Role, { ROLES } from '../models/Role.js'
import User from '../models/User.js'

export const signIn = async (req, res) => {
  // Extract the user from the request
  const { user } = req

  // Generate a token
  const token = await User.generateToken(user)

  // Send the token
  res.json({ token })
}

export const signUp = async (req, res) => {
  // Extract the user from the request
  const { username, email, password } = req.body

  const roles = await Role.find()
  const userRole = roles.find(role => role.id === ROLES.USER)

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
    roles: [userRole._id],
    joinDate: new Date()
  })

  // Save the user in the database
  await newUser.save()

  // Generate a token
  const token = await User.generateToken(newUser)

  // Send the token
  res.json({ token })
}
