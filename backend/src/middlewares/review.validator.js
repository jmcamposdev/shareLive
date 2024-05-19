import mongoose from 'mongoose'
import User from '../models/User.js'
import Review from '../models/Review.js'

export const handleCreateReview = async (req, res, next) => {
  try {
    const { id } = req.params
    const { ownerId, reviewRate, reviewContent } = req.body

    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(ownerId)) {
      return res.status(400).json({ message: 'Invalid ID' })
    }

    // If the user and the owner are the same
    if (id === ownerId) {
      return res.status(400).json({
        message: 'You cannot review yourself'
      })
    }

    if (!reviewRate || reviewRate < 1 || reviewRate > 5 || !reviewContent) {
      return res.status(400).json({ message: 'Invalid review data' })
    }

    const user = await User.findById(id)
    await user.populate('reviews')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    // Check if the user have already a review for the owner
    const alreadyReviewExists = user.reviews.find(review => review.ownerId === ownerId)
    if (alreadyReviewExists) {
      return res.status(400).json({
        message: 'You have already reviewed this user'
      })
    }

    const ownerUser = await User.findById(ownerId)
    if (!ownerUser) {
      return res.status(404).json({
        message: 'Owner user not found'
      })
    }

    req.user = user
    req.ownerUser = ownerUser

    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

export const handleUpdateReview = async (req, res, next) => {
  try {
    const { userId, id } = req.params
    const { ownerId, ownerName, ownerAvatar, reviewRate, reviewContent, helpful, notHelpful } = req.body

    // Check that the ids are valid
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(ownerId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid ID' })
    }

    // Check that the review data is valid
    if (!reviewRate || reviewRate < 1 || reviewRate > 5 || !reviewContent || !helpful || !notHelpful || !ownerName || typeof ownerAvatar !== 'string') {
      return res.status(400).json({ message: 'Invalid review data' })
    }

    // Check that the user and owner exist
    const user = await User.findById(userId)
    await user.populate('reviews')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const ownerUser = await User.findById(ownerId)
    if (!ownerUser) {
      return res.status(404).json({
        message: 'Owner user not found'
      })
    }

    // Check that the review exists
    const review = user.reviews.find(review => review._id.toString() === id)
    if (!review) {
      return res.status(404).json({
        message: 'Review not found'
      })
    }

    // Check if the user have already a review for the owner and different from the current review
    const alreadyReviewExists = user.reviews.find(review => review.ownerId === ownerId && review._id.toString() !== id)
    if (alreadyReviewExists) {
      return res.status(400).json({
        message: 'You have already reviewed this user'
      })
    }

    // Pass the user and owner to the next middleware
    req.user = user
    req.ownerUser = ownerUser

    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

export const handleDeleteReview = async (req, res, next) => {
  try {
    const { userId, id } = req.params

    // Check that the ids are valid
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid ID' })
    }

    // Check that the user exists
    const user = await User.findById(userId)
    await user.populate('reviews')
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    // Check that the review exists
    const review = await Review.findById(id)
    const reviewIndex = user.reviews.findIndex(review => review._id.toString() === id)
    if (!review || !reviewIndex) {
      return res.status(404).json({
        message: 'Review not found'
      })
    }

    // Pass the user to the next middleware
    req.user = user
    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}
