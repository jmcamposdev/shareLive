import { Form, Formik } from 'formik'
import BoxDashboard from '../../BoxDashboard/BoxDashboard'
import passwordUserFormModel from './FormModel/passwordUserFormModel'
import passwordUserInitialValues from './FormModel/passwordUserInitialValues'
import passwordValidationSchema from './FormModel/passwordValidationSchema'
import FormikControl from '../../../Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../../../Formik/Buttons/FormikSubmitBtn'
import UserService from '../../../../../services/UserService'
import useAlertToast from '../../../../../hooks/useToast'

const {
  formId, formField: { currentPassword, newPassword, confirmNewPassword }
} = passwordUserFormModel

const DshPasswordUserForm = ({ user }) => {
  const { toast } = useAlertToast()

  const onSubmit = async (values, actions) => {
    const { currentPassword, newPassword } = values
    try {
      await UserService.changePassword(user._id, currentPassword, newPassword)
      toast.showSuccess('Password changed successfully!')
      actions.resetForm()
    } catch (error) {
      toast.showError(error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <BoxDashboard>
      <h4 className='title fz17 mb30 dark:text-white'>Change Password</h4>
      <Formik
        initialValues={passwordUserInitialValues}
        validationSchema={passwordValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form id={formId} className='flex flex-col gap-5'>
            <FormikControl
              control='input'
              type='password'
              id={currentPassword.name}
              name={currentPassword.name}
              label={currentPassword.label}
              placeholder={currentPassword.placeholder}
            />
            <div className='flex gap-5 sm:flex-row flex-col'>
              <FormikControl
                control='input'
                type='password'
                id={newPassword.name}
                name={newPassword.name}
                label={newPassword.label}
                placeholder={newPassword.placeholder}
              />
              <FormikControl
                control='input'
                type='password'
                id={confirmNewPassword.name}
                name={confirmNewPassword.name}
                label={confirmNewPassword.label}
                placeholder={confirmNewPassword.placeholder}
              />
            </div>
            <div className='text-end'>
              <FormikSubmitBtn label='Change Password' isSubmitting={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </BoxDashboard>
  )
}

export default DshPasswordUserForm
