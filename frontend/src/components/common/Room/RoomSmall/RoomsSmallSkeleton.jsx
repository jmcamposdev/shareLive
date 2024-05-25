import LoadingImg from '../../Loading/LoadingImg'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const RoomSmall = () => {
  return (
    <div className='h-fit rounded-xl w-full sm:w-[calc((100%-(12px))/2)] xl:w-[calc((100%-(12px*2))/3)] 2xl:w-[calc((100%-(12px*3))/4)]  bg-white dark:bg-midnight overflow-hidden border border-[#ddddddd] dark:border-borderColor/20'>
      <a style={{ aspectRatio: '16/9' }} className='block w-full group overflow-hidden relative'>
        <LoadingSkeleton className='w-20 h-8 absolute z-20 left-5 bottom-5' innerClasses='!rounded-md shadow-sm' />
        <LoadingImg className='w-full h-full !rounded-none' />
        <div className='absolute z-20 w-fit right-2.5 top-2.5 flex gap-[5px]'>
          <LoadingSkeleton className='w-10 h-10 lg:w-8 lg:h-8' innerClasses='rounded-md shadow-sm' />
          <LoadingSkeleton className='w-10 h-10 lg:w-8 lg:h-8' innerClasses='rounded-md shadow-sm' />
        </div>
      </a>
      <div className='p-[1.2rem]'>
        <LoadingSkeleton className='w-full h-[16px] mb-2' />
        <LoadingSkeleton className='w-4/5 h-[16px] mb-[20px]' />
        <LoadingSkeleton className='w-3/5 h-[14px] mb-4' />
        <LoadingSkeleton className='w-full h-[1px] my-2' innerClasses='rounded-none' />
        <div className='flex gap-5 mt-4'>
          <LoadingSkeleton className='w-14 h-5' />
          <LoadingSkeleton className='w-14 h-5' />
          <LoadingSkeleton className='w-14 h-5' />
        </div>
      </div>

    </div>
  )
}

export default RoomSmall
