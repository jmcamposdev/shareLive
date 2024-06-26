import { Link } from 'react-router-dom'
import RoomSimpleSkeleton from './RoomSimpleSkeleton'

const RoomSimple = ({ room, loading = false }) => {
  if (loading) return <RoomSimpleSkeleton />

  const linkUrl = `/rooms/${room._id}`

  return (
    <div className='item rounded-xl h-full'>
      <div className='listing-style1 mb-0 dark:bg-midnight'>
        <div className='list-thumb h-[50%]'>
          <Link to={linkUrl}>
            <img
              className='cover w-full h-full object-cover object-center'
              src={room.images[0]}
              alt={room.title}
            />
          </Link>
          <div className='list-price dark:bg-midnight/80'>
            <i className='fa-light fa-camera pr-3 dark:text-white' />
            <span className='dark:text-white'>{room.images.length}</span>
          </div>
        </div>
        <div className='list-content dark:bg-midnight h-fit flex flex-col'>
          <h6 className='list-title line-clamp-1'>
            <Link
              to={linkUrl}
              className='hover:!text-orangePrimary dark:text-white'
            >
              {room.title}
            </Link>
          </h6>
          <h6 className='list-title dark:text-white'>
            {room.price}€ / <span className='font-normal'>month</span>
          </h6>
          <p className='list-text'>
            <i className='fa-solid fa-location-dot pr-3' />
            {room.city !== room.state ? room.city : ''} {room.state}, {room.country}
          </p>
          <div className='list-meta d-flex align-items-center !pt-3 border-t border-[#ddd] dark:border-borderColor/20'>
            <a className='text-[#717171]'>
              <span className='flaticon-bed text-[#717171]' /> {room.bedrooms} bed
            </a>
            <a className='text-[#717171]'>
              <span className='flaticon-shower text-[#717171]' /> {room.bathrooms} bath
            </a>
            <a className='text-[#717171]'>
              <span className='flaticon-expand text-[#717171]' /> {room.squareMeters} sqft
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomSimple
