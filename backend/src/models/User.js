import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Review from './Review.js'

// Definición del esquema de Usuario
const userSchema = new Schema({
  avatar: { type: String, default: '' },
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  mobilePhone: { type: String, default: '' },
  description: { type: String, default: '' },
  socials: {
    twitter: { type: String, default: '' },
    facebook: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    instagram: { type: String, default: '' }
  },
  password: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', default: [] }],
  favouriteRoomsIds: { type: [String], default: [] },
  ownerRoomsIds: { type: [String], default: [] },
  joinDate: { type: Date, default: Date.now },
  roles: [
    {
      ref: 'Role',
      type: Schema.Types.ObjectId
    }
  ]
})

// Cuando el usuario actualiza su información, actualiza las revisiones relacionadas
userSchema.post('findOneAndUpdate', async function (doc) {
  if (doc) {
    await Review.updateMany({ ownerId: doc._id }, { ownerName: doc.name, ownerAvatar: doc.avatar })
  }
})

// Creación del modelo Usuario
const User = mongoose.model('User', userSchema)

User.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

User.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

User.generateToken = async user => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      name: user.name,
      roles: user.roles.map(role => role.name)
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.EXPIRED_JWT_TIME
    }
  )
}

User.verifyToken = async token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return null
  }
}

export default User
