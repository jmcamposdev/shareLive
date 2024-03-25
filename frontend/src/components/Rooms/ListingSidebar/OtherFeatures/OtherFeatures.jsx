const OtherFeatures = ({ filterFunctions }) => {
  const featuresLeftColumn = [
    { label: 'Attic' },
    { label: 'Basketball court', defaultChecked: true },
    { label: 'Air Conditioning', defaultChecked: true },
    { label: 'Lawn', defaultChecked: true },
    { label: 'TV Cable' },
    { label: 'Dryer' }
  ]

  const featuresRightColumn = [
    { label: 'Outdoor Shower' },
    { label: 'Washer' },
    { label: 'Lake view' },
    { label: 'Wine cellar' },
    { label: 'Front yard' },
    { label: 'Refrigerator' }
  ]

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='checkbox-style1'>
          {featuresLeftColumn.map((feature, index) => (
            <label className='custom_checkbox' key={index}>
              {feature.label}
              <input
                checked={filterFunctions?.categories.includes(feature.label)}
                type='checkbox' onChange={() => filterFunctions?.handlecategories(feature.label)}
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

              <input type='checkbox' onChange={() => filterFunctions?.handlecategories(feature.label)} defaultChecked={feature.defaultChecked} />
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
