import { Link } from 'react-router-dom'
import { formatDate } from '../../../../utils/formatDate'
import DefaultRoom from '../../../../assets/img/rooms/defaultRoom.jpg'

const searchRoomsColumns = [
  {
    header: 'Title',
    cell: (row) => {
      const room = row.cell.row.original
      return (
        <>
          <div className='2xl:hidden pt-3'>
            <div className='w-full flex justify-between h-fit flex-wrap-reverse !mb-7 gap-6'>

              <Link to={`/rooms/${room._id}`} className='group overflow-hidden h-[140px] aspect-square rounded-md shrink-0 block bg-cover mb-[20px] !order-last md:!order-first'>
                <img alt={`${room.title} Room`} src={room.images[0] || DefaultRoom} className='transition-all duration-400 ease group-hover:scale-110 h-full w-full block object-cover' />
              </Link>

              <div className='grow shrink flex flex-col justify-center gap-3 mb-4 order-last sm:order-5'>
                <Link to={`/rooms/${room._id}`} className='dark:text-white font-bold text-lg m-0 dark:hover:text-orangePrimary'>
                  {room.title}
                </Link>
                <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center'>
                  <span className='font-normal text-base text-[#717171]'>{room.city !== room.state ? `${room.city},` : ''} {room.state}, {room.country}</span>
                </p>
              </div>

            </div>

            <div className='w-full flex flex-col  gap-4'>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-[#717171] '>Published:</span>
                <span className='font-normal text-base'>{formatDate(room.createdAt)}</span>
              </p>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-[#717171] '>Owner:</span>
                <span className='font-normal text-base'>{room.user.name}</span>
              </p>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-[#717171] '>Price:</span>
                <span className='font-normal text-base'>{room.price}€ /<span className='font-normal'> month</span></span>
              </p>
            </div>
          </div>
          <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight hidden 2xl:block'>
            <div className='list-thumb !h-[110px]'>
              <img
                className='w-full h-full object-cover'
                src={room.images[0] || DefaultRoom} alt={`${room.title} Room`}
              />
            </div>
            <div className='list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4'>
              <div className='h6 list-title'>
                <Link
                  to={`/rooms/${room._id}`}
                  className='dark:text-white dark:hover:!text-orangePrimary'
                >
                  {room.title}
                </Link>
              </div>
              <p className='list-text mb-0'>{room.city !== room.state ? `${room.city},` : ''} {room.state}, {room.country}</p>
              <div className='list-price dark:bg-midnight'>
                <p className='dark:text-white font-normal'>{room.price}€ /<span className='font-normal'> month</span></p>
              </div>
            </div>
          </div>
        </>
      )
    }
  },
  {
    header: 'Published',
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
