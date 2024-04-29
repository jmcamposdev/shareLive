import { getImageURL } from './image-util'

export const getAvatarImage = (userAvatar) => {
  return userAvatar !== '' ? userAvatar : getImageURL('users/defaultAvatar.jpg')
}
