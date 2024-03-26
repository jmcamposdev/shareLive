import Bathroom from './Bathroom/Bathroom'
import Bedroom from './Bedroom/Bedroom'
import ListingStatus from './ListingStatus/ListingStatus'
import Location from './Location/Location'
import OtherFeatures from './OtherFeatures/OtherFeatures'
import PriceRange from './PriceRange/PriceRange'
import PropertyType from './PropertyType/PropertyType'
import SearchBox from './SearchBox/SearchBox'
import SquareFeet from './SquareFeet/SquareFeet'
import YearBuilt from './YearBuilt/YearBuilt'

const ListingSidebar = ({ filterFunctions }) => {
  return (
    <div className='list-sidebar-style1'>
      <div className='widget-wrapper'>
        <h6 className='list-title'>Find your home</h6>
        <SearchBox filterFunctions={filterFunctions} />
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Listing Status</h6>
        <div className='radio-element'>
          <ListingStatus filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Property Type</h6>
        <div className='checkbox-style1'>
          <PropertyType filterFunctions={filterFunctions} />
        </div>
      </div>

      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Price Range</h6>
        {/* Range Slider Desktop Version */}
        <div className='range-slider-style1'>
          <PriceRange filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Bedrooms</h6>
        <div className='d-flex'>
          <Bedroom filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Bathrooms</h6>
        <div className='d-flex'>
          <Bathroom filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper advance-feature-modal'>
        <h6 className='list-title'>Location</h6>
        <div className='form-style2 input-group'>
          <Location filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Square Feet</h6>
        <SquareFeet filterFunctions={filterFunctions} />
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Year Built</h6>
        <YearBuilt filterFunctions={filterFunctions} />
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <div className='feature-accordion'>
          <div className='accordion' id='accordionExample'>
            <div className='accordion-item border-none'>
              <h2 className='accordion-header' id='headingOne'>
                <button
                  className='accordion-button border-none p-0 after-none feature-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  <span className='flaticon-settings' /> Other Features
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse'
                aria-labelledby='headingOne'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body p-0 mt15'>
                  <OtherFeatures filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper mb20'>
        <div className='btn-area d-grid align-items-center'>
          <button className='ud-btn btn-thm'>
            <span className='flaticon-search align-text-top pr10' />
            Search
          </button>
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='reset-area d-flex align-items-center justify-content-between'>
        <div onClick={() => filterFunctions.resetFilter()} className='reset-button cursor' href='#'>
          <span className='flaticon-turn-back' />
          <u>Reset all filters</u>
        </div>
        <a className='reset-button' href='#'>
          <span className='flaticon-favourite' />
          <u>Save Search</u>
        </a>
      </div>
    </div>
  )
}

export default ListingSidebar
