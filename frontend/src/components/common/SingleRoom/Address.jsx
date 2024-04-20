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
      <div className='col-md-6 col-xl-4'>
        <div className='d-flex justify-content-between'>
          <div className='pd-list'>
            <p className='fw600 mb10 ff-heading dark-color'>Address</p>
            <p className='fw600 mb10 ff-heading dark-color'>City</p>
            <p className='fw600 mb-0 ff-heading dark-color'>State/county</p>
          </div>
          <div className='pd-list'>
            <p className='text mb10'>{address}</p>
            <p className='text mb10'>{city}</p>
            <p className='text mb-0'>{state}</p>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-xl-4 offset-xl-2'>
        <div className='d-flex justify-content-between'>
          <div className='pd-list'>
            <p className='fw600 mb10 ff-heading dark-color'>Zip/Postal Code</p>
            <p className='fw600 mb10 ff-heading dark-color'>Area</p>
            <p className='fw600 mb-0 ff-heading dark-color'>Country</p>
          </div>
          <div className='pd-list'>
            <p className='text mb10'>{postalCode}</p>
            <p className='text mb10'>{countryCode}</p>
            <p className='text mb-0'>{country}</p>
          </div>
        </div>
      </div>

      {/* End col */}

      <div className='col-md-12'>
        <iframe
          className='position-relative bdrs12 mt30 h250'
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
