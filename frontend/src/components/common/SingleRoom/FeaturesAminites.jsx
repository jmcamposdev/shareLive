import listings from '../../../data/roomsItems'
import React from 'react'

const PropertyFeaturesAminites = ({ id }) => {
  const data = listings.filter((elm) => elm.id === id)[0] || listings[0]
  const featuresAmenitiesData = [
    {
      label: 'Amenities',
      value: data.amenities
    }
  ]

  // Función para dividir la lista en grupos de 4
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize))
    }
    return chunkedArray
  }

  return (
    <>
      {featuresAmenitiesData.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {chunkArray(row.value, 4).map((chunk, chunkIndex) => (
            <div key={chunkIndex} className='col-md-6'>
              <div className='pd-list'>
                {chunk.map((item, index) => (
                  <p key={index} className='text mb10'>
                    <i className='fas fa-circle fz6 align-middle pe-2' />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default PropertyFeaturesAminites
