import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import TableSkeleton from './TableSkeleton'
import { useDeleteDialog } from '../../../hooks/useDeleteDialog'
import { toNormalCase } from '../../../utils/formatString'
import Selector from '../Inputs/Selector'

const Table = ({ loading = false, data, setData, columns, onEdit, onDelete, filterValue, onFilter, itemName = 'item' }) => {
  const [itemToDelete, setItemToDelete] = useState(null)

  const { DialogElement, handleOpen } = useDeleteDialog({
    onCancel: () => setItemToDelete(null),
    onSave: onDelete ? () => deleteItem(itemToDelete) : () => { },
    title: `Delete ${toNormalCase(itemName)}`,
    message: `Are you sure you want to delete this ${itemName}? This action cannot be undone.`,
    deleteElementName: itemName
  })

  const deleteItem = async (id) => {
    await onDelete(id)
    setData(data.filter(item => item._id !== id))
  }

  const handleDeleteBtn = (id) => {
    setItemToDelete(id)
    handleOpen()
  }

  // Remove the Action column if exists to prevent unexpected actions
  columns = columns.filter(column => column.header !== 'Actions')

  columns.push({
    header: 'Action', // Add the Actions header
    cell: (row) => ( // Add the cell function
      <div className='flex space-x-4 w-full 2xl:w-fit justify-center items-center gap-8 2xl:gap-4'>
        {
          // Only show the edit button if the onEdit function is provided
          onEdit && (
            <button
              className='flex justify-center items-center h-11 w-11 2xl:w-8 2xl:h-8 rounded-md bg-orangePrimary dark:bg-orangePrimary/70 dark:hover:bg-[#d96351]/40 hover:bg-[#d96351]' title='Edit'
              onClick={() => onEdit(row.cell.row.original._id)}
            >
              <i className='fa-solid fa-pen text-white scale-110 2xl:scale-100' />
            </button>
          )
        }

        {
          // Only show the delete button if the onDelete function is provided
          onDelete && (
            <button
              className='flex justify-center items-center h-11 w-11 2xl:w-8 2xl:h-8 !m-0 rounded-md bg-red-600 dark:bg-red-600/70 dark:hover:bg-red-600/40 hover:bg-[#c72626]' title='Delete'
              onClick={() => handleDeleteBtn(row.cell.row.original._id)}
            >
              <i className='fa-solid fa-trash text-white scale-110 2xl:scale-100' />
            </button>
          )
        }
      </div>
    )
  })

  const [sorting, setSorting] = useState([]) // This will be used to store the sorting state
  const [globalFilter, setGlobalFilter] = useState('') // This will be used to store the global filter state
  const [showData, setShowData] = useState(false) // This will be used to show the data

  // Determinar el valor del filtro a utilizar
  const filterToUse = filterValue || globalFilter
  const filterStateToUse = onFilter || setGlobalFilter

  // Create the table using the useReactTable hook
  const table = useReactTable({
    data, // The data to be displayed
    columns, // The columns to be displayed
    getCoreRowModel: getCoreRowModel(), // The core row model
    getPaginationRowModel: getPaginationRowModel(), // This will enable the pagination
    getSortedRowModel: getSortedRowModel(), // This will enable the sorting
    getFilteredRowModel: getFilteredRowModel(), // This will enable the filtering
    state: { // The initial state of the table
      sorting,
      globalFilter: filterToUse // Usar el filtro específico o el global
    },
    onSortingChange: setSorting, // Set the sorting state
    onGlobalFilterChange: filterStateToUse // Set the global filter state
  })

  useEffect(() => {
    // Set the show data true if the data is not empty
    setShowData(data.length > 0 && table.getRowModel().rows.length > 0)
  }, [data, table.getRowModel().rows])

  return (
    <>
      {loading
        ? <TableSkeleton />
        : (
          <section className='pt-0 packages_table table-responsive 2xl:bg-white 2xl:dark:bg-midnight 2xl:p-5 rounded-xl'>
            {/* Start of Search and Entries per page */}
            <div className=''>
              <div className='flex items-center font-medium !mb-7 w-'>
                <Selector
                  id='entriesPerPage'
                  inputName='entriesPerPage'
                  inputType='select'
                  labelClassName='dark:text-white'
                  containerClassName='w-40 dark:bg-midnight !mb-0'
                  options={[{ value: 10, label: 10 }, { value: 20, label: 20 }, { value: 30, label: 30 }, { value: 40, label: 40 }, { value: 50, label: 50 }]}
                  optionName='label'
                  optionValue='value'
                  value={table.getState().pagination.pageSize}
                  onChange={(option) => table.setPageSize(option.value)}
                />
                <span className='pl-2 dark:!text-white duration-300 ease-linear mb-0'>Entries Per Page</span>
              </div>
            </div>
            {/* End of Search and Entries per page */}

            {/* Start Table */}
            <table role='table' className='table-style3 at-savesearch min-w-[0px] !block'>
              <thead style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} className='t-head fixed 2xl:static w-[100dvw] lg:w-[calc(100dvw-300px)] 2xl:w-full z-40 top-[140px] lg:top-[179px] right-0 block bg-white dark:bg-midnight rounded-b-3xl 2xl:rounded-none overflow-hidden'>
                {
                  table.getHeaderGroups().map(headerGroup => (
                    <tr className='w-full flex bg-white dark:bg-midnight overflow-hidden' scope='row' key={headerGroup.id}>
                      {
                        headerGroup.headers.map((header, index) => {
                          return !header.column.columnDef.hidden
                            ? (
                              <th
                                role='columnheader'
                                key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                                className={`cursor-pointer pt-9 pl-8 pr-2.5 pb-6 select-none w-1/4 dark:bg-midnight ${index === 0 ? '2xl:w-[40%]' : '2xl:w-[20%]'}`}
                                colSpan='1'
                              >
                                <div className='flex items-center justify-center'>
                                  <span className='dark:text-white'>{header.column.columnDef.header}</span>
                                  {/* Show the sorting icon */}
                                  <div className='ml-2 inline-flex flex-col space-y-[2px]'>
                                    <span className='inline-block'>
                                      <svg className={`fill-current ${header.column.getIsSorted() === 'asc' ? 'fill-white dark:fill-midnight' : 'dark:fill-white fill-midnight'}`} width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 0L0 5H10L5 0Z' fill='' /></svg>
                                    </span>
                                    <span className='inline-block'>
                                      <svg className={`fill-current ${header.column.getIsSorted() === 'desc' ? 'fill-white dark:fill-midnight' : 'dark:fill-white fill-midnight'}`} width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z' fill='' /></svg>
                                    </span>
                                  </div>
                                </div>
                              </th>
                              )
                            : null
                        })
                      }
                    </tr>
                  ))
                }
              </thead>
              <tbody className='t-body flex flex-col gap-10 2xl:gap-0 w-full'>
                {!showData && (
                  <tr role='row' className='border-b border-stroke dark:border-strokedark duration-300 ease-linear block w-full border-none'>
                    <td colSpan={columns.length} className='pl-8 !py-7 pr-2 text-center block w-full dark:!text-white bg-white dark:bg-midnight !font-medium rounded-xl text-base my-6 border !border-[#ddd] dark:!border-borderColor/20'>
                      No data found
                    </td>
                  </tr>
                )}
                {showData && table.getRowModel().rows.map(row => (
                  <tr className='flex flex-col border box-border rounded-xl overflow-hidden 2xl:border-none w-full 2xl:flex-nowrap 2xl:flex-row  !border-[#ddd] dark:!border-borderColor/20' key={row.id}>

                    {
                      row.getVisibleCells().map((cell, index) => (

                        !cell.column.columnDef.hidden && (
                          <td
                            className={`vam dark:bg-midnight bg-white dark:!text-white box-border ${index === 0 || index === row.getVisibleCells().length - 1 ? 'border-none !px-[30px]' : 'justify-center items-center hidden 2xl:flex'} ${index === row.getVisibleCells().length - 1 ? 'flex justify-center items-center' : ''}  ${index === 0 ? '2xl:w-[40%]' : '2xl:w-[20%]'} ${index === 1 ? '!p-0' : ''}`}
                            key={cell.id}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        )
                      ))
                    }
                  </tr>
                ))}
              </tbody>
            </table>
            {/* End Table */}

            {/* Pagination Section */}
            <div className='flex justify-between border-t border-stroke px-8 pt-5 dark:border-strokedark min-w-[0px] duration-300 ease-linear border-none'>
              <p className='font-medium dark:text-white'>
                Showing {table.getState().pagination.pageIndex + 1} 0f {table.getPageCount()} pages
              </p>
              <div className='flex'>
                <button
                  className={`flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-whiter ${table.getCanPreviousPage() ? 'cursor-pointer' : 'cursor-not-allowed '}`}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className='icon-[material-symbols-light--keyboard-double-arrow-left-rounded]' style={{ fontSize: '30px' }} />
                </button>
                <button
                  className={`flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-whiter ${table.getCanPreviousPage() ? 'cursor-pointer' : 'cursor-not-allowed '}`} onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className='icon-[iconamoon--arrow-left-2-thin]' style={{ fontSize: '30px' }} />
                </button>
                <button
                  className={`flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-whiter ${table.getCanNextPage() ? 'cursor-pointer' : 'cursor-not-allowed '}`} onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <span className='icon-[iconamoon--arrow-right-2-thin]' style={{ fontSize: '30px' }} />
                </button>
                <button
                  className={`flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-whiter ${table.getCanNextPage() ? 'cursor-pointer' : 'cursor-not-allowed '}`} onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <span className='icon-[material-symbols-light--keyboard-double-arrow-right-rounded]' style={{ fontSize: '30px' }} />
                </button>
              </div>
              {/* <div>
          <span>Go to page:</span>
          <input
            type='number'
            min={1}
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
          />
        </div> */}
            </div>
            {/* End Pagination Section */}
            {DialogElement}
          </section>
          )}

    </>

  )
}

export default Table
