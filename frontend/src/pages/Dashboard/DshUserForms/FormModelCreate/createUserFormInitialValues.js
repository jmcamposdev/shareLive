import createUserFormModel from './createUserFormModel'

const DEFAULT_AVATAR = import.meta.env.VITE_DEFAULT_AVATAR_URL

const {
  avatar,
  username,
  email,
  phone,
  firstName,
  lastName,
  mobilePhone,
  description,
  facebook,
  twitter,
  linkedin,
  instagram,
  password,
  confirmPassword,
  isAdministrator
} = createUserFormModel

export default {
  [avatar.name]: DEFAULT_AVATAR,
  [username.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [mobilePhone.name]: '',
  [description.name]: '',
  [facebook.name]: '',
  [twitter.name]: '',
  [linkedin.name]: '',
  [instagram.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [isAdministrator.name]: false
}
