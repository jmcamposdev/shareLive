import ImgFallbackRoom from '../../FallbackImgs/ImgFallbackRoom/ImgFallbackRoom'
import { Link } from 'react-router-dom'

const RoomSmall = ({ room, onDelete, onEdit }) => {
  return (
    <div className='flex flex-col h-auto rounded-xl w-full sm:w-[calc((100%-(24px))/2)] xl:w-[calc((100%-(24px*2))/3)] 2xl:w-[calc((100%-(24px*3))/4)]  bg-white dark:bg-midnight overflow-hidden border border-[#ddddddd] dark:border-borderColor/20'>
      <div style={{ aspectRatio: '16/9' }} className='block w-full group overflow-hidden relative'>
        <div className='z-20  flex items-center justify-center gap-[5px] h-fit absolute w-fit right-2.5 top-2.5'>
          {onDelete && <button onClick={() => onDelete(room._id)} className='fa-trash-can fa-light w-10 h-10 lg:w-8 lg:h-8 block  rounded-lg text-base lg:text-sm text-dark dark:text-white bg-white/80 dark:bg-midnight/80 group-hover:scale-105  hover:text-red-500 dark:hover:text-red-500' />}
          {onEdit && <button onClick={() => onEdit(room._id)} className='fa-pen fa-light w-10 h-10 lg:w-8 lg:h-8 block group-hover:scale-105 dark:text-white bg-white/80 dark:bg-midnight/80 rounded-lg text-base lg:text-sm hover:text-orangePrimary dark:hover:text-orangePrimary' />}
        </div>
        <div className='bg-white/80 absolute px-3 py-[3px] z-20 font-medium text-[15px] rounded-md bg-white/80 dark:bg-midnight/80 dark:text-white left-5 bottom-5'>{room.price}€ <span className='font-light'>/</span> mo</div>
        <ImgFallbackRoom src={room.images[0]} alt={room.title} className='transition-all duration-1000 ease w-full h-full group-hover:scale-[1.20] group-hover:rotate-6' />
      </div>
      <Link className='mb-auto px-5 pt-5 transition-all duration-500 ease' to={`/rooms/${room._id}`}><h6 className='list-title dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary line-clamp-2'>{room.title}</h6></Link>
      <div className='p-[1.2rem] pt-0'>
        <p className='list-text text-[#717171] mb-[10px] line-clamp-1'>{room.city !== room.state ? `${room.city},` : ''} {room.state}, {room.country}</p>
        <div className='w-full bg-[#ddd]/50 dark:bg-borderColor/20 h-[1px] my-2' />
        <div className='flex'>
          <p className='transition-all duration-500 ease mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-bed mr-1.5' /> {room.bedrooms}</span> {room.bedrooms > 1 ? 'beds' : 'bed'}
          </p>
          <p className='transition-all duration-500 ease mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-shower mr-1.5' /> {room.bathrooms}</span> {room.bathrooms > 1 ? 'baths' : 'bath'}
          </p>
          <p className='transition-all duration-500 ease mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-expand mr-1.5' /> {room.squareMeters}</span> sqft
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoomSmall
