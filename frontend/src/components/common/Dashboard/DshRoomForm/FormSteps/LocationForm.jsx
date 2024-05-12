import { useState } from 'react'
import useCities from '../../../../../hooks/useCities'
import DebounceInput from '../../../DebounceInput/DebounceInput'
import FormikControl from '../../../Formik/Inputs/FormikControl'
import { useFormikContext } from 'formik'

const LocationForm = (props) => {
  const { values, handleChange } = useFormikContext() // Obtener handleChange de Formik
  const [visibleList, setVisibleList] = useState(false)
  const [searchValue, setSearchValue] = useState(values?.address || '')
  const { cities, citiesLoading } = useCities({ searchValue })
  const {
    formField: {
      address,
      state,
      country,
      countryCode,
      city,
      postalCode,
      latitude,
      longitude
    }
  } = props

  const handleSelectCity = (selectedCity) => {
    setSearchValue(selectedCity.addressLabel || selectedCity.street)
    setVisibleList(false)
    handleChange({ target: { name: address.name, value: selectedCity.addressLabel || selectedCity.street } })
    handleChange({ target: { name: state.name, value: selectedCity.state || selectedCity.region } })
    handleChange({ target: { name: country.name, value: selectedCity.country || selectedCity.countryName } })
    handleChange({ target: { name: countryCode.name, value: selectedCity.countryCode } })
    handleChange({ target: { name: city.name, value: selectedCity.city } })
    handleChange({ target: { name: postalCode.name, value: selectedCity.postalCode } })
    handleChange({ target: { name: latitude.name, value: selectedCity.latitude } })
    handleChange({ target: { name: longitude.name, value: selectedCity.longitude } })
  }

  return (
    <div className='py-8'>
      <h5 className='pb-8 mb-0'>Room Location</h5>
      <div className='flex flex-col gap-5'>
        <div>
          <label htmlFor='search' className='fw600 ff-heading mb-2 dark:text-white '>Address</label>
          <DebounceInput
            className='form-control'
            inputName='search'
            placeholder='Enter your address...'
            value={searchValue}
            onDebouncedValueChange={(value) => setSearchValue(value)}
            onFocus={() => setVisibleList(true)}
            onFocusOut={() => setTimeout(() => setVisibleList(false), 200)}
          />
          {visibleList && (
            <ul className='list-results absolute bg-white w-full pr-0 rounded-lg mt-6 max-h-96 overflow-y-scroll z-50'>
              {citiesLoading
                ? (
                  <li className='flex items-center gap-3 px-4 py-4 cursor-pointer hover:bg-[#FEF7F6] transition-all'>
                    <span className='icon fa-regular fa-city text-xl' />
                    <div>
                      <p className='m-0 leading-none mb-2 text-base'>Loading...</p>
                    </div>
                  </li>
                  )
                : cities.map((city, index) => (
                  <li
                    className={`flex items-center gap-3 px-4 py-4 cursor-pointer hover:bg-[#FEF7F6] transition-all ${index === cities.length - 1 ? '' : 'bdrb1'}`}
                    key={city.addressLabel}
                    onClick={() => handleSelectCity(city)}
                  >
                    <span className='icon fa-regular fa-city text-xl' />
                    <div>
                      <p className='m-0 leading-none mb-2 text-base'>{city.addressLabel || city.street}</p>
                      <p className='m-0 leading-none text-sm text-gray-600'>{city.city}, {city.state}, {city.country}</p>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className='flex gap-5'>
          <FormikControl
            control='input'
            type='text'
            id={state.name}
            name={state.name}
            label={state.label}
            placeholder={state.placeholder}
            disabled
          />
          <FormikControl
            control='input'
            type='text'
            id={country.name}
            name={country.name}
            label={country.label}
            placeholder={country.placeholder}
            disabled
          />
          <FormikControl
            control='input'
            type='text'
            id={city.name}
            name={city.name}
            label={city.label}
            placeholder={city.placeholder}
            disabled
          />
          <FormikControl
            control='input'
            type='text'
            id={postalCode.name}
            name={postalCode.name}
            label={postalCode.label}
            placeholder={postalCode.placeholder}
            disabled
          />
        </div>
        <div className='w-full'>
          <iframe
            className='position-relative bdrs12 mt30 h-96 dark:bg-lightmidnight'
            loading='lazy'
            src={`https://maps.google.com/maps?q=${values.latitude},${values.longitude}&t=m&z=14&output=embed`}
            title={address.value}
            aria-label={address.value}
          />
        </div>
      </div>

    </div>
  )
}

export default LocationForm
