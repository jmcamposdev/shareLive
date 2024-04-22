import React, { useContext } from 'react'
import { RoomSearchContext } from '../../../context/RoomSearchContext'
import { ORDER_BY_HIGH_PRICE, ORDER_BY_LOW_PRICE, ORDER_BY_NEWEST } from '../../../constants/rooms.constants'
import { PaginationContext } from '../../../context/PaginationContext'
import LoadingSkeleton from '../../common/Loading/LoadingSkeleton'

const TopFilterBar = () => {
  // Get the paginacion context currentPage, totalPages
  const { currentPage, totalPages } = useContext(PaginationContext)
  // Get the rooms from the context
  const { gridView, orderBy, loading } = useContext(RoomSearchContext)
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
                <p className='pagination_page_count mb-0 text-left relative z-10 dark:text-white'>Showing {currentPage} of {totalPages} pages</p>
                )
          }
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className='sm:w-1/2 pr-4 pl-4'>
        <div className='page_control_shorting flex items-center justify-center sm:justify-end'>
          <div className='pcs_dropdown pr10 flex items-center'>
            <span className='min-w-[60px]'>Sort by</span>
            <select
              className='form-select dark:text-white'
              onChange={handleOrderSelect}
            >
              <option className='' value={ORDER_BY_NEWEST}>Newest</option>
              <option className='' value={ORDER_BY_LOW_PRICE}>Price Low</option>
              <option className='' value={ORDER_BY_HIGH_PRICE}>Price High</option>
            </select>
          </div>
          <button
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor dark:text-white ${isGridView ? 'menuActive' : '#'}`}
            onClick={onGridClick}
          >
            Grid
          </button>
          <button
            className={`pl15 d-none d-md-block  cursor dark:text-white ${!isGridView ? 'menuActive' : '#'}`}
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

/*
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

  const handleOrderSelect = (value) => {
    switch (value) {
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

  const openCloseSort = () => {
    const list = document.getElementById('newSort')

    if (list.style.height === '182px') {
      list.style.height = 0
      list.style.border = ''
      return false
    } else {
      list.style.height = '182px'
      list.style.border = '1px solid #dddddd'
      return true
    }
  }

  const handleSort = (e) => {
    const displaySort = document.getElementById('displaySort')

    if (e.target.id === 'new') {
      displaySort.innerHTML = 'Newest'
      orderBy(ORDER_BY_NEWEST)
    } else if (e.target.id === 'low') {
      displaySort.innerHTML = 'Price Low'
      orderBy(ORDER_BY_LOW_PRICE)
    } else if (e.target.id === 'high') {
      orderBy(ORDER_BY_HIGH_PRICE)
      displaySort.innerHTML = 'Price High'
    }

    e.stopPropagation()
    openCloseSort()
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
                <p className='pagination_page_count mb-0 text-left dark:text-white relative'>Showing {currentPage} of {totalPages} pages</p>
                )
          }
        </div>
      </div>

      <div className='sm:w-1/2 pr-4 pl-4'>
        <div className='page_control_shorting flex items-center justify-center sm:justify-end'>
          <div className='pcs_dropdown pr10 flex items-center'>

            <div onClick={openCloseSort} className='relative flex gap-7 hover:cursor-pointer'>
              <ul style={{ transition: 'all 400ms ease', height: '0' }} id='newSort' className='overflow-hidden absolute top-[120%] left-0 z-10 bg-white dark:!bg-midnight w-full rounded-md dark:!border-borderColor/80'>
                <li id='new' onClick={handleSort} className='dark:text-white py-3 px-4 mt-2 hover:bg-orangePrimary/10 dark:hover:bg-lightmidnight hover:cursor-pointer'>Newest</li>
                <li id='low' onClick={handleSort} className='dark:text-white py-3 px-4 mt-2 hover:bg-orangePrimary/10 dark:hover:bg-lightmidnight hover:cursor-pointer'>Price Low</li>
                <li id='high' onClick={handleSort} className='dark:text-white py-3 px-4 my-2 hover:bg-orangePrimary/10 dark:hover:bg-lightmidnight hover:cursor-pointer'>Price High</li>
              </ul>
              <span className='dark:!text-white' style={{ minWidth: '60px' }}>Sort by</span>
              <div className=' flex gap-8 relative'>
                <p id='displaySort' className='mb-0 dark:text-white min-w-[70px]'>Newest</p>
                <i className=' fa-solid fa-chevron-down text-sm dark:text-white' />
              </div>

            </div>
          </div>
          <button
            className={`dark:text-white pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor ${isGridView ? 'menuActive' : '#'}`}
            onClick={onGridClick}
          >
            Grid
          </button>
          <button
            className={`dark:text-white pl15 d-none d-md-block  cursor ${!isGridView ? 'menuActive' : '#'}`}
            onClick={onListClick}
          >
            List
          </button>
        </div>
      </div>
    </>
  )
}

export default TopFilterBar

*/
