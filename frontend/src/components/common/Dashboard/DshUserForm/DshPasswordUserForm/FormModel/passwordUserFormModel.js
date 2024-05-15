export default {
  formId: 'passwordUserForm',
  formField: {
    currentPassword: {
      name: 'currentPassword',
      label: 'Current Password',
      placeholder: 'Enter your current password',
      requiredErrorMsg: 'Current Password is required'
    },
    newPassword: {
      name: 'newPassword',
      label: 'New Password',
      placeholder: 'Enter your new password',
      requiredErrorMsg: 'New Password is required'
    },
    confirmNewPassword: {
      name: 'confirmNewPassword',
      label: 'Confirm New Password',
      placeholder: 'Confirm your new password',
      requiredErrorMsg: 'Confirm New Password is required'
    }
  }
}
