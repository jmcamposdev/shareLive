import * as Yup from 'yup'
import basicUserFormModel from './basicUserFormModel'
import { useAuth } from '../../../../../../context/AuthContext'

const {
  formField: {
    avatar,
    username,
    email,
    phone,
    firstName,
    lastName,
    mobilePhone,
    description,
    isAdministrator
  }
} = basicUserFormModel

export default (userToEdit) => {
  const { user } = useAuth()
  const isSameUser = user._id === userToEdit._id

  const validationSchema = Yup.object().shape({
    [avatar.name]: Yup.mixed().required(`${avatar.requiredErrorMsg}`),
    [username.name]: Yup.string().required(`${username.requiredErrorMsg}`),
    [email.name]: Yup.string().email().required(`${email.requiredErrorMsg}`),
    [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [mobilePhone.name]: Yup.string().required(`${mobilePhone.requiredErrorMsg}`),
    [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
    // Add the isAdministrator field only if the user is not the same as the user being edited
    ...(isSameUser
      ? {}
      : {
          [isAdministrator.name]: Yup.boolean().required(`${isAdministrator.requiredErrorMsg}`)
        })
  })

  return validationSchema
}
