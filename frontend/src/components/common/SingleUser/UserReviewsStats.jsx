const UserReviewsStats = ({ user, className, iconClassName }) => {
  // Calcular la media de las calificaciones
  const totalReviews = user.reviews.length
  const averageRating =
    totalReviews > 0
      ? user.reviews.reduce((acc, review) => acc + review.reviewRate, 0) / totalReviews
      : 0

  return (
    <span className={`${className} text-dark dark:text-white`}>
      <i className={`fas fa-star text-[#efcb0e] dark:text-white fz13 ${iconClassName}`} />
      {'  '}
      {averageRating.toFixed(1)} - {totalReviews} Reviews
    </span>
  )
}

export default UserReviewsStats
