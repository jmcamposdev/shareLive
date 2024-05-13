import { useContext } from 'react'
import { PaginationContext } from '../../../context/PaginationContext'
import Review from '../../../components/common/Review/Review'

const DshReviewsPagination = ({ loading, onUpdateReview, onDeleteReview }) => {
  const { pageData, itemsPerPage } = useContext(PaginationContext)

  return (
    <div className='mb-16'>
      {pageData.length === 0 && !loading &&
        (
          <div className='text-center my-24'>
            <h3>
              You don't write any review yet
            </h3>
          </div>
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
