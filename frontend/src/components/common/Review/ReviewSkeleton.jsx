import LoadingSkeleton from '../Loading/LoadingSkeleton'
import LoadingImg from '../Loading/LoadingImg'
import LoadingIcon from '../Loading/LoadingIcon'

const ReviewSkeleton = () => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <li key={index} className='list-inline-item me-0'>

      <LoadingIcon className='fas fa-star text-[12.5px]' />

    </li>
  ))
  return (
    <div className='  p-5 pt-7 pb-7  border-[1px] dark:border-0 dark:bg-midnight my-4 bdrs12 w-full'>
      <div className='mbp_first relative flex items-center justify-start mb30-sm'>
        <div className='mr-3 w-[60px] h-[60px] rounded-full overflow-hidden relative'>
          <div className='w-[120px] h-[120px] absolute top-[-30px] left-[-30px]'>
            <LoadingImg className='w-full h-full scale-50' />
          </div>
        </div>
        <div className='ml20'>
          <h6 className='mt-0 mb-2.5 dark:text-white'>
            <LoadingSkeleton className='h-4 w-36' />
          </h6>
          <div>
            <span className='fz14 text-gray-500'>
              <LoadingSkeleton className='h-4 w-24' />
            </span>
            <div className='blog-single-review'>
              <ul className='mb0 ps-0'>
                {stars}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className='text mt20 mb20 dark:text-white'>
        <LoadingSkeleton className='w-4/5 h-4' />
      </p>
      <div className='review_cansel_btns flex '>
        <button className='flex items-center'>
          <LoadingSkeleton className='w-28 h-4' innerClasses='border-sm' />
        </button>
        <button className='flex items-center'>
          <LoadingSkeleton className='w-28 h-4' innerClasses='border-sm' />
        </button>
      </div>
    </div>
  )
}

export default ReviewSkeleton
