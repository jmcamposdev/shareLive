import { Link } from 'react-router-dom'
import RoomDetailedSkeleton from './RoomDetailedSkeleton'

const RoomDetailed = ({ room, loading = false }) => {
  if (loading) return <RoomDetailedSkeleton />

  return (
    <div className='item'>
      <div className='listing-style1 listCustom listing-type flex-col md:flex-row'>
        <div className='list-thumb'>
          <img
            className='cover'
            src={room.images[0]}
            alt={room.title}
          />
          <div className='list-price'>{room.price}€ / <span>mo</span></div>
        </div>
        <div className='list-content flex flex-col'>
          <h6 className='list-title'>
            <Link href='/sigle-v2' className='hover:!text-orangePrimary'>{room.title}</Link>
          </h6>
          <p className='list-text'>
            <i className='fa-solid fa-location-dot pr-3' />
            {room.city !== room.state ? room.city : ''} {room.state}, {room.country}
          </p>
          <div className='list-meta d-flex align-items-center'>
            <a href='#' className='text-[#717171]'>
              <span className='flaticon-bed text-[#717171]' /> {room.bedrooms} bed
            </a>
            <a href='#' className='text-[#717171]'>
              <span className='flaticon-shower text-[#717171]' /> {room.bathrooms} bath
            </a>
            <a href='#' className='text-[#717171]'>
              <span className='flaticon-expand text-[#717171]' /> {room.squareMeters} sqft
            </a>
          </div>
          <p className='list-text2'>
            {room.excerpt ? room.excerpt : room.description?.substring(0, 100) + '...'}
          </p>
          <hr className='mt-auto mb-3 text-[#C5C6C7]' />
          <div className='flex justify-between'>
            <a href='/' className='ud-btn btn-thm !text-[12px] !px-4 !py-1'>
              Explore
              <i className='fal fa-arrow-right-long !text-[12px]' />
            </a>
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
