import Review from '../models/Review.js'

export const createReview = async (req, res) => {
  try {
    const { ownerId, reviewRate, reviewContent } = req.body
    const { ownerUser, user } = req

    // Create a new review
    const review = await Review.create({
      ownerId,
      ownerName: ownerUser.name,
      ownerAvatar: ownerUser.avatar,
      reviewRate,
      reviewContent
    })

    // Add the review to the user
    user.reviews.push(review._id)
    await user.save()

    // Return the review
    res.json(review)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params
    const { ownerId, ownerName, ownerAvatar, reviewRate, reviewContent, helpful, notHelpful } = req.body

    // Find the review
    const review = await Review.findById(id)

    // Update the review
    review.ownerId = ownerId
    review.ownerName = ownerName
    review.ownerAvatar = ownerAvatar
    review.reviewRate = reviewRate
    review.reviewContent = reviewContent
    review.helpful = helpful
    review.notHelpful = notHelpful
    await review.save()

    // Return the review
    res.json(review)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const { user } = req

    // Remove the review from the user
    user.reviews = user.reviews.filter(reviewId => reviewId.toString() !== id.toString())
    await user.save()

    // Remove the review
    await Review.findByIdAndDelete(id)

    res.json({
      message: 'Review deleted successfully'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
}
