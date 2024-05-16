import BoxDashboard from '../../BoxDashboard/BoxDashboard'
import UserService from '../../../../../services/UserService'
import useAlertToast from '../../../../../hooks/useToast'
import { useNavigate } from 'react-router-dom'
import { useDeleteDialog } from '../../../../../hooks/useDeleteDialog'

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

  const { DialogElement, handleOpen } = useDeleteDialog({
    onSave: onSubmit,
    title: 'Delete Account',
    message: 'Are you sure you want to delete your account? This action cannot be undone.',
    deleteElementName: 'Account'
  })

  return (
    <BoxDashboard>
      <h4 className='title fz17 mb30 dark:text-white'>Delete Account</h4>
      <div className='flex items-center justify-between'>
        <p className='fz14 dark:text-white m-0'>
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <div className='text-end'>
          {/* <FormikSubmitBtn label='Delete Account' isSubmitting={isSubmitting} isDanger /> */}
          <a type='button' className='ud-btn bg-red-500 before:bg-[#c93939] hover:bg-red-500 text-white' onClick={() => handleOpen()}>
            Delete Account
            <i className='fal fa-arrow-right-long' />
          </a>
        </div>
      </div>
      {DialogElement}
    </BoxDashboard>
  )
}

export default DshDeleteUserForm
