import { Form, Formik } from 'formik'
import BoxDashboard from '../../BoxDashboard/BoxDashboard'
import UserService from '../../../../../services/UserService'
import useAlertToast from '../../../../../hooks/useToast'
import { useNavigate } from 'react-router-dom'
import { useDialogoConfirmarCambiarV2 } from '../../../../../hooks/useDialogoConfirmarCambiarV2'

const DshDeleteUserForm = ({ user }) => {
  const { toast } = useAlertToast()
  const navigate = useNavigate()
  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    try {
      await UserService.deleteUser(user._id)
      navigate('/logout')
      toast.showSuccess('Account deleted successfully!')
    } catch (error) {
      toast.showError(error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  const { DialogoConfirmarCambiar, handleMostrarDialogo } = useDialogoConfirmarCambiarV2({
    onCambiar: () => { console.log('cambio') }
  })

  return (
    <BoxDashboard>
      <h4 className='title fz17 mb30 dark:text-white'>Delete Account</h4>
      <Formik
        initialValues={{}}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='flex items-center justify-between'>
              <p className='fz14 dark:text-white m-0'>
                Are you sure you want to delete your account? This action cannot be undone.
              </p>
              <div className='text-end'>
                {/* <FormikSubmitBtn label='Delete Account' isSubmitting={isSubmitting} isDanger /> */}
                <a type='button' className='ud-btn bg-red-500 before:bg-[#c93939] hover:bg-red-500' onClick={() => handleMostrarDialogo(false)}>
                  Delete Account
                  <i className='fal fa-arrow-right-long' />
                </a>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {DialogoConfirmarCambiar}
    </BoxDashboard>
  )
}

export default DshDeleteUserForm
