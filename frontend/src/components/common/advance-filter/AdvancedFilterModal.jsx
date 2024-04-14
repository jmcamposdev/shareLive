import PriceRange from './PriceRange'
import Amenities from './Amenities'
import Bedroom from '../../Rooms/ListingSidebar/Bedroom/Bedroom'
import Bathroom from '../../Rooms/ListingSidebar/Bathroom/Bathroom'
import { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'
import StructureType from './StructureType'
import SquareFeet from '../../Rooms/ListingSidebar/SquareFeet/SquareFeet'

const AdvanceFilterModal = () => {
  const { resetFilters } = useContext(RoomContext)

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
            <div className='sm:w-full pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Structure Type</h6>
                <div className='form-style2 relative flex items-stretch w-full'>
                  <StructureType />
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
            <div className='sm:w-full pr-4 pl-4'>
              <div className='widget-wrapper'>
                <h6 className='list-title'>Square Feet</h6>
                <SquareFeet />
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
            <Amenities numColumns={3} />
          </div>
        </div>
        {/* End modal body */}

        <div className='modal-footer justify-between'>
          <button
            className='reset-button'
            onClick={() => resetFilters()}
          >
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
