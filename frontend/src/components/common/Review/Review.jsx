import PropTypes from 'prop-types'
import { formatDate } from '../../../utils/formatDate'
import { getAvatarImage } from '../../../utils/user.utils'
import { useAuth } from '../../../context/AuthContext'
import { useUserSingle } from '../../../context/UserSingleContext'
import { REVIEW_HELP_STATES } from '../SingleUser/UserReviews/UserReviews.constant'
import useAlertToast from '../../../hooks/useToast'

const Review = ({ review, className }) => {
  const { toast } = useAlertToast()
  const { user } = useAuth()
  const { updateReview } = useUserSingle()

  const isYourReview = review.ownerId === user?._id
  const isOwnerHelpful = review.helpful.includes(user?._id)
  const isOwnerNotHelpful = review.notHelpful.includes(user?._id)

  const handleStateClick = (state) => {
    // If the user is no registered, return
    if (!user) {
      toast.showWarning('You need to be logged in')
      return
    }

    // If the user has already marked the review as helpful, remove it
    if (isOwnerHelpful) {
      review.helpful = review.helpful.filter(id => id !== user._id)
    }
    // If the user has already marked the review as not helpful, remove it
    if (isOwnerNotHelpful) {
      review.notHelpful = review.notHelpful.filter(id => id !== user._id)
    }
    // If the user has not marked the review as helpful, add it
    if (!isOwnerHelpful && state === REVIEW_HELP_STATES.HELPFUL) {
      review.helpful.push(user._id)
    }
    // If the user has marked the review as not helpful, remove it
    if (!isOwnerNotHelpful && state === REVIEW_HELP_STATES.NOT_HELPFUL) {
      review.notHelpful.push(user._id)
    }
    // Save the review
    updateReview(review)
  }

  return (
    <div className={`${className !== undefined ? className : 'md:w-full'} ${isYourReview ? 'border-orangePrimaryLightHover' : ''}   p-5 pt-7 pb-7  border-[1px] dark:border-0 dark:bg-midnight my-4 bdrs12`}>
      <div className='mbp_first relative flex items-center justify-start mb30-sm'>
        <img alt='Avatar of user reviewing' loading='lazy' width='60' height='60' decoding='async' data-nimg='1' className='mr-3 text-transparent rounded-full' src={getAvatarImage(review.ownerAvatar)} />
        <div className='ml20'>
          <h6 className='mt-0 mb-0 dark:text-white'>
            {review.ownerName} {isYourReview && <span className='text-orangePrimary'>- You</span>}
          </h6>
          <div>
            <span className='fz14 text-gray-500'>
              {formatDate(review.createdAt)}
            </span>
            <div className='blog-single-review'>
              <ul className='mb0 ps-0'>
                {
                  Array.from({ length: review.reviewRate }).map((_, index) => (
                    <li key={index} className='list-inline-item me-0'>
                      <a href='#'>
                        <i className='fas fa-star review-color2 fz10 dark:text-white' />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className='text mt20 mb20 dark:text-white'>{review.reviewContent}</p>
      <div className='review_cansel_btns flex '>
        <button
          onClick={() => handleStateClick(REVIEW_HELP_STATES.HELPFUL)}
          className={`hover:dark:text-whit ${isOwnerHelpful ? '!text-orangePrimary' : ''}`}
        >
          <i className={`fas fa-thumbs-up text-gray-500 ${isOwnerHelpful ? '!text-orangePrimary' : ''}`} />
          Helpful ({review.helpful.length})
        </button>
        <button
          onClick={() => handleStateClick(REVIEW_HELP_STATES.NOT_HELPFUL)}
          className={`hover:dark:text-whit ${isOwnerNotHelpful ? '!text-orangePrimary' : ''}`}
        >
          <i className={`fas fa-thumbs-down text-gray-500 ${isOwnerNotHelpful ? '!text-orangePrimary' : ''}`} />
          Not helpful ({review.notHelpful.length})
        </button>
      </div>
    </div>
  )
}

// Prop types
Review.propTypes = {
  review: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default Review
