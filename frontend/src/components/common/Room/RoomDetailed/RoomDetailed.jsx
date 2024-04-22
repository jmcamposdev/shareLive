import { Link } from 'react-router-dom'
import RoomDetailedSkeleton from './RoomDetailedSkeleton'

const RoomDetailed = ({ room, loading = false }) => {
  if (loading) return <RoomDetailedSkeleton />

  const linkUrl = `/rooms/${room._id}`

  return (
    <div className='item'>
      <div className='listing-style1 listCustom listing-type flex-col md:flex-row'>
        <div className='list-thumb'>
          <Link to={linkUrl}>
            <img
              className='cover'
              src={room.images[0]}
              alt={room.title}
            />
          </Link>
          <div className='list-price'>{room.price}€ / <span>mo</span></div>
        </div>
        <div className='list-content flex flex-col'>
          <h6 className='list-title'>
            <Link
              to={linkUrl}
              className='hover:!text-orangePrimary'
            >
              {room.title}
            </Link>
          </h6>
          <p className='list-text'>
            <i className='fa-solid fa-location-dot pr-3' />
            {room.city !== room.state ? room.city : ''} {room.state}, {room.country}
          </p>
          <div className='list-meta d-flex align-items-center'>
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
          <p className='list-text2'>
            {room.excerpt ? room.excerpt : room.description?.substring(0, 100) + '...'}
          </p>
          <hr className='mt-auto mb-3 text-[#C5C6C7]' />
          <div className='flex justify-between'>
            <Link
              to={linkUrl}
              className='ud-btn btn-thm !text-[12px] !px-4 !py-1'
            >
              Explore
              <i className='fal fa-arrow-right-long !text-[12px]' />
            </Link>
            <div className='list-meta2 icons d-flex align-items-center'>
              <a href='#'><span className='flaticon-fullscreen' /></a>
              <a href='#'><span className='flaticon-like' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailed
