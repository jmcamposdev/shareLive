import Role, { ROLES } from '../models/Role.js'
import Room from '../models/Room.js'
import User from '../models/User.js'
import dotenv from 'dotenv'
import { handleDeleteImage, handleUploadImage } from '../storage/cloudinary.js'
import Activity, { ACTIVITY_TYPES } from '../models/Activity.js'
import mongoose from 'mongoose'
import Message from '../models/Message.js'

// Cargar variables de entorno según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('roles')
    // Remove the superadmin from the list
    const filteredUsers = users.filter((user) => user.roles.every((role) => role.id !== ROLES.SUPERADMIN))

    res.json(filteredUsers)
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
    // Populate the roles
    await user.populate('roles')
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
    const newUser = new User({
      ...req.body,
      password: encryptedPassword,
      name: `${req.body.firstName} ${req.body.lastName}`
    })
    await newUser.save()
    // Register the activity of creating a user
    Activity.createUserActivity(ACTIVITY_TYPES.CREATE, newUser._id, newUser, req.user)
    res.json(newUser)
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
    const { isAdministrator } = req.body

    const roles = await Role.find()
    if (isAdministrator) {
      const adminRole = roles.find((role) => role.id === ROLES.ADMIN)
      req.body.roles = [adminRole._id]
    } else if (isAdministrator !== undefined) {
      const userRole = roles.find((role) => role.id === ROLES.USER)
      req.body.roles = [userRole._id]
    }

    const user = await User.findByIdAndUpdate(id, { ...req.body, name: `${req.body.firstName} ${req.body.lastName}` }, { new: true }).populate('roles')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    // Register the activity of updating a user
    Activity.createUserActivity(ACTIVITY_TYPES.UPDATE, user._id, user, req.user)

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

const resetPassword = async (req, res) => {
  try {
    const { password, email } = req.body

    const encryptedPassword = await User.encryptPassword(password)
    const updated = await User.findOneAndUpdate({ email }, { password: encryptedPassword }, { new: true })
    res.json(updated)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while resetting the password',
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
    // Register the activity of deleting a user
    Activity.createUserActivity(ACTIVITY_TYPES.DELETE, user._id, user, req.user)
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
    const room = await Room.findById(roomId)
    // Register the activity of adding a favorite room
    Activity.createFavoriteActivity(isFavorite ? ACTIVITY_TYPES.DELETE : ACTIVITY_TYPES.CREATE, roomId, user, room)
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while adding a favorite room',
      error
    })
  }
}
const getUserContacts = async (req, res) => {
  const { user } = req
  try {
    const contacts = await User.find({ _id: { $in: user.contactList } }).lean() // use .lean() to get plain JavaScript objects
    const contactListWithLastMessage = await Promise.all(contacts.map(async (contact) => {
      const lastMessage = await Message.findOne({
        users: { $all: [user._id, contact._id] }
      }).sort({ createdAt: -1 })

      return {
        ...contact,
        lastMessage
      }
    }))

    res.json(contactListWithLastMessage)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while getting user contacts',
      error
    })
  }
}

const addUserToContactList = async (req, res) => {
  const { id } = req.params
  const { contactId } = req.body

  const user = await User.findById(id)
  // Populate the owners reviews
  await user.populate('reviews')
  // Populate the roles
  await user.populate('roles')
  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  if (!contactId) {
    return res.status(400).json({
      message: 'The contactId is required'
    })
  }

  if (user.contactList.includes(contactId)) {
    return res.status(400).json({
      message: 'The user is already in the contact list'
    })
  }

  // Validate that the contactId is a valid id
  const isValidId = mongoose.Types.ObjectId.isValid(contactId)
  if (!isValidId) {
    return res.status(400).json({
      message: 'The contactId is not valid'
    })
  }

  // Validate that the contact exists
  const contact = await User.findById(contactId)
  if (!contact) {
    return res.status(404).json({
      message: 'Contact not found'
    })
  }

  try {
    user.contactList.push(contactId)
    await user.save()
    // Add the user to the contact's contact list
    contact.contactList.push(user._id)
    await contact.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while adding a contact',
      error
    })
  }
}

const deleteUserFromContactList = async (req, res) => {
  const { user } = req
  const { contactId } = req.params

  if (!contactId) {
    return res.status(400).json({
      message: 'The contactId is required'
    })
  }

  try {
    user.contactList = user.contactList.filter((id) => id !== contactId)
    await user.save()
    // Delete all messages between the user and the contact
    await Message.deleteMany({
      users: { $all: [user._id, contactId] }
    })
    // Delete the user from the contact's contact list
    const contact = await User.findByIdAndUpdate(contactId, {
      $pull: { contactList: user._id }
    })
    await contact.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting a contact',
      error
    })
  }
}

export {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserRooms,
  toggleFavoriteRoom,
  getFavouriteRooms,
  uploadAvatar,
  changePassword,
  resetPassword,
  getUserContacts,
  addUserToContactList,
  deleteUserFromContactList
}
