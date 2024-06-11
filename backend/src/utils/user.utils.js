import Review from '../models/Review.js'
import Room from '../models/Room.js'
import dotenv from 'dotenv'
import { CLOUDINARY_FOLDERS, checkAndDeleteFolder, handleDeleteImage } from '../storage/cloudinary.js'
import Message from '../models/Message.js'
import User from '../models/User.js'
// Cargar variables de entorno según el entorno
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

const deleteAllRoomsOfUser = async (user) => {
  const rooms = await Room.find({ user: user._id })

  const deletionRoomPromises = rooms.map(async (room) => {
    return Room.findByIdAndDelete(room._id)
  })

  await Promise.all(deletionRoomPromises)
}

const deleteAllReviewsOfUser = async (user) => {
  // Delete all reviews of the user when the review onwerId or assignedId is the user._id
  const reviews = await Review.find({ $or: [{ ownerId: user._id }, { assignedId: user._id }] })

  const deletionReviewPromises = reviews.map(async (review) => {
    return Review.findByIdAndDelete(review._id)
  })

  await Promise.all(deletionReviewPromises)
}

const deleteReviewParticipationOfUser = async (user) => {
  // Find all reviews where the user are in the helpful or notHelpful arrays
  const reviews = await Review.find({ $or: [{ helpful: user._id }, { notHelpful: user._id }] })

  const deletionReviewPromises = reviews.map(async (review) => {
    // Remove the user from the helpful array
    review.helpful = review.helpful.filter(userId => userId.toString() !== user._id.toString())
    // Remove the user from the notHelpful array
    review.notHelpful = review.notHelpful.filter(userId => userId.toString() !== user._id.toString())

    await review.save()
  })

  await Promise.all(deletionReviewPromises)
}

const deleteUserAvatar = async (user) => {
  if (user.avatar !== process.env.DEFAULT_AVATAR_URL) {
    await handleDeleteImage(user.avatar, `users/${user._id}/avatar`)
    await checkAndDeleteFolder(`${CLOUDINARY_FOLDERS.USERS}/${user._id}`)
  }
}

const deleteAllMessagesOfUser = async (user) => {
  // Delete all messages of the user
  const messages = await Message.find({ $or: [{ sender: user._id }, { receiver: user._id }] })

  const deletionMessagePromises = messages.map(async (message) => {
    return Message.findByIdAndDelete(message._id)
  })

  await Promise.all(deletionMessagePromises)
}

const deleteAllContactsOfUser = async (user) => {
  // Delete the user from all contact lists
  const users = await User.find({ contactList: user._id })

  const deletionContactPromises = users.map(async (contact) => {
    contact.contactList = contact.contactList.filter(userId => userId.toString() !== user._id.toString())
    await contact.save()
  })

  await Promise.all(deletionContactPromises)
}

export { deleteAllRoomsOfUser, deleteAllReviewsOfUser, deleteReviewParticipationOfUser, deleteUserAvatar, deleteAllMessagesOfUser, deleteAllContactsOfUser }
