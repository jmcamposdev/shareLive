import { Link } from 'react-router-dom'
import RoomDetailedSkeleton from './RoomDetailedSkeleton'
import RoomFavouriteIcon from '../RoomFavouriteIcon'

const RoomDetailed = ({ room, loading = false }) => {
  if (loading) return <RoomDetailedSkeleton />

  const linkUrl = `/rooms/${room._id}`

  return (
    <div className='item'>
      <div className='listing-style1 listCustom listing-type flex-col md:flex-row dark:bg-midnight'>
        <div className='list-thumb'>
          <Link to={linkUrl}>
            <img
              className='cover'
              src={room.images[0]}
              alt={room.title}
            />
          </Link>
          <div className='list-price dark:bg-midnight/80 dark:text-white !font-medium'>{room.price}€ <span className='font-light'>/</span> <span>mo</span></div>
        </div>
        <div className='list-content flex flex-col dark:bg-midnight'>
          <h6 className='list-title'>
            <Link
              to={linkUrl}
              className='hover:!text-orangePrimary dark:text-white'
            >
              {room.title}
            </Link>
          </h6>
          <p className='list-text'>
            <i className='fa-solid fa-location-dot pr-3' />
            {room.city !== room.state ? `${room.city},` : ''} {room.state}, {room.country}
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
          <p className='list-text2 dark:!text-white'>
            {room.excerpt ? room.excerpt : room.description?.substring(0, 100) + '...'}
          </p>
          <hr className='mt-auto mb-3 text-[#C5C6C7] dark:!bg-borderColor/20' />
          <div className='flex justify-between'>
            <Link
              to={linkUrl}
              className='ud-btn btn-thm !text-[12px] !px-4 !py-1'
            >
              Explore
              <i className='fal fa-arrow-right-long !text-[12px]' />
            </Link>
            <div className='list-meta2 icons d-flex align-items-center gap-1'>
              <a href='#' className='!bg-borderColor/30 hover:!bg-borderColor/50 dark:!bg-lightmidnight dark:hover:!bg-orangePrimary/10'><span className='flaticon-fullscreen dark:text-white' /></a>
              <RoomFavouriteIcon
                roomId={room._id}
                className='!bg-borderColor/30 hover:!bg-borderColor/50 dark:!bg-lightmidnight dark:hover:!bg-orangePrimary/10 rounded-md w-[35px] !h-[35px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetailed
