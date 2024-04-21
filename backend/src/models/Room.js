import moongose, { Schema } from 'mongoose'

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
  createdAt: { type: Date, default: Date.now }
})

// Creación del modelo Room
const Room = moongose.model('Room', roomSchema)

export default Room
