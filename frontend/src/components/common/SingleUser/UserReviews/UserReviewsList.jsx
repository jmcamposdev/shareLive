import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import Review from '../../Review/Review'
import { USER_REVIEWS_ORDER } from './UserReviews.constant'
import { useUserSingle } from '../../../../context/UserSingleContext'

const UserReviewsList = ({ userId, reviews, order, numtoDisplay = 4 }) => {
  const user = useAuthUser()
  const { updateReview } = useUserSingle()

  // Order reviews
  reviews = reviews.sort((a, b) => {
    switch (order) {
      case USER_REVIEWS_ORDER.NEWEST:
        return new Date(b.createdAt) - new Date(a.createdAt)
      case USER_REVIEWS_ORDER.OLDEST:
        return new Date(a.createdAt) - new Date(b.createdAt)
      case USER_REVIEWS_ORDER.HIGHEST_RATING:
        return b.reviewRate - a.reviewRate
      case USER_REVIEWS_ORDER.LOWEST_RATING:
        return a.reviewRate - b.reviewRate
      default:
        return new Date(b.createdAt) - new Date(a.createdAt)
    }
  })

  // Set the first review as the user review
  const yourReview = reviews.find(review => review.ownerId === user?._id)
  if (yourReview) {
    reviews = reviews.filter(review => review.ownerId !== user._id)
    reviews = [yourReview, ...reviews]
  }

  return (

    <>
      {reviews.slice(0, numtoDisplay).map(review => (
        <Review key={review._id} review={review} onUpdate={updateReview} />
      ))}
      {reviews.length > numtoDisplay && (
        <div className='md:w-full'>
          <div className='relative bdrb1 pt30 pb20 w-full'>
            <a href='#' className='ud-btn btn-white2 w-full'>
              Show all reviews
              <i className='fal fa-arrow-right-long' />
            </a>
          </div>
        </div>
      )}
    </>

  )
}

export default UserReviewsList
