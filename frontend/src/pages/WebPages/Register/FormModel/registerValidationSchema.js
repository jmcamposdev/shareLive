import * as Yup from 'yup'
import registerFormModel from './registerFormModel'

const {
  formField: {
    username,
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  }
} = registerFormModel

export default
Yup.object().shape({
  [username.name]: Yup.string().required(`${username.requiredErrorMsg}`),
  [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
  [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
  [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
  [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  [confirmPassword.name]: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(`${confirmPassword.requiredErrorMsg}`)
})
