import * as Yup from 'yup'
import passwordUserFormModel from './passwordUserFormModel'

const {
  formField: {
    currentPassword,
    newPassword,
    confirmNewPassword
  }
} = passwordUserFormModel

export default Yup.object().shape({
  [currentPassword.name]: Yup.string()
    .required(`${currentPassword.requiredErrorMsg}`),
  [newPassword.name]: Yup.string()
    .required(`${newPassword.requiredErrorMsg}`),
  [confirmNewPassword.name]: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required(`${confirmNewPassword.requiredErrorMsg}`)
})
