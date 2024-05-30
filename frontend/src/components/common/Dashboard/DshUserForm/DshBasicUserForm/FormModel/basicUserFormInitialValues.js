import { ROLES } from '../../../../../../constants/roles.constants'
import { useAuth } from '../../../../../../context/AuthContext'
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
    description,
    isAdministrator
  }
} = basicUserFormModel

export const basicUserInitialValues = (userToEdit) => {
  const { user } = useAuth()
  const isSameUser = user._id === userToEdit._id
  const initialValues = {
    [avatar.name]: userToEdit?.avatar || '',
    [username.name]: userToEdit?.username || '',
    [email.name]: userToEdit?.email || '',
    [phone.name]: userToEdit?.phone || '',
    [firstName.name]: userToEdit?.firstName || '',
    [lastName.name]: userToEdit?.lastName || '',
    [mobilePhone.name]: userToEdit?.mobilePhone || '',
    [description.name]: userToEdit?.description || ''
  }

  if (!isSameUser) {
    const { roles } = userToEdit
    const isUserAdmin = roles.some((role) => role.name === ROLES.SUPER_ADMIN || role.name === ROLES.ADMIN)
    initialValues[isAdministrator.name] = isUserAdmin
  }

  return initialValues
}
