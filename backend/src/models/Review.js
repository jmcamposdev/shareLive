import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema({
  ownerId: { type: String, required: true }, // Almacenar el id del usuario
  ownerName: { type: String, required: true }, // Almacenar el nombre del usuario
  ownerAvatar: { type: String, default: '' }, // Almacenar el avatar del usuario
  reviewRate: { type: Number, required: true, min: 1, max: 5 },
  reviewContent: { type: String, required: true },
  helpful: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  notHelpful: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
  createdAt: { type: Date, default: Date.now }
})

const Review = mongoose.model('Review', reviewSchema)

export default Review
