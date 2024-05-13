import PropTypes from 'prop-types'
import { UserReviewPropTypes } from '../../../models/User.model'
import UserReviewsStatsSkeleton from './UserReviewStatsSkeleton'

const UserReviewsStats = ({ reviews, className, iconClassName, loading = false }) => {
  if (loading) return <UserReviewsStatsSkeleton />

  // Calcular la media de las calificaciones
  const totalReviews = reviews.length
  const averageRating =
    totalReviews > 0
      ? reviews.reduce((acc, review) => acc + review.reviewRate, 0) / totalReviews
      : 0

  return (
    <span className={`${className} text-dark dark:text-white `}>
      <i className={`fas fa-star !text-[#efcb0e] dark:!text-white fz13 ${iconClassName}`} />
      {'  '}
      {totalReviews > 0 ? `${averageRating.toFixed(1)} - ${totalReviews} Reviews` : 'No reviews'}
    </span>
  )
}

UserReviewsStats.propTypes = {
  reviews: PropTypes.arrayOf(UserReviewPropTypes).isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string
}

export default UserReviewsStats
