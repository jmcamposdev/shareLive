import { useParams } from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import DshUserForm from '../../../components/common/Dashboard/DshUserForm/DshUserForm'
import UserService from '../../../services/UserService'
import useAlertToast from '../../../hooks/useToast'

const DshUserEdit = () => {
  const { id } = useParams()
  const { toast } = useAlertToast()
  const { loading, user } = useUser(id)
  const title = 'Edit User'
  const subtitle = 'Here you can edit a user'

  const onSubmit = async (newUserData, actions) => {
    actions.setSubmitting(true)
    try {
      const avatar = typeof newUserData.avatar === 'string' ? newUserData.avatar : user.avatar
      // Create the new user without the avatar field
      const updatedUserData = {
        ...user,
        ...newUserData,
        socials: {
          facebook: newUserData?.facebook || user.socials.facebook,
          twitter: newUserData?.twitter || user.socials.twitter,
          linkedin: newUserData?.linkedin || user.socials.linkedin,
          instagram: newUserData?.instagram || user.socials.instagram
        },
        avatar
      }

      // Update the user
      await UserService.updateUser(updatedUserData)
      // Uploading the avatar
      if (typeof newUserData.avatar === 'object') {
        await UserService.uploadAvatar(updatedUserData._id, newUserData.avatar)
      }
      toast.showSuccess('User updated successfully!')
      actions.setSubmitting(false)
    } catch (error) {
      console.error('Error updating user:', error.message)
    }
  }

  return (
    <>
      {loading
        ? (
          <p>Loading...</p>
          )
        : (
          <DshUserForm title={title} subtitle={subtitle} user={user} onSubmit={onSubmit} />
          )}
    </>
  )
}

export default DshUserEdit
