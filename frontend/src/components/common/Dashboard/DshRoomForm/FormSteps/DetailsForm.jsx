import { useFormikContext } from 'formik'
import FormikControl from '../../../Formik/Inputs/FormikControl'
import Selector from '../../../Inputs/Selector'
import { useEffect, useState } from 'react'
import { toCamelCase } from '../../../../../utils/formatString'

const numColumns = 3

const DetailsForm = (props) => {
  const [slicedAmenities, setSlicedAmenities] = useState([])
  const { values, handleChange } = useFormikContext() // Obtener handleChange de Formik
  const {
    formField: {
      squareMeters,
      bedrooms,
      bathrooms,
      yearBuilt,
      floor,
      structureType,
      amenities
    }
  } = props

  useEffect(() => {
    const dataperColumn = Math.ceil(amenities.options.length / numColumns)
    const tempAmenities = []
    for (let i = 0; i < numColumns; i++) {
      tempAmenities.push(amenities.options.slice(i * dataperColumn, (i + 1) * dataperColumn))
    }
    setSlicedAmenities(tempAmenities)
  }, [amenities, numColumns])

  const handleAmenitiesChange = (e) => {
    const updatedAmenities = { ...values.amenities, [toCamelCase(e.target.value)]: e.target.checked }
    handleChange({ target: { name: 'amenities', value: updatedAmenities } })
  }

  return (
    <div className='py-8'>
      <h5 className='pb-8 mb-0 dark:text-white'>Room Details</h5>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-5'>
          <FormikControl
            control='input'
            type='number'
            id={squareMeters.name}
            name={squareMeters.name}
            label={squareMeters.label}
            placeholder={squareMeters.placeholder}
          />
          <Selector
            label={bedrooms.label}
            id={bedrooms.name}
            inputName={bedrooms.name}
            options={bedrooms.options}
            optionValue={bedrooms.optionValue}
            optionName={bedrooms.optionName}
            value={values[bedrooms.name]}
            onChange={(option) => handleChange({ target: { name: bedrooms.name, value: option[bedrooms.optionValue] } })}
            containerClassName='w-full'
          />
          <Selector
            label={bathrooms.label}
            id={bathrooms.name}
            inputName={bathrooms.name}
            options={bathrooms.options}
            optionValue={bathrooms.optionValue}
            optionName={bathrooms.optionName}
            value={values[bathrooms.name]}
            onChange={(option) => handleChange({ target: { name: bathrooms.name, value: option[bathrooms.optionValue] } })}
            containerClassName='w-full'
          />
        </div>
        <div className='flex gap-5'>
          <FormikControl
            control='input'
            type='number'
            id={yearBuilt.name}
            name={yearBuilt.name}
            label={yearBuilt.label}
            placeholder={yearBuilt.placeholder}
          />
          <Selector
            label={floor.label}
            id={floor.name}
            inputName={floor.name}
            options={floor.options}
            optionValue={floor.optionValue}
            optionName={floor.optionName}
            value={values[floor.name]}
            onChange={(option) => handleChange({ target: { name: floor.name, value: option[floor.optionValue] } })}
            containerClassName='w-full'
          />
          <Selector
            label={structureType.label}
            id={structureType.name}
            inputName={structureType.name}
            options={structureType.options}
            optionValue={structureType.optionValue}
            optionName={structureType.optionName}
            value={values[structureType.name]}
            onChange={(option) => handleChange({ target: { name: structureType.name, value: option[structureType.optionValue] } })}
            containerClassName='w-full'
          />
        </div>
      </div>
      <h5 className='pb-8 mb-0 mt-8'>Select Amenities</h5>
      <div className='flex'>
        {slicedAmenities.map((column, columnIndex) => (
          <div
            className='flex-grow pr-4 pl-4  '
            key={columnIndex}
          >
            <div className='widget-wrapper mb20'>
              <div className='checkbox-style1'>
                {column.map((amenity, amenityIndex) => (
                  <label className='custom_checkbox dark:text-white' key={amenityIndex}>
                    {amenity.label}
                    <input
                      type='checkbox'
                      defaultChecked={values.amenities[amenity.value]}
                      value={amenity.label}
                      onChange={handleAmenitiesChange}
                    />
                    <span className='checkmark dark:border-white/60' />
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default DetailsForm
