import LoadingSkeleton from '../Loading/LoadingSkeleton'
import RowSkeleton from './RowSkeleton'

const RoomSimpleSkeleton = () => {
  return (
    <section className='pt-0 packages_table table-responsive dark:!bg-midnight'>
      {/* Start of Search and Entries per page */}
      <div className=''>
        <div className='flex items-center font-medium'>
          <LoadingSkeleton className='h-4 pl-2 w-36 mb-[15px]' />
        </div>
      </div>

      <table role='table' className='table-style3 table at-savesearch min-w-[700px]'>
        <thead className='t-head'>
          <tr scope='row'>
            <th role='columnheader' className='dark:bg-midnight cursor-pointer pt-9 pl-8 pr-2.5 pb-6 select-none' colSpan='1'>
              <div className='flex items-center'>
                <LoadingSkeleton className='h-[26px] w-[50px]' />
              </div>
            </th>
            <th role='columnheader' className='dark:bg-midnight cursor-pointer pt-9 pl-8 pr-2.5 pb-6 select-none' colSpan='1'>
              <div className='flex items-center'>
                <LoadingSkeleton className='h-[26px] w-[129px]' />
              </div>
            </th>
            <th role='columnheader' className='dark:bg-midnight cursor-pointer pt-9 pl-8 pr-2.5 pb-6 select-none' colSpan='1'>
              <div className='flex items-center'>
                <LoadingSkeleton className='h-[26px] w-[77px]' />
              </div>
            </th>
            <th role='columnheader' className='dark:bg-midnight cursor-pointer pt-9 pl-8 pr-2.5 pb-6 select-none' colSpan='1'>
              <div className='flex items-center'>
                <LoadingSkeleton className='h-[26px] w-[66px]' />
              </div>
            </th>
          </tr>
        </thead>
        <tbody className='t-body'>
          {
            Array.from({ length: 8 }, (_, index) => (
              <RowSkeleton key={index} />
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default RoomSimpleSkeleton
