import { useContext } from 'react'
import { PaginationContext } from '../../../context/PaginationContext'
import Review from '../../../components/common/Review/Review'
import LottiePlayer from '../../../components/common/LottiePlayer/LottiePlayer'
import NoReviews from '../../../assets/lotties/noReviews.json'

const DshReviewsPagination = ({ loading, onUpdateReview, onDeleteReview }) => {
  const { pageData, itemsPerPage } = useContext(PaginationContext)

  return (
    <div className='mb-16'>
      {pageData.length === 0 && !loading &&
        (
          <>
            <h3 className='w-full text-center dark:text-white'>
              No Reviews Here...
            </h3>
            <LottiePlayer lottie={NoReviews} />
          </>
        )}

      {loading
        ? (
          <>
            {
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <Review key={index} loading />
              ))
            }
          </>
          )
        : (
            pageData.map(review => <Review key={review._id} review={review} onUpdate={onUpdateReview} onDelete={onDeleteReview} />)
          )}
    </div>
  )
}

export default DshReviewsPagination
