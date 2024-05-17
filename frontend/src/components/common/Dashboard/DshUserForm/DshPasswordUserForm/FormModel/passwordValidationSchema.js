import * as Yup from 'yup'
import passwordUserFormModel from './passwordUserFormModel'

const {
  formField: {
    currentPassword,
    newPassword,
    confirmNewPassword
  }
} = passwordUserFormModel

export default (isAdministrator) => {
  const baseSchema = {
    [newPassword.name]: Yup.string()
      .required(`${newPassword.requiredErrorMsg}`),
    [confirmNewPassword.name]: Yup.string()
      .oneOf([Yup.ref(newPassword.name), null], 'Passwords must match')
      .required(`${confirmNewPassword.requiredErrorMsg}`)
  }

  if (!isAdministrator) {
    baseSchema[currentPassword.name] = Yup.string()
      .required(`${currentPassword.requiredErrorMsg}`)
  }

  return Yup.object().shape(baseSchema)
}
