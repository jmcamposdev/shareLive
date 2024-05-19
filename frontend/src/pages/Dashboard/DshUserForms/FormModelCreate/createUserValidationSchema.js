import * as Yup from 'yup'
import createUserFormModel from './createUserFormModel'

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

export default Yup.object().shape({
  [avatar.name]: Yup.mixed().required(`${avatar.requiredErrorMsg}`),
  [username.name]: Yup.string().required(`${username.requiredErrorMsg}`),
  [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
  [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
  [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
  [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
  [mobilePhone.name]: Yup.string().required(`${mobilePhone.requiredErrorMsg}`),
  [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
  [facebook.name]: Yup.string(),
  [twitter.name]: Yup.string(),
  [linkedin.name]: Yup.string(),
  [instagram.name]: Yup.string(),
  [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  [confirmPassword.name]: Yup.string().oneOf([Yup.ref(password.name)], 'Passwords must match'),
  [isAdministrator.name]: Yup.boolean()
})
