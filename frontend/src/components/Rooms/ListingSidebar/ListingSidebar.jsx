import { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'
import Bathroom from './Bathroom/Bathroom'
import Bedroom from './Bedroom/Bedroom'
import OtherFeatures from './OtherFeatures/OtherFeatures'
import PriceRange from './PriceRange/PriceRange'
import SearchBox from './SearchBox/SearchBox'
import SquareFeet from './SquareFeet/SquareFeet'
import StructureType from '../../common/advance-filter/StructureType'
import Amenities from '../../common/advance-filter/Amenities'

const ListingSidebar = () => {
  const { resetFilters } = useContext(RoomContext)
  return (
    <div className='list-sidebar-style1'>
      <div className='widget-wrapper'>
        <h6 className='list-title'>Find your home</h6>
        <SearchBox />
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Price Range</h6>
        {/* Range Slider Desktop Version */}
        <div className='range-slider-style1'>
          <PriceRange />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Bedrooms</h6>
        <div className='d-flex'>
          <Bedroom />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Bathrooms</h6>
        <div className='d-flex'>
          <Bathroom />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper advance-feature-modal'>
        <h6 className='list-title'>Structure Type</h6>
        <div className='form-style2 relative flex items-stretch w-full'>
          <StructureType />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title'>Square Feet</h6>
        <SquareFeet />
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
                  <Amenities numColumns={2} />
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
        <div className='reset-button cursor' href='#' onClick={resetFilters}>
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
