import listings from '../../../data/roomsItems'
import React from 'react'

const OverView = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  const overviewData = [
    {
      icon: 'flaticon-bed',
      label: 'Bedroom',
      value: data.bedrooms
    },
    {
      icon: 'flaticon-shower',
      label: 'Bath',
      value: data.bathrooms
    },
    {
      icon: 'flaticon-event',
      label: 'Year Built',
      value: data.yearBuilt
    },
    {
      icon: 'flaticon-garage',
      label: 'Garage',
      value: data.garage
    },
    {
      icon: 'flaticon-expand',
      label: 'Sqft',
      value: data.size
    },
    {
      icon: 'flaticon-home-1',
      label: 'Property Type',
      value: data.structureType
    }
  ]

  return (
    <>
      {overviewData.map((item, index) => (
        <div key={index} className={`col-sm-6 col-lg-4 ${index < 3 ? 'mb25' : ''}`}>
          <div className='overview-element flex items-center'>
            <span className={`icon ${item.icon}`} />
            <div className='ml15'>
              <h6 className='mb-0'>{item.label}</h6>
              <p className='text mb-0 fz15'>{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default OverView
