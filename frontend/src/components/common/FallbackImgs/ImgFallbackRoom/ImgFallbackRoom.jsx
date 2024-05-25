import PropTypes from 'prop-types'
import DefaultRoomImg from '../../../../assets/img/rooms/defaultRoom.jpg'

const ImgFallbackRoom = ({ src, alt, className, style }) => {
  return (
    <img
      style={style}
      src={src}
      alt={alt}
      className={`object-cover object-center ${className}`}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = DefaultRoomImg
      }}
    />
  )
}

ImgFallbackRoom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ImgFallbackRoom
