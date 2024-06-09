import * as Yup from 'yup'
import roomFormModel from './roomFormModel'

const {
  formField: {
    title,
    description,
    excerpt,
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

export default [
  Yup.object().shape({
    [title.name]: Yup.string().required(`${title.requiredErrorMsg}`),
    [excerpt.name]: Yup.string().required(`${excerpt.requiredErrorMsg}`),
    [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
    [price.name]: Yup.number().required(`${price.requiredErrorMsg}`).min(price.min, `${price.minErrorMsg}`).max(price.max, `${price.maxErrorMsg}`),
    [propertyStatus.name]: Yup.string().required(`${propertyStatus.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [images.name]: Yup.array().min(1, `${images.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    [latitude.name]: Yup.number().required(`${latitude.requiredErrorMsg}`),
    [longitude.name]: Yup.number().required(`${longitude.requiredErrorMsg}`),
    [countryCode.name]: Yup.string().required(`${countryCode.requiredErrorMsg}`),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
    [postalCode.name]: Yup.string().required(`${postalCode.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [squareMeters.name]: Yup.number().required(`${squareMeters.requiredErrorMsg}`).min(squareMeters.min, `${squareMeters.minErrorMsg}`).max(squareMeters.max, `${squareMeters.maxErrorMsg}`),
    [bedrooms.name]: Yup.number().required(`${bedrooms.requiredErrorMsg}`).min(bedrooms.min, `${bedrooms.minErrorMsg}`).max(bedrooms.max, `${bedrooms.maxErrorMsg}`),
    [bathrooms.name]: Yup.number().required(`${bathrooms.requiredErrorMsg}`).min(bathrooms.min, `${bathrooms.minErrorMsg}`).max(bathrooms.max, `${bathrooms.maxErrorMsg}`),
    [yearBuilt.name]: Yup.number().required(`${yearBuilt.requiredErrorMsg}`).min(yearBuilt.min, `${yearBuilt.minErrorMsg}`).max(yearBuilt.max, `${yearBuilt.maxErrorMsg}`),
    [floor.name]: Yup.number().required(`${floor.requiredErrorMsg}`).min(floor.min, `${floor.minErrorMsg}`).max(floor.max, `${floor.maxErrorMsg}`),
    [structureType.name]: Yup.string().required(`${structureType.requiredErrorMsg}`),
    [garageNumber.name]: Yup.number().required(`${garageNumber.requiredErrorMsg}`).min(garageNumber.min, `${garageNumber.minErrorMsg}`).max(garageNumber.max, `${garageNumber.maxErrorMsg}`),
    [amenities.name]: Yup.object().shape({
      washer: Yup.boolean(),
      dryer: Yup.boolean(),
      microwave: Yup.boolean(),
      dishwasher: Yup.boolean(),
      refrigerator: Yup.boolean(),
      furnace: Yup.boolean(),
      airConditioning: Yup.boolean(),
      tv: Yup.boolean(),
      wifi: Yup.boolean(),
      garage: Yup.boolean(),
      elevator: Yup.boolean(),
      electricHeater: Yup.boolean()
    })
  })
]
