export default {
  formId: 'roomForm',
  formField: {
    title: {
      name: 'title',
      label: 'Title',
      placeholder: 'Title',
      requiredErrorMsg: 'Title is required'
    },
    excerpt: {
      name: 'excerpt',
      label: 'Excerpt',
      placeholder: 'Excerpt',
      requiredErrorMsg: 'Excerpt is required'
    },
    description: {
      name: 'description',
      label: 'Description',
      placeholder: 'Description',
      requiredErrorMsg: 'Description is required'
    },
    price: {
      name: 'price',
      label: 'Price',
      placeholder: 'Price',
      requiredErrorMsg: 'Price is required',
      min: 1,
      max: 1000000,
      minErrorMsg: 'Price must be greater than 1$',
      maxErrorMsg: 'Price must be less than 1000000$'
    },
    propertyStatus: {
      name: 'propertyStatus',
      label: 'Property Status',
      placeholder: 'Property Status',
      requiredErrorMsg: 'Property Status is required',
      options: [
        { value: 'Nearly new', label: 'Nearly new' },
        { value: 'Very Good', label: 'Very Good' },
        { value: 'Good', label: 'Good' },
        { value: 'To renovation', label: 'To renovation' },
        { value: 'Refurbished', label: 'Refurbished' }
      ],
      optionValue: 'value',
      optionName: 'label'
    },
    images: {
      name: 'images',
      label: 'Images',
      placeholder: 'Images',
      requiredErrorMsg: 'At least one image is required'
    },
    address: {
      name: 'address',
      label: 'Address',
      placeholder: 'Address',
      requiredErrorMsg: 'Address is required'
    },
    latitude: {
      name: 'latitude',
      label: 'Latitude',
      placeholder: 'Latitude',
      requiredErrorMsg: 'Latitude is required'
    },
    longitude: {
      name: 'longitude',
      label: 'Longitude',
      placeholder: 'Longitude',
      requiredErrorMsg: 'Longitude is required'
    },
    countryCode: {
      name: 'countryCode',
      label: 'Country Code',
      placeholder: 'Country Code',
      requiredErrorMsg: 'Country Code is required'
    },
    country: {
      name: 'country',
      label: 'Country',
      placeholder: 'Country',
      requiredErrorMsg: 'Country is required'
    },
    state: {
      name: 'state',
      label: 'State',
      placeholder: 'Select State',
      requiredErrorMsg: 'State is required'
    },
    city: {
      name: 'city',
      label: 'City',
      placeholder: 'Select City',
      requiredErrorMsg: 'City is required'
    },
    postalCode: {
      name: 'postalCode',
      label: 'Postal Code',
      placeholder: 'Postal Code',
      requiredErrorMsg: 'Postal Code is required'
    },
    squareMeters: {
      name: 'squareMeters',
      label: 'Square Meters',
      placeholder: 'Square Meters',
      requiredErrorMsg: 'Square Meters is required',
      min: 1,
      max: 10000,
      minErrorMsg: 'Square Meters must be greater than 0',
      maxErrorMsg: 'Square Meters must be less than 10000'
    },
    bedrooms: {
      name: 'bedrooms',
      label: 'Bedrooms',
      placeholder: 'Bedrooms',
      requiredErrorMsg: 'Bedrooms is required',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' }
      ],
      optionValue: 'value',
      optionName: 'label',
      min: 1,
      max: 10,
      minErrorMsg: 'Bedrooms must be greater than 0',
      maxErrorMsg: 'Bedrooms must be less than 10'
    },
    bathrooms: {
      name: 'bathrooms',
      label: 'Bathrooms',
      placeholder: 'Bathrooms',
      requiredErrorMsg: 'Bathrooms is required',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' }
      ],
      optionValue: 'value',
      optionName: 'label',
      min: 1,
      max: 10,
      minErrorMsg: 'Bathrooms must be greater than 0',
      maxErrorMsg: 'Bathrooms must be less than 10'
    },
    yearBuilt: {
      name: 'yearBuilt',
      label: 'Year Built',
      placeholder: 'Year Built',
      requiredErrorMsg: 'Year Built is required',
      min: 1900,
      max: new Date().getFullYear(),
      minErrorMsg: 'Year Built must be greater than 1900',
      maxErrorMsg: `Year Built must be less than ${new Date().getFullYear()}`
    },
    floor: {
      name: 'floor',
      label: 'Floor',
      placeholder: 'Floor',
      requiredErrorMsg: 'Floor is required',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' }
      ],
      optionValue: 'value',
      optionName: 'label',
      min: 1,
      max: 100,
      minErrorMsg: 'Floor must be greater than 0',
      maxErrorMsg: 'Floor must be less than 100'
    },
    structureType: {
      name: 'structureType',
      label: 'Structure Type',
      placeholder: 'Structure Type',
      requiredErrorMsg: 'Structure Type is required',
      options: [
        { value: 'Apartment', label: 'Apartment' },
        { value: 'House', label: 'House' },
        { value: 'Penthouse', label: 'Penthouse' },
        { value: 'Duplex', label: 'Duplex' },
        { value: 'Townhouse', label: 'Townhouse' },
        { value: 'Cottage', label: 'Cottage' }
      ],
      optionValue: 'value',
      optionName: 'label'
    },
    garageNumber: {
      name: 'garageNumber',
      label: 'Garage Number',
      placeholder: 'Garage Number',
      requiredErrorMsg: 'Garage Number is required',
      min: 0,
      max: 10,
      minErrorMsg: 'Garage Number must be greater than or equal to 0',
      maxErrorMsg: 'Garage Number must be less than 10'
    },
    amenities: {
      name: 'amenities',
      label: 'Amenities',
      placeholder: 'Amenities',
      requiredErrorMsg: 'Amenities is required',
      options: [
        { value: 'washer', label: 'Washer' },
        { value: 'dryer', label: 'Dryer' },
        { value: 'microwave', label: 'Microwave' },
        { value: 'dishwasher', label: 'Dishwasher' },
        { value: 'refrigerator', label: 'Refrigerator' },
        { value: 'furnace', label: 'Furnace' },
        { value: 'airConditioning', label: 'Air Conditioning' },
        { value: 'tv', label: 'TV' },
        { value: 'wifi', label: 'WIFI' },
        { value: 'garage', label: 'Garage' },
        { value: 'elevator', label: 'Elevator' },
        { value: 'electricHeater', label: 'Electric Heater' }
      ],
      optionValue: 'value',
      optionName: 'label'
    }
  }
}
