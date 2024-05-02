import ReviewSkeleton from '../../Review/ReviewSkeleton'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const UserReviewsListSkeleton = () => {
  const reviews = Array.from({ length: 2 }, (_, index) => (
    <ReviewSkeleton key={index} />
  ))
  return (

    <>
      {reviews}
      <div className='md:w-full'>
        <div className='relative  pt30 pb20 w-full'>
          <LoadingSkeleton className='w-full h-[55px]' innerClasses='rounded-xl' />
        </div>
        <LoadingSkeleton className='w-full h-px' />
      </div>
    </>
  )
}

export default UserReviewsListSkeleton
