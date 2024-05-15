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

export const basicUserInitialValues = (user) => {
  return {
    [avatar.name]: user?.avatar || '',
    [username.name]: user?.username || '',
    [email.name]: user?.email || '',
    [phone.name]: user?.phone || '',
    [firstName.name]: user?.firstName || '',
    [lastName.name]: user?.lastName || '',
    [mobilePhone.name]: user?.mobilePhone || '',
    [description.name]: user?.description || ''
  }
}
