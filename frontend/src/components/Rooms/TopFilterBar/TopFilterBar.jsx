import React, { useContext } from 'react'
import { RoomContext } from '../../../context/roomContext'
import { ORDER_BY_HIGH_PRICE, ORDER_BY_LOW_PRICE, ORDER_BY_NEWEST } from '../../../constants/rooms.constants'
import { PaginationContext } from '../../../context/PaginationContext'
import LoadingSkeleton from '../../common/Loading/LoadingSkeleton'

const TopFilterBar = () => {
  // Get the paginacion context currentPage, totalPages
  const { currentPage, totalPages } = useContext(PaginationContext)
  // Get the rooms from the context
  const { gridView, orderBy, loading } = useContext(RoomContext)
  const { isGridView, onListClick, onGridClick } = gridView

  const handleOrderSelect = (e) => {
    switch (e.target.value) {
      case ORDER_BY_NEWEST:
        orderBy(ORDER_BY_NEWEST)
        break
      case ORDER_BY_LOW_PRICE:
        orderBy(ORDER_BY_LOW_PRICE)
        break
      case ORDER_BY_HIGH_PRICE:
        orderBy(ORDER_BY_HIGH_PRICE)
        break
      default:
        break
    }
  }
  return (
    <>
      <div className='sm:w-1/2 pr-4 pl-4'>
        <div className='text-center text-sm-start'>
          {
            loading
              ? (
                <LoadingSkeleton className='w-40 h-4' />
                )
              : (
                <p className='pagination_page_count mb-0 text-left'>Showing {currentPage} of {totalPages} pages</p>
                )
          }
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
          <button
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor ${isGridView ? 'menuActive' : '#'}`}
            onClick={onGridClick}
          >
            Grid
          </button>
          <button
            className={`pl15 d-none d-md-block  cursor ${!isGridView ? 'menuActive' : '#'}`}
            onClick={onListClick}
          >
            List
          </button>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  )
}

export default TopFilterBar
