import Role, { ROLES } from '../models/Role.js'
import Room from '../models/Room.js'
import User from '../models/User.js'
import dotenv from 'dotenv'
import { handleDeleteImage, handleUploadImage } from '../storage/cloudinary.js'
dotenv.config()

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting users',
      error
    })
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    // Populate the owners reviews
    await user.populate('reviews')
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting a user',
      error
    })
  }
}

const createUser = async (req, res) => {
  const { isAdministrator } = req.body
  const roles = await Role.find()
  if (isAdministrator) {
    const adminRole = roles.find((role) => role.id === ROLES.ADMIN)
    req.body.roles = [adminRole._id]
  } else {
    const userRole = roles.find((role) => role.id === ROLES.USER)
    req.body.roles = [userRole._id]
  }

  try {
    const encryptedPassword = await User.encryptPassword(req.body.password)
    const user = new User({
      ...req.body,
      password: encryptedPassword,
      name: `${req.body.firstName} ${req.body.lastName}`
    })
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while creating a user',
      error
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, { ...req.body, name: `${req.body.firstName} ${req.body.lastName}` }, { new: true }).populate('roles')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating a user',
      error
    })
  }
}
/**
 * Upload an avatar for a user and remove the old one if it isn't the default one
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const uploadAvatar = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id).populate('roles')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    // Remove the old avatar if it isn't the default one
    if (user.avatar !== process.env.DEFAULT_AVATAR_URL) {
      await handleDeleteImage(user.avatar, `users/${id}/avatar`)
    }
    // Update the user with the new avatar
    const cldImages = await handleUploadImage(req.files[0], `users/${id}/avatar`)
    user.avatar = cldImages.url
    await user.save()

    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while uploading an avatar',
      error
    })
  }
}

const changePassword = async (req, res) => {
  try {
    // Extract the user from the request
    const { id } = req.params
    const { user } = req
    const { currentPassword, newPassword } = req.body
    await user.populate('roles')
    console.log(user)
    const isAdministrator = user.roles.some((role) => role.name === 'admin' || role.name === 'superadmin')
    // Check if the current password is correct
    let isPasswordValid = isAdministrator
    if (!isAdministrator) {
      isPasswordValid = await User.comparePassword(currentPassword, user.password)
    }

    if (!isPasswordValid) {
      return res.status(400).json({
        message: 'Invalid password'
      })
    }
    // Encrypt the new password
    const encryptedPassword = await User.encryptPassword(newPassword)
    // Update the user with the new password
    const updated = await User.findByIdAndUpdate(id, { password: encryptedPassword }, { new: true })
    res.json(updated)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while changing the password',
      error
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting a user',
      error
    })
  }
}

const getUserRooms = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    const rooms = await Room.find({ user: id }).populate('user')
    res.json(rooms)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting user rooms',
      error
    })
  }
}

const getFavouriteRooms = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }
    const rooms = await Room.find({ _id: { $in: user.favouriteRoomsIds } }).populate('user')
    res.json(rooms)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting user rooms',
      error
    })
  }
}

const toggleFavoriteRoom = async (req, res) => {
  try {
    const { id } = req.params
    const { roomId } = req.body
    const user = await User.findById(id).populate('roles')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const isFavorite = user.favouriteRoomsIds.includes(roomId)
    if (isFavorite) {
      user.favouriteRoomsIds = user.favouriteRoomsIds.filter((id) => id !== roomId)
    } else {
      user.favouriteRoomsIds.push(roomId)
    }
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while adding a favorite room',
      error
    })
  }
}

export { getUsers, getUser, updateUser, deleteUser, getUserRooms, toggleFavoriteRoom, getFavouriteRooms, uploadAvatar, changePassword, createUser }
