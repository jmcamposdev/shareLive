import DshUserForm from '../../../components/common/Dashboard/DshUserForm/DshUserForm'
import UserService from '../../../services/UserService'
import useAlertToast from '../../../hooks/useToast'
import { useAuth } from '../../../context/AuthContext'

const DashboardMyProfile = () => {
  const { toast } = useAlertToast()
  const { user, updateUser } = useAuth()

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
      let updatedUser = await UserService.updateUser(updatedUserData)
      // Uploading the avatar
      if (typeof newUserData.avatar === 'object') {
        updatedUser = await UserService.uploadAvatar(updatedUserData._id, newUserData.avatar)
      }
      updateUser(updatedUser)
      toast.showSuccess('User updated successfully!')
      actions.setSubmitting(false)
    } catch (error) {
      console.error('Error updating user:', error.message)
    }
  }

  return (
    <DshUserForm
      title='My Profile'
      subtitle='We are glad to see you again!'
      user={user}
      onSubmit={onSubmit}
    />

  )
}

export default DashboardMyProfile
