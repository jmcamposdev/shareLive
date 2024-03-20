import Select from 'react-select'
import PriceRange from './PriceRange'
import Bedroom from './Bedroom'
import Bathroom from './Bathroom'
import Amenities from './Amenities'

const AdvanceFilterModal = () => {
  const catOptions = [
    { value: 'Banking', label: 'Apartments' },
    { value: 'Bungalow', label: 'Bungalow' },
    { value: 'Houses', label: 'Houses' },
    { value: 'Loft', label: 'Loft' },
    { value: 'Office', label: 'Office' },
    { value: 'Townhome', label: 'Townhome' },
    { value: 'Villa', label: 'Villa' }
  ]
  const locationOptions = [
    { value: 'All Cities', label: 'All Cities' },
    { value: 'California', label: 'California' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'New Jersey', label: 'New Jersey' },
    { value: 'New York', label: 'New York' },
    { value: 'San Diego', label: 'San Diego' },
    { value: 'San Francisco', label: 'San Francisco' },
    { value: 'Texas', label: 'Texas' }
  ]

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? '#eb6753'
          : isHovered
            ? '#eb675312'
            : isFocused
              ? '#eb675312'
              : undefined
      }
    }
  }

  return (
    <div className='modal-dialog modal-dialog-centered modal-lg'>
      <div className='modal-content'>
        <div className='modal-header pl30 pr30'>
          <h5 className='modal-title' id='exampleModalLabel'>
            More Filter
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          />
        </div>
        {/* End modal-header */}

        <div className='modal-body pb-0'>
          <div className='flex flex-wrap '>
            <div className='w-full pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title mb20'>Price Range</h6>
                <div className='range-slider-style modal-version'>
                  <PriceRange />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className='flex flex-wrap '>
            <div className='sm:w-1/2 pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Type</h6>
                <div className='form-style2 relative flex items-stretch w-full'>
                  <Select
                    defaultValue={[catOptions[1]]}
                    name='colors'
                    options={catOptions}
                    styles={customStyles}
                    className='select-custom'
                    classNamePrefix='select'
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div className='sm:w-1/2 pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Property ID</h6>
                <div className='form-style2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='RT04949213'
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap '>
            <div className='sm:w-1/2 pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Bedrooms</h6>
                <div className='flex'>
                  <Bedroom />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className='sm:w-1/2 pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Bathrooms</h6>
                <div className='flex'>
                  <Bathroom />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap '>
            <div className='sm:w-1/2 pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Location</h6>
                <div className='form-style2 relative flex items-stretch w-full'>
                  <Select
                    defaultValue={[locationOptions[0]]}
                    name='colors'
                    styles={customStyles}
                    options={locationOptions}
                    className='select-custom'
                    classNamePrefix='select'
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className='sm:w-1/2 pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Square Feet</h6>
                <div className='space-area'>
                  <div className='flex items-center justify-between gap-3'>
                    <div className='form-style1'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Min.'
                      />
                    </div>
                    <span className='dark-color'>-</span>
                    <div className='form-style1'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Max'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className='flex flex-wrap '>
            <div className='w-full pr-4 pl-4'>
              <div className='widget-wrapper mb0'>
                <h6 className='list-title mb10'>Amenities</h6>
              </div>
            </div>
            <Amenities />
          </div>
        </div>
        {/* End modal body */}

        <div className='modal-footer justify-between'>
          <button className='reset-button'>
            <span className='flaticon-turn-back' />
            <u>Reset all filters</u>
          </button>
          <div className='btn-area'>
            <button data-bs-dismiss='modal' type='submit' className='!flex !items-center !justify-center ud-btn btn-thm '>
              <span className='flaticon-search align-text-top pr10 !flex' />
              Search
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  )
}

export default AdvanceFilterModal
