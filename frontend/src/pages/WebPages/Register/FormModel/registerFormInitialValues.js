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

export const registerInitialValues = {
  [username.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirmPassword.name]: ''
}
