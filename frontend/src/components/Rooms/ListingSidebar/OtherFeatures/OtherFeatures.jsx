import { useContext } from 'react'
import { RoomSearchContext } from '../../../../context/RoomSearchContext'

const OtherFeatures = () => {
  const { filters, filterBy } = useContext(RoomSearchContext)
  const { amenities } = filters
  const featuresLeftColumn = [
    { label: 'Washer' },
    { label: 'Dryer' },
    { label: 'Microwave' },
    { label: 'dishwasher' },
    { label: 'Refrigerator' },
    { label: 'Furnace' }
  ]

  const featuresRightColumn = [
    { label: 'Air Conditioning' },
    { label: 'TV' },
    { label: 'WIFI' },
    { label: 'Garage' },
    { label: 'Elevator' },
    { label: 'Electric Heater' }
  ]

  const handleSelectAmenities = (e) => {
    // Get the text of the parent label
    const isChecked = e.target.checked
    const feature = e.target.parentElement.textContent
    if (isChecked) {
      filterBy.amenities([...amenities, feature])
    } else {
      filterBy.amenities(amenities.filter((item) => item !== feature))
    }
  }

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='checkbox-style1'>
          {featuresLeftColumn.map((feature, index) => (
            <label className='custom_checkbox' key={index}>
              {feature.label}
              <input
                type='checkbox'
                onChange={handleSelectAmenities}
                checked={amenities.includes(feature.label)}
              />
              <span className='checkmark' />
            </label>
          ))}
        </div>
      </div>
      {/* End .col-6 */}

      <div className='col-lg-6'>
        <div className='checkbox-style1'>
          {featuresRightColumn.map((feature, index) => (
            <label className='custom_checkbox' key={index}>
              {feature.label}
              <input
                type='checkbox'
                onChange={handleSelectAmenities}
                checked={amenities.includes(feature.label)}
              />
              <span className='checkmark' />
            </label>
          ))}
        </div>
      </div>
      {/* End .col-6 */}
    </div>
  )
}

export default OtherFeatures
