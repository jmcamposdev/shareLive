import passwordUserFormModel from './passwordUserFormModel'

const {
  formField: {
    currentPassword,
    newPassword,
    confirmNewPassword
  }
} = passwordUserFormModel

export default {
  [currentPassword.name]: '',
  [newPassword.name]: '',
  [confirmNewPassword.name]: ''
}
