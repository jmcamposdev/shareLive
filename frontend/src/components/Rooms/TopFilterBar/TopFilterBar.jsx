import React, { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'

const ORDER_BY_NEWEST = 'ORDER_BY_NEWEST'
const ORDER_BY_LOW_PRICE = 'ORDER_BY_LOW_PRICE'
const ORDER_BY_HIGH_PRICE = 'ORDER_BY_HIGH_PRICE'

const TopFilterBar = () => {
  // Get the rooms from the context
  const { gridView, orderBy } = useContext(RoomContext)
  const { isGridView, onListClick, onGridClick } = gridView

  const handleOrderSelect = (e) => {
    switch (e.target.value) {
      case ORDER_BY_NEWEST:
        orderBy.newest()
        break
      case ORDER_BY_LOW_PRICE:
        orderBy.lowPrice()
        break
      case ORDER_BY_HIGH_PRICE:
        orderBy.highPrice()
        break
      default:
        break
    }
  }
  return (
    <>
      <div className='sm:w-1/2 pr-4 pl-4'>
        <div className='text-center text-sm-start'>
          <p className='pagination_page_count mb-0 text-left'>
            Showing 1 – of 2 results
          </p>
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className='sm:w-1/2 pr-4 pl-4'>
        <div className='page_control_shorting flex items-center justify-center sm:justify-end'>
          <div className='pcs_dropdown pr10 flex items-center'>
            <span style={{ minWidth: '60px' }}>Sort by</span>
            <select
              className='form-select'
              onChange={handleOrderSelect}
            >
              <option value={ORDER_BY_NEWEST}>Newest</option>
              <option value={ORDER_BY_LOW_PRICE}>Price Low</option>
              <option value={ORDER_BY_HIGH_PRICE}>Price High</option>
            </select>
          </div>
          <div
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor ${isGridView ? 'menuActive' : '#'}`}
            onClick={onGridClick}
          >
            Grid
          </div>
          <div
            className={`pl15 d-none d-md-block  cursor ${!isGridView ? 'menuActive' : '#'}`}
            onClick={onListClick}
          >
            List
          </div>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  )
}

export default TopFilterBar
