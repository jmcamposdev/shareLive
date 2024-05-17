import passwordUserFormModel from './passwordUserFormModel'

const {
  formField: {
    currentPassword,
    newPassword,
    confirmNewPassword
  }
} = passwordUserFormModel

export default (isAdministrator) => ({
  ...(isAdministrator ? {} : { [currentPassword.name]: '' }),
  [newPassword.name]: '',
  [confirmNewPassword.name]: ''
})
