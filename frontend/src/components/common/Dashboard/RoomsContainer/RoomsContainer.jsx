import PropTypes from 'prop-types'

const RoomsContainer = ({ children, classname }) => {
  return (
    <div className={`w-full flex-wrap flex gap-5 ${classname ?? ''}`}>
      {children}
    </div>
  )
}

RoomsContainer.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string
}

export default RoomsContainer
