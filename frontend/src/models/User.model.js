import PropTypes from 'prop-types'

// PropType para el campo socials
const UserSocialsPropTypes = PropTypes.shape({
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string
})

const UserReviewPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string.isRequired,
  reviewRate: PropTypes.number.isRequired,
  reviewContent: PropTypes.string.isRequired,
  helpful: PropTypes.arrayOf(PropTypes.string),
  notHelpful: PropTypes.arrayOf(PropTypes.string),
  createdAt: PropTypes.string.isRequired,
  __v: PropTypes.number
})

// PropType para el esquema de usuario
const UserPropTypes = PropTypes.shape({
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mobilePhone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socials: UserSocialsPropTypes.isRequired,
  password: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(UserReviewPropTypes),
  favouriteRoomsIds: PropTypes.arrayOf(PropTypes.string),
  joinDate: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.object)
})

export { UserPropTypes, UserReviewPropTypes }
