import React, { useContext } from 'react'
import Selector from '../../common/Inputs/Selector'
import { RoomSearchContext } from '../../../context/RoomSearchContext'
import { ORDER_ROOMS_BY } from '../../../constants/rooms.constants'
import { PaginationContext } from '../../../context/PaginationContext'
import LoadingSkeleton from '../../common/Loading/LoadingSkeleton'
import { snakeToNormalCase, upperCaseToNormalCase } from '../../../utils/formatString'

const TopFilterBar = () => {
  // Get the paginacion context currentPage, totalPages
  const { currentPage, totalPages } = useContext(PaginationContext)
  // Get the rooms from the context
  const { gridView, orderBy, orderByValue, loading } = useContext(RoomSearchContext)
  const { isGridView, onListClick, onGridClick } = gridView

  const orderOptions = Object.entries(ORDER_ROOMS_BY).map((order) => {
    return {
      value: order[1],
      label: upperCaseToNormalCase(snakeToNormalCase(order[0]))
    }
  })

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
          <div className='pcs_dropdown pr10 flex items-center gap-3'>
            <span className='min-w-[60px]'>Sort by</span>
            <Selector
              options={orderOptions}
              value={orderOptions.find((order) => order.value === orderByValue)}
              inputName='order'
              inputType='select'
              containerClassName='w-40 !mb-0'
              optionValue='value'
              optionName='label'
              onChange={({ value }) => orderBy(value)}
            />
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
