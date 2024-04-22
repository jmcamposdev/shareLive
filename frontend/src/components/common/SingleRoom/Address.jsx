const PropertyAddress = ({
  address,
  city,
  state,
  postalCode,
  countryCode,
  country,
  latitude,
  longitude
}) => {
  return (
    <>
      <div className='col-md-6 col-xl-4 flex-1 mb-3 sm:mb-0'>
        <div className='d-flex justify-content-between'>
          <div className='pd-list'>
            <p className='fw600 mb10 ff-heading dark-color dark:text-white'>Address</p>
            <p className='fw600 mb10 ff-heading dark-color dark:text-white'>City</p>
            <p className='fw600 mb-0 ff-heading dark-color dark:text-white'>State/county</p>
          </div>
          <div className='pd-list'>
            <p className='text mb10 dark:text-white'>{address}</p>
            <p className='text mb10 dark:text-white'>{city}</p>
            <p className='text mb-0 dark:text-white'>{state}</p>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-xl-4 flex-1'>
        <div className='d-flex justify-content-between'>
          <div className='pd-list'>
            <p className='fw600 mb10 ff-heading dark-color dark:text-white'>Zip/Postal Code</p>
            <p className='fw600 mb10 ff-heading dark-color dark:text-white'>Area</p>
            <p className='fw600 mb-0 ff-heading dark-color dark:text-white'>Country</p>
          </div>
          <div className='pd-list'>
            <p className='text mb10 dark:text-white'>{postalCode}</p>
            <p className='text mb10 dark:text-white'>{countryCode}</p>
            <p className='text mb-0 dark:text-white'>{country}</p>
          </div>
        </div>
      </div>

      {/* End col */}

      <div className='w-full'>
        <iframe
          className='position-relative bdrs12 mt30 h250 dark:bg-lightmidnight'
          loading='lazy'
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=m&z=14&output=embed`}
          title={address}
          aria-label={address}
        />
      </div>
      {/* End col */}
    </>
  )
}

export default PropertyAddress
