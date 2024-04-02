import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'

const Table = ({ data, columns, onEdit, onDelete, filterValue, onFilter }) => {
  // Remove the Action column if exists to prevent unexpected actions
  columns = columns.filter(column => column.header !== 'Actions')

  columns.push({
    header: 'Action', // Add the Actions header
    cell: (row) => ( // Add the cell function
      <div className='flex space-x-4'>
        {
          // Only show the edit button if the onEdit function is provided
          onEdit && (
            <button
              className='flex justify-center items-center w-8 h-8 rounded-md bg-primary hover:bg-opacity-70' title='Edit'
              onClick={() => onEdit(row.cell.row.original)}
            >
              <i className='icon-[material-symbols-light--edit] fill-current duration-300 ease-in-out  text-white' />
            </button>
          )
        }

        {
          // Only show the delete button if the onDelete function is provided
          onDelete && (
            <button
              className='flex justify-center items-center w-8 h-8 rounded-md bg-danger hover:bg-opacity-70' title='Delete'
              onClick={() => onDelete(row.cell.row.original.id)}
            >
              <i className='icon-[material-symbols-light--delete] fill-current duration-300 ease-in-out text-white' />
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
    <section className='pt-0 packages_table table-responsive'>
      {/* Start of Search and Entries per page */}
      <div className=''>
        <div className='flex items-center font-medium'>
          <select
            className='bg-transparent pl-2'
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <p className='pl-2 text-black dark:text-white duration-300 ease-linear'>Entries Per Page</p>
        </div>
      </div>
      {/* End of Search and Entries per page */}

      {/* Start Table */}
      <table role='table' className='table-style3 table at-savesearch min-w-[700px]'>
        <thead className='t-head'>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr scope='row' key={headerGroup.id}>
                {
                  headerGroup.headers.map(header => {
                    return !header.column.columnDef.hidden
                      ? (
                        <th
                          role='columnheader'
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          className='cursor-pointer pt-9 pl-8 pr-2.5 pb-6 select-none'
                          colSpan='1'
                        >
                          <div className='flex items-center'>
                            <span>{header.column.columnDef.header}</span>
                            {/* Show the sorting icon */}
                            <div className='ml-2 inline-flex flex-col space-y-[2px]'>
                              <span className='inline-block'>
                                <svg className={`fill-current ${header.column.getIsSorted() === 'asc' ? 'text-white' : ''}`} width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 0L0 5H10L5 0Z' fill='' /></svg>
                              </span>
                              <span className='inline-block'>
                                <svg className={`fill-current ${header.column.getIsSorted() === 'desc' ? 'text-white' : ''}`} width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z' fill='' /></svg>
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
        <tbody className='t-body'>
          {!showData && (
            <tr role='row' className='border-b border-stroke dark:border-strokedark duration-300 ease-linear'>
              <td colSpan={columns.length} className='pl-8 py-5 pr-2 text-center'>
                No data found
              </td>
            </tr>
          )}
          {showData && table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return !cell.column.columnDef.hidden
                  ? (
                    <td
                      className='vam'
                      key={cell.id}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                    )
                  : null
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {/* End Table */}

      {/* Pagination Section */}
      <div className='flex justify-between border-t border-stroke px-8 pt-5 dark:border-strokedark min-w-[700px] duration-300 ease-linear'>
        <p className='font-medium'>
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
    </section>
  )
}

export default Table
