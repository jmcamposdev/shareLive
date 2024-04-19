import { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'
import Bathroom from './Bathroom/Bathroom'
import Bedroom from './Bedroom/Bedroom'
import PriceRange from './PriceRange/PriceRange'
import SearchBox from './SearchBox/SearchBox'
import SquareFeet from './SquareFeet/SquareFeet'
import StructureType from '../../common/advance-filter/StructureType'
import Amenities from '../../common/advance-filter/Amenities'

const ListingSidebar = () => {
  const { resetFilters } = useContext(RoomContext)
  return (
    <div className='list-sidebar-style1 dark:bg-midnight'>
      <div className='widget-wrapper'>
        <h6 className='list-title dark:text-white'>Find your home</h6>
        <SearchBox />
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title dark:text-white'>Price Range</h6>
        {/* Range Slider Desktop Version */}
        <div className='range-slider-style1'>
          <PriceRange />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title dark:text-white'>Bedrooms</h6>
        <div className='d-flex'>
          <Bedroom />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title dark:text-white'>Bathrooms</h6>
        <div className='d-flex'>
          <Bathroom />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper advance-feature-modal'>
        <h6 className='list-title dark:text-white'>Structure Type</h6>
        <div className='form-style2 relative flex items-stretch w-full'>
          <StructureType />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper'>
        <h6 className='list-title dark:text-white'>Square Feet</h6>
        <SquareFeet />
      </div>
      {/* End .widget-wrapper */}

      <div className='widget-wrapper '>
        <div className='feature-accordion rounded-md dark:!border-borderColor/20 dark:border dark:bg-lightmidnight'>
          <div className='accordion' id='accordionExample '>
            <div className='accordion-item border-none dark:bg-lightmidnight '>
              <h2 className='accordion-header ' id='headingOne'>
                <button
                  className='accordion-button border-none p-0 after-none feature-button dark:text-white dark:bg-lightmidnight '
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  <span className='flaticon-settings dark:text-white bg-transparent' /> Other Features
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse dark:bg-lightmidnight'
                aria-labelledby='headingOne'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body p-0 mt15 dark:bg-lightmidnight'>
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
        <div className='reset-button cursor dark:text-white' href='#' onClick={resetFilters}>
          <span className='flaticon-turn-back' />
          <u>Reset all filters</u>
        </div>
        <a className='reset-button dark:text-white' href='#'>
          <span className='flaticon-favourite' />
          <u>Save Search</u>
        </a>
      </div>
    </div>
  )
}

export default ListingSidebar
