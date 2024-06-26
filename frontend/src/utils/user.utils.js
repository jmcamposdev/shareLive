import { ROLES } from '../constants/roles.constants'
import { getImageURL } from './image-util'

export const getAvatarImage = (userAvatar) => {
  if (!userAvatar) return getImageURL('users/defaultAvatar.jpg')

  return userAvatar !== '' ? userAvatar : getImageURL('users/defaultAvatar.jpg')
}

export const isAdministrator = (roles) => {
  return roles.some((role) => role.name === ROLES.SUPER_ADMIN || role.name === ROLES.ADMIN)
}
