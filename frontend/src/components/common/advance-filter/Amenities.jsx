import { useContext, useEffect, useState } from 'react'
import { RoomContext } from '../../../context/roomContext'

const Amenities = ({ numColumns }) => {
  const [slicedAmenities, setSlicedAmenities] = useState([])
  const { filters, filterBy } = useContext(RoomContext)
  const { amenities } = filters

  const handleAmenities = (e) => {
    const updatedAmenities = amenities.map((amenity) => {
      if (amenity.label === e.target.value) {
        return { ...amenity, checked: e.target.checked }
      }
      return amenity
    })
    filterBy.amenities(updatedAmenities)
  }

  useEffect(() => {
    const dataperColumn = Math.ceil(amenities.length / numColumns)
    const tempAmenities = []
    for (let i = 0; i < numColumns; i++) {
      tempAmenities.push(amenities.slice(i * dataperColumn, (i + 1) * dataperColumn))
    }
    setSlicedAmenities(tempAmenities)
  }, [amenities, numColumns])

  return (
    <>
      {slicedAmenities.map((column, columnIndex) => (
        <div
          className='flex-grow pr-4 pl-4 dark:bg-lightmidnight'
          key={columnIndex}
        >
          <div className='widget-wrapper mb20'>
            <div className='checkbox-style1'>
              {column.map((amenity, amenityIndex) => (
                <label className='custom_checkbox dark:text-white' key={amenityIndex}>
                  {amenity.label}
                  <input
                    type='checkbox'
                    defaultChecked={amenity.checked}
                    value={amenity.label}
                    onChange={handleAmenities}
                  />
                  <span className='checkmark dark:border-white/60' />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Amenities
