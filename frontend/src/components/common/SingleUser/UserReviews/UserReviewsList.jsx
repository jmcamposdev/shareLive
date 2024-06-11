import Review from '../../Review/Review'
import { USER_REVIEWS_ORDER } from './UserReviews.constant'
import { useUserSingle } from '../../../../context/UserSingleContext'
import { useAuth } from '../../../../context/AuthContext'
import { useRef, useState } from 'react'
import LottiePlayer from '../../../common/LottiePlayer/LottiePlayer'
import FirstOne from '../../../../assets/lotties/firstReview.json'

const UserReviewsList = ({ userId, reviews, order, numtoDisplay = 4 }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const titleRef = useRef(null)
  const { user } = useAuth()
  const { updateReview } = useUserSingle()

  const handleToggleExpand = () => {
    if (isExpanded && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        setIsExpanded(!isExpanded)
      }, 300)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

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
      <div ref={titleRef} />
      {reviews.length === 0 && (
        <><h6 className='fz17 w-full text-center'>This user has no reviews, be the first one ot leave one</h6><LottiePlayer lottie={FirstOne} /></>
      )}
      {reviews.slice(0, isExpanded ? reviews.length : numtoDisplay).map(review => (
        <Review key={review._id} review={review} onUpdate={updateReview} className='w-full' />
      ))}
      {reviews.length > numtoDisplay && (
        <div className='md:w-full'>
          <div className='relative bdrb1 pt30 pb20 w-full'>
            <a
              className='ud-btn btn-white2 w-full cursor-pointer'
              onClick={handleToggleExpand}
            >
              {isExpanded ? 'Show less' : 'Show all'} reviews
              <i className='fal fa-arrow-right-long' />
            </a>
          </div>
        </div>
      )}
    </>

  )
}

export default UserReviewsList
