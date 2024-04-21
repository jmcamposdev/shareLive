import moongose, { Schema } from 'mongoose'

// Define all Roles types
export const ROLES = {
  USER: 1,
  ADMIN: 2,
  SUPERADMIN: 3
}

// Define the Role schema
const roleSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true }
})

const Role = moongose.model('Role', roleSchema)

export default Role
