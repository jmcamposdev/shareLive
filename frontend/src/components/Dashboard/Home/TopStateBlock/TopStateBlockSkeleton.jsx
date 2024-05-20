import LoadingIcon from '../../../common/Loading/LoadingIcon'
import LoadingSkeleton from '../../../common/Loading/LoadingSkeleton'

const TopStateBlockSkeleton = () => {
  return (
    <div className='flex flex-wrap '>
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className='xl:w-1/4 lg:w-1/2 w-full pr-4 pl-4 col-xxl-3'>
          <div className='flex justify-between statistics_funfact dark:bg-midnight'>
            <div className='details flex flex-col gap-3'>
              <div className='text fz25 dark:text-white'>
                <LoadingSkeleton className='h-4 w-28' />
              </div>
              <LoadingSkeleton className='h-12 w-28' />
            </div>
            <div className='icon text-center dark:bg-lightmidnight flex justify-center items-center'>
              <LoadingIcon className='fas fa-circle text-4xl' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopStateBlockSkeleton
