import { Link } from 'react-router-dom'
import RoomSimpleSkeleton from './RoomSimpleSkeleton'

const RoomSimple = ({ room, loading = false }) => {
  if (loading) return <RoomSimpleSkeleton />

  return (
    <div className='item'>
      <div className='listing-style1 mb-0'>
        <div className='list-thumb'>
          <img
            className='cover'
            src={room.images[0]}
            alt={room.title}
          />
          <div className='list-price'>
            <i className='fa-light fa-camera pr-3' />
            {room.images.length}
          </div>
        </div>
        <div className='list-content'>
          <h6 className='list-title'>
            <Link href='/sigle-v2' className='hover:!text-orangePrimary'>{room.title}</Link>
          </h6>
          <h6 className='list-title'>
            {room.price}€ / <span className='font-normal'>month</span>
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
        </div>
      </div>
    </div>
  )
}

export default RoomSimple
