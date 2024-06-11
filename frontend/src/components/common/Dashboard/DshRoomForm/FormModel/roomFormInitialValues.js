import roomFormModel from './roomFormModel'

const {
  formField: {
    title,
    excerpt,
    description,
    price,
    propertyStatus,
    images,
    address,
    latitude,
    longitude,
    countryCode,
    country,
    state,
    city,
    postalCode,
    squareMeters,
    bedrooms,
    bathrooms,
    yearBuilt,
    floor,
    structureType,
    garageNumber,
    amenities
  }
} = roomFormModel

export const roomFormInitialValues = (room) => {
  return {
    [title.name]: room?.title || '',
    [excerpt.name]: room?.excerpt || '',
    [description.name]: room?.description || '',
    [price.name]: room?.price || '',
    [propertyStatus.name]: room?.propertyStatus || propertyStatus.options[0].value,
    [images.name]: room?.images || [],
    [address.name]: room?.address || '',
    [latitude.name]: room?.latitude || '',
    [longitude.name]: room?.longitude || '',
    [countryCode.name]: room?.countryCode || '',
    [country.name]: room?.country || '',
    [state.name]: room?.state || '',
    [city.name]: room?.city || '',
    [postalCode.name]: room?.postalCode || '',
    [squareMeters.name]: room?.squareMeters || '',
    [bedrooms.name]: room?.bedrooms || bedrooms.options[0].value,
    [bathrooms.name]: room?.bathrooms || bathrooms.options[0].value,
    [yearBuilt.name]: room?.yearBuilt || '',
    [floor.name]: room?.floor || floor.options[0].value,
    [structureType.name]: room?.structureType || structureType.options[0].value,
    [garageNumber.name]: room?.garageNumber || '0',
    [amenities.name]: {
      washer: room?.amenities?.washer || false,
      dryer: room?.amenities?.dryer || false,
      microwave: room?.amenities?.microwave || false,
      dishwasher: room?.amenities?.dishwasher || false,
      refrigerator: room?.amenities?.refrigerator || false,
      furnace: room?.amenities?.furnace || false,
      airConditioning: room?.amenities?.airConditioning || false,
      tv: room?.amenities?.tv || false,
      wifi: room?.amenities?.wifi || false,
      garage: room?.amenities?.garage || false,
      elevator: room?.amenities?.elevator || false,
      electricHeater: room?.amenities?.electricHeater || false
    }
  }
}
