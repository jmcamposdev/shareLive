import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
  message: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
})

const Message = mongoose.model('Message', messageSchema)

export default Message
