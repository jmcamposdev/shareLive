import LoadingSkeleton from '../Loading/LoadingSkeleton'

const UserReviewsStatsSkeleton = () => {
  return (
    <span className='text-dark dark:text-white'>
      <LoadingSkeleton className='w-28 h-6 pr-2' innerClasses='shadow-sm' />
    </span>
  )
}

export default UserReviewsStatsSkeleton
