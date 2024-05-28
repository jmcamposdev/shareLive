import LoadingSkeleton from '../Loading/LoadingSkeleton'
import RowSkeleton from './RowSkeleton'

const RoomSimpleSkeleton = () => {
  const rowSkeleton = Array.from({ length: 10 }, (_, index) => <RowSkeleton key={index} />)
  return (
    <section className='pt-0 packages_table table-responsive 2xl:bg-white 2xl:dark:bg-midnight 2xl:p-5 rounded-xl'>
      {/* Start of Search and Entries per page */}
      <div className=''>
        <div className='flex items-center font-medium !mb-7'>
          <LoadingSkeleton className='pl-2 w-36 h-4' />
        </div>
      </div>
      {/* End of Search and Entries per page */}

      {/* Start Table */}
      <table role='table' className='table-style3 at-savesearch min-w-[0px] !block'>
        <thead style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} className='t-head fixed 2xl:static w-[100dvw] lg:w-[calc(100dvw-300px)] 2xl:w-full z-40 top-[140px] lg:top-[179px] right-0 block bg-white dark:bg-midnight rounded-b-3xl 2xl:rounded-none overflow-hidden'>
          <tr className='w-full flex bg-white dark:bg-midnight overflow-hidden' scope='row'>

            <th
              role='columnheader'
              className='pt-9 pl-8 pr-2.5 pb-6 select-none w-1/4 2xl:w-[40%] dark:bg-midnight'
              colSpan='1'
            >
              <div className='flex items-center justify-center'>
                <LoadingSkeleton className=' w-24 h-5' />
              </div>
            </th>
            <th
              role='columnheader'
              className='pt-9 pl-8 pr-2.5 pb-6 select-none w-1/4 2xl:w-[20%] dark:bg-midnight'
              colSpan='1'
            >
              <div className='flex items-center justify-center'>
                <LoadingSkeleton className=' w-24 h-5' />
              </div>
            </th>
            <th
              role='columnheader'
              className='pt-9 pl-8 pr-2.5 pb-6 select-none w-1/4 2xl:w-[20%] dark:bg-midnight'
              colSpan='1'
            >
              <div className='flex items-center justify-center'>
                <LoadingSkeleton className=' w-24 h-5' />
              </div>
            </th>
            <th
              role='columnheader'
              className='pt-9 pl-8 pr-2.5 pb-6 select-none w-1/4 2xl:w-[20%] dark:bg-midnight'
              colSpan='1'
            >
              <div className='flex items-center justify-center'>
                <LoadingSkeleton className=' w-24 h-5' />
              </div>
            </th>

          </tr>
        </thead>
        <tbody className='t-body flex flex-col gap-10 2xl:gap-0 w-full'>

          {rowSkeleton}

        </tbody>
      </table>
      {/* End Table */}

      {/* Pagination Section */}
      <div className='flex justify-between border-t border-stroke px-8 pt-5 dark:border-strokedark min-w-[0px] duration-300 ease-linear border-none'>
        <p className='font-medium dark:text-white' />
        <div className='flex'>
          <button
            className='flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-whiter'

          >
            <span className='icon-[material-symbols-light--keyboard-double-arrow-left-rounded]' style={{ fontSize: '30px' }} />
          </button>
          <button
            className='flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-white '
          >
            <span className='icon-[iconamoon--arrow-left-2-thin]' style={{ fontSize: '30px' }} />
          </button>
          <button
            className='flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-white '
          >
            <span className='icon-[iconamoon--arrow-right-2-thin]' style={{ fontSize: '30px' }} />
          </button>
          <button
            className='flex justify-center items-center rounded-md enabled:hover:bg-primary enabled:hover:text-white'
          >
            <span className='icon-[material-symbols-light--keyboard-double-arrow-right-rounded]' style={{ fontSize: '30px' }} />
          </button>
        </div>
      </div>
    </section>
  )
}

/*
  Array.from({ length: 8 }, (_, index) => (
    <RowSkeleton key={index} />
  ))
*/

export default RoomSimpleSkeleton
