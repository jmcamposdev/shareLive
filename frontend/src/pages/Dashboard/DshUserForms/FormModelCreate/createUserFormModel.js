import basicUserFormModel from '../../../../components/common/Dashboard/DshUserForm/DshBasicUserForm/FormModel/basicUserFormModel'
import socialUserFormModel from '../../../../components/common/Dashboard/DshUserForm/DshSocialUserForm/FormModel/socialUserFormModel'

const createUserFormModel = {
  ...basicUserFormModel.formField,
  ...socialUserFormModel.formField,
  password: {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password'
  },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    type: 'password'
  },
  isAdministrator: {
    name: 'isAdministrator',
    label: 'Administrator',
    type: 'checkbox',
    value: false
  }
}

export default createUserFormModel
