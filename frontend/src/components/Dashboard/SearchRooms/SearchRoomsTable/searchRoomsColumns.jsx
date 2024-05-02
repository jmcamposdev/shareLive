import { formatDate } from '../../../../utils/formatDate'

const searchRoomsColumns = [
  {
    header: 'Title',
    cell: (row) => {
      const room = row.cell.row.original
      return (
        <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight'>
          <div className='list-thumb'>
            {/* src={room.images[0]} */}
            <img className='w-full h-full' src={room.images[0]} alt='property' />
          </div>
          <div className='list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4'>
            <div className='h6 list-title'>
              <a href='/single-v1/1' className='dark:text-white dark:hover:!text-orangePrimary'>{room.title}</a>
            </div>
            <p className='list-text mb-0'>{room.city !== room.state ? room.city : ''}, {room.state}, {room.country}</p>
            <div className='list-price dark:bg-midnight'>
              <a href='#' className='dark:text-white font-normal'>{room.price}€ /<span className='font-normal'> month</span></a>
            </div>
          </div>
        </div>
      )
    }
  },
  {
    header: 'Date Published',
    accessorFn: (row) => formatDate(row.createdAt)
  },
  {
    header: 'Owner',
    accessorFn: (row) => row.user.name
  },
  {
    header: 'Title Hidden',
    accessorKey: 'title',
    hidden: true
  },
  {
    header: 'Location Hidden',
    accessorFn: (row) => `${row.city !== row.state ? row.city : ''} ${row.state}, ${row.country}`,
    hidden: true
  },
  {
    header: 'Price Hidden',
    accessorKey: 'price',
    hidden: true
  }
]

export default searchRoomsColumns
