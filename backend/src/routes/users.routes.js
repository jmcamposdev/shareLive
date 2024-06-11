import { Router } from 'express'
import { addUserToContactList, changePassword, createUser, deleteUser, deleteUserFromContactList, getFavouriteRooms, getUser, getUserContacts, getUserRooms, getUsers, resetPassword, toggleFavoriteRoom, updateUser, uploadAvatar } from '../controllers/users.controller.js'
import { verifyToken } from '../middlewares/authJwt.js'
import { upload } from '../storage/storage.js'

/**
 * ----------------------------------------------
 * Routes to do CRUD operations on users
 * @type {Router}
 * ----------------------------------------------
 */

// Create a new router to handle user routes
const router = Router()

router.get('/users', getUsers) // Get all users
router.get('/users/:id', getUser) // Get a user by id
router.put('/users/:id', [verifyToken], updateUser) // Update a user by id
router.post('/users', [verifyToken], createUser) // Create a new user
router.post('/users/reset-password', resetPassword) // Reset user password
router.put('/users/:id/password', [verifyToken], changePassword) // Update user password by id
router.post('/users/:id/avatar', [verifyToken, upload.array('avatar')], uploadAvatar) // Upload an avatar for a user by id
router.delete('/users/:id', [verifyToken], deleteUser) // Delete a user by id

// Contact List
router.get('/users/:id/contacts', [verifyToken], getUserContacts) // Get contacts of a user by id
router.post('/users/:id/contacts', [verifyToken], addUserToContactList) // Add a contact to a user by id
router.delete('/users/:id/contacts/:contactId', [verifyToken], deleteUserFromContactList) // Delete a contact from a user by id

// Relation with rooms
router.get('/users/:id/rooms', getUserRooms) // Get rooms of a user by id

// Favourites rooms
router.get('/users/:id/rooms/favourites', getFavouriteRooms)
router.post('/users/:id/rooms/favourites', toggleFavoriteRoom)

// Export router to use it in the app
export default router
