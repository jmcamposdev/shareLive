import basicUserFormModel from '../../../../components/common/Dashboard/DshUserForm/DshBasicUserForm/FormModel/basicUserFormModel'
import socialUserFormModel from '../../../../components/common/Dashboard/DshUserForm/DshSocialUserForm/FormModel/socialUserFormModel'

const createUserFormModel = {
  ...basicUserFormModel.formField,
  ...socialUserFormModel.formField,
  password: {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    requiredErrorMsg: 'Password is required'
  },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    type: 'password',
    requiredErrorMsg: 'Confirm Password is required'
  },
  isAdministrator: {
    name: 'isAdministrator',
    label: 'Administrator',
    type: 'checkbox',
    value: false,
    requiredErrorMsg: 'Administrator is required'
  }
}

export default createUserFormModel
