import * as Yup from 'yup'
import basicUserFormModel from './basicUserFormModel'

const {
  formField: {
    avatar,
    username,
    email,
    phone,
    firstName,
    lastName,
    mobilePhone,
    description
  }
} = basicUserFormModel

export default
Yup.object().shape({
  [avatar.name]: Yup.mixed().required(`${avatar.requiredErrorMsg}`),
  [username.name]: Yup.string().required(`${username.requiredErrorMsg}`),
  [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
  [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
  [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
  [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
  [mobilePhone.name]: Yup.string().required(`${mobilePhone.requiredErrorMsg}`),
  [description.name]: Yup.string().required(`${description.requiredErrorMsg}`)
})
