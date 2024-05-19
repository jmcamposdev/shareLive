import moongose, { Schema } from 'mongoose'
import { deleteAllImagesOfCloudinay, deleteRoomInFavourites } from '../utils/room.utils.js'

// Definición del esquema de Room
const roomSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' }, // Referencia al ID del usuario propietario
  title: { type: String, required: true },
  excerpt: { type: String, default: '' },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  propertyStatus: { type: String, enum: ['Nearly new', 'Very Good', 'Good', 'To renovation', 'Refurbished'] },
  images: { type: [String], default: [] }, // Array de URLs de imágenes
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  countryCode: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  address: { type: String, required: true },
  squareMeters: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  yearBuilt: { type: Number, required: true },
  floor: { type: Number, required: true },
  structureType: { type: String, enum: ['Apartment', 'House', 'Penthouse', 'Duplex', 'Townhouse', 'Cottage'] },
  garageNumber: { type: Number, default: 0 },
  amenities: {
    washer: { type: Boolean, default: false },
    dryer: { type: Boolean, default: false },
    microwave: { type: Boolean, default: false },
    dishWasher: { type: Boolean, default: false },
    refrigerator: { type: Boolean, default: false },
    furnace: { type: Boolean, default: false },
    airConditioning: { type: Boolean, default: false },
    tv: { type: Boolean, default: false },
    wifi: { type: Boolean, default: false },
    garage: { type: Boolean, default: false },
    elevator: { type: Boolean, default: false },
    electricHeater: { type: Boolean, default: false }
  },
  visits: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
})

/**
 * Trigger when a room is deleted
 * This hook will remove all images from Cloudinary and the folder of the room
 */
roomSchema.pre('findOneAndDelete', async function (next) {
  // `this` se refiere a la consulta que se está ejecutando, así que puedes acceder a los datos de la habitación a eliminar
  const room = await this.model.findOne(this.getFilter())
  // Delete all images from Cloudinary
  await deleteAllImagesOfCloudinay(room)
  // Delete the room from the favouriteRoomsIds array of all users
  await deleteRoomInFavourites(room)
  next()
})

// Creación del modelo Room
const Room = moongose.model('Room', roomSchema)

export default Room
