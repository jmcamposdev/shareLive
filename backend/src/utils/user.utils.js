import Review from '../models/Review.js'
import Room from '../models/Room.js'
import dotenv from 'dotenv'
import { handleDeleteImage } from '../storage/cloudinary.js'
dotenv.config()

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
  }
}

export { deleteAllRoomsOfUser, deleteAllReviewsOfUser, deleteReviewParticipationOfUser, deleteUserAvatar }
