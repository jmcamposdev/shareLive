import LoadingImg from '../../Loading/LoadingImg'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const RoomSmall = () => {
  return (
    <div className='h-fit rounded-xl w-full sm:w-[calc((100%-(12px))/2)] xl:w-[calc((100%-(12px*2))/3)] 2xl:w-[calc((100%-(12px*3))/4)]  bg-white dark:bg-midnight overflow-hidden border border-[#ddddddd] dark:border-borderColor/20'>
      <a style={{ aspectRatio: '16/9' }} className='block w-full group overflow-hidden relative'>
        <div className='bg-white/80 absolute px-3 py-[3px] z-20 font-medium text-[15px] rounded-md bg-white/80 dark:bg-midnight/80 dark:text-white left-5 bottom-5'>112€ <span className='font-light'>/</span> mo</div>
        <LoadingImg className='w-full h-full' />
      </a>
      <div className='p-[1.2rem]'>
        <a><h6 style={{ transition: 'all 400ms ease' }} className='list-title dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary min-h-[46px] line-clamp-2'>Título de la habitacion</h6></a>
        <p className='list-text text-[#717171] mb-[10px] line-clamp-1'>Granada, españa</p>
        <div className='flex'>
          <p style={{ transition: 'all 400ms ease' }} className='mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-bed mr-1.5' /> 1</span> bed
          </p>
          <p style={{ transition: 'all 400ms ease' }} className='mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-shower mr-1.5' />1</span> bath
          </p>
          <p style={{ transition: 'all 400ms ease' }} className='mr-[1.2rem] dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary mb-0 flex justify-center items-center flex-wrap gap-x-1'>
            <span><span className='flaticon-expand mr-1.5' /> 13</span> sqft
          </p>
        </div>
        <div className='w-full bg-[#ddd] dark:bg-borderColor/20 h-[1px] my-3' />
        <div className='w-full flex items-center justify-center gap-[7%] h-fit py-1'>
          <LoadingSkeleton className='w-10 h-10' innerClasses='rounded-md' />
          <LoadingSkeleton className='w-10 h-10' innerClasses='rounded-md' />
          <LoadingSkeleton className='w-10 h-10' innerClasses='rounded-md' />
        </div>
      </div>

    </div>
  )
}

export default RoomSmall
