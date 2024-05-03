import PropTypes from 'prop-types'

const LoadingIcon = ({ className }) => {
  return (
    <i className={`animate-pulse text-gray-200 rounded-full dark:text-gray-700 ${className}`} />
  )
}

LoadingIcon.propTypes = {
  className: PropTypes.string,
  innerClasses: PropTypes.string
}

export default LoadingIcon
