import { faker } from '@faker-js/faker'
import mongoose from 'mongoose'

// Función para generar un objeto de room falso
const generateFakeRoom = () => {
  return {
    user: '661eaaff1753b441a60f03d1',
    title: faker.lorem.words(),
    excerpt: faker.lorem.sentence(),
    description: faker.lorem.paragraph(15),
    price: faker.number.int({ min: 10000, max: 1000000 }),
    propertyStatus: faker.helpers.arrayElement(['Nearly new', 'Very Good', 'Good', 'To renovation', 'Refurbished'], { min: 1, max: 1 }),
    images: [faker.image.url(), faker.image.url(), faker.image.url()], // Genera URLs de imágenes aleatorias
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    countryCode: faker.location.countryCode(),
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    postalCode: faker.location.zipCode(),
    address: faker.location.streetAddress(),
    squareMeters: faker.number.int({ min: 50, max: 250 }),
    bedrooms: faker.number.int({ min: 1, max: 5 }),
    bathrooms: faker.number.int({ min: 1, max: 5 }),
    yearBuilt: faker.number.int({ min: 1900, max: 2021 }),
    floor: faker.number.int({ min: 1, max: 10 }),
    structureType: faker.helpers.arrayElement(['Apartment', 'House', 'Penthouse', 'Duplex', 'Townhouse', 'Cottage'], { min: 1, max: 1 }),
    amenities: {
      washer: faker.datatype.boolean(),
      dryer: faker.datatype.boolean(),
      microwave: faker.datatype.boolean(),
      dishwasher: faker.datatype.boolean(),
      refrigerator: faker.datatype.boolean(),
      furnace: faker.datatype.boolean(),
      airConditioning: faker.datatype.boolean(),
      tv: faker.datatype.boolean(),
      wifi: faker.datatype.boolean(),
      garage: faker.datatype.boolean(),
      elevator: faker.datatype.boolean(),
      electricHeater: faker.datatype.boolean()
    }
  }
}

// Función para falsificar múltiples rooms
const fakeRooms = async (count) => {
  const rooms = []
  for (let i = 0; i < count; i++) {
    rooms.push(generateFakeRoom())
  }

  // Guardar las rooms si la BD esta vacía
  const Room = mongoose.model('Room')
  const roomCount = await Room.countDocuments()
  if (roomCount === 0) {
    console.log('Faking rooms')
    await Room.insertMany(rooms)
  }
}

// Exporta la función fakeRooms
export { fakeRooms }
