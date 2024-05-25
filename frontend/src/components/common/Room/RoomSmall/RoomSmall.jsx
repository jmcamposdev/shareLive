import ImgFallbackRoom from '../../FallbackImgs/ImgFallbackRoom/ImgFallbackRoom'
import { Link } from 'react-router-dom'

const RoomSmall = ({ room, onDelete, onEdit }) => {
  console.log(room)
  return (
    <div className='h-fit rounded-xl w-full sm:w-[calc((100%-(12px))/2)] xl:w-[calc((100%-(12px*2))/3)] 2xl:w-[calc((100%-(12px*3))/4)]  bg-white dark:bg-midnight overflow-hidden border border-[#ddddddd] dark:border-borderColor/20'>
      <Link to={`/rooms/${room._id}`} style={{ aspectRatio: '16/9' }} className='block w-full group overflow-hidden relative'>
        <div className='bg-white/80 absolute px-3 py-[3px] z-20 font-medium text-[15px] rounded-md bg-white/80 dark:bg-midnight/80 dark:text-white left-5 bottom-5'>{room.price}€ <span className='font-light'>/</span> mo</div>
        <ImgFallbackRoom style={{ transition: 'all 400ms ease' }} src='sad' alt={room.title} className='w-full h-full group-hover:scale-[1.20] group-hover:rotate-6' />
      </Link>
      <div className='p-[1.2rem]'>
        <Link to={`/rooms/${room._id}`}><h6 style={{ transition: 'all 400ms ease' }} className='list-title dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary min-h-[46px] line-clamp-2'>{room.title}</h6></Link>
        <p className='list-text text-[#717171] mb-[10px] line-clamp-1'>{room.city !== room.state ? `${room.city},` : ''} {room.state}, {room.country}</p>
        <div className='flex'>
          <p style={{ transition: 'all 400ms ease' }} className='mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-bed mr-1.5' /> {room.bedrooms}</span> {room.bedrooms > 1 ? 'beds' : 'bed'}
          </p>
          <p style={{ transition: 'all 400ms ease' }} className='mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-shower mr-1.5' /> {room.bathrooms}</span> {room.bathrooms > 1 ? 'baths' : 'bath'}
          </p>
          <p style={{ transition: 'all 400ms ease' }} className='mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-expand mr-1.5' /> {room.squareMeters}</span> sqft
          </p>
        </div>
        <div className='w-full bg-[#ddd] dark:bg-borderColor/20 h-[1px] my-3' />
        <div className='w-full flex items-center justify-center gap-[7%] h-fit py-1'>
          <Link to={`/rooms/${room._id}`} className=' rounded-lg w-10 h-10 bg-yellow-500 dark:bg-yellow-600/80 hover:bg-yellow-600 dark:hover:bg-yellow-700/80 flex items-center justify-center'>
            <span className='text-white rounded-lg text-lg flaticon-fullscreen h-[20px]' />
          </Link>
          {onDelete && <button className='fa-trash-can fa-light w-10 h-10 block bg-red-600 dark:bg-red-600/70 dark:hover:bg-red-600/40 hover:bg-[#c72626] rounded-lg text-lg text-white' />}
          {onEdit && <button className='fa-pen fa-light w-10 h-10 block bg-orangePrimary dark:bg-orangePrimary/70 dark:hover:bg-[#d96351]/40 hover:bg-[#d96351] text-white rounded-lg text-lg' />}
        </div>
      </div>

    </div>
  )
}

export default RoomSmall
