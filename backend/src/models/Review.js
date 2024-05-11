import mongoose, { Schema } from 'mongoose'
import User from './User.js'

const reviewSchema = new Schema({
  ownerId: { type: String, required: true }, // Almacenar el id del usuario
  assignedId: { type: String, required: true }, // Almacenar el id del usuario asignado
  ownerName: { type: String, required: true }, // Almacenar el nombre del usuario
  ownerAvatar: { type: String, default: '' }, // Almacenar el avatar del usuario
  reviewRate: { type: Number, required: true, min: 1, max: 5 },
  reviewContent: { type: String, required: true },
  helpful: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  notHelpful: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  createdAt: { type: Date, default: Date.now }
})

/**
 * Trigger when a review is deleted
 * This hook will remove the review from the assigned user
 */
reviewSchema.pre('findOneAndDelete', async function (next) {
  // `this` se refiere a la consulta que se está ejecutando, así que puedes acceder a los datos de la review a eliminar
  const review = await this.model.findOne(this.getFilter())
  // Delete the review from the assigned user
  const assignedUser = await User.findById(review.assignedId)
  assignedUser.reviews = assignedUser.reviews.filter(reviewId => reviewId.toString() !== review._id.toString())
  await assignedUser.save()

  next()
})

const Review = mongoose.model('Review', reviewSchema)

export default Review
