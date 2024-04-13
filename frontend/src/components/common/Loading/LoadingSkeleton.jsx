import PropTypes from 'prop-types'

const LoadingSkeleton = ({ className }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className='bg-gray-200 rounded-full dark:bg-gray-700 w-full h-full' />
    </div>
  )
}

LoadingSkeleton.propTypes = {
  className: PropTypes.string
}

export default LoadingSkeleton
