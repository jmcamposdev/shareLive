import listings from '../../../data/roomsItems'
import React from 'react'

const PropertyAddress = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  const addresses = [
    {
      label: 'Address',
      value: data.address
    },
    {
      label: 'City',
      value: data.city
    },
    {
      label: 'State/county',
      value: data.state
    },
    {
      label: 'ZipCode',
      value: data.postalCode
    },
    {
      label: 'Area',
      value: data.countryCode,
      xs: true
    },
    {
      label: 'Country',
      value: data.country
    },
    {
      label: 'Latitude',
      value: data.latitude
    },
    {
      label: 'Longitude',
      value: data.longitude
    }
  ]

  return (
    <>
      <div className='d-flex justify-content-between'>
        <div className='pd-list'>
          <p className='fw600 mb10 ff-heading dark-color'>Address</p>
          <p className='fw600 mb10 ff-heading dark-color'>City</p>
          <p className='fw600 mb10 ff-heading dark-color'>State/County</p>
        </div>
        <div className='pd-list'>
          <p className='text mb10'>{addresses[0].value}</p>
          <p className='text mb10'>{addresses[1].value}</p>
          <p className='text mb10'>{addresses[2].value}</p>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div className='pd-list'>
          <p className='fw600 mb10 ff-heading dark-color'>Zip/Postal Code</p>
          <p className='fw600 mb10 ff-heading dark-color'>Area</p>
          <p className='fw600 mb10 ff-heading dark-color'>Country</p>
        </div>
        <div className='pd-list'>
          <p className='text mb10'>{addresses[3].value}</p>
          <p className='text mb10'>{addresses[4].value}</p>
          <p className='text mb10'>{addresses[5].value}</p>
        </div>
      </div>

      {/* End col */}

      <div className='col-md-12'>
        <iframe
          className='position-relative bdrs12 mt30 h250'
          loading='lazy'
          src={`https://maps.google.com/maps?q=${data.latitude},${data.longitude}&t=m&z=14&output=embed`}
          title={data.address}
          aria-label={data.address}
        />
      </div>
      {/* End col */}
    </>
  )
}

export default PropertyAddress
