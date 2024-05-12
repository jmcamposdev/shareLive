import DashboardLayout from '../../../layout/DashboardLayout'

import DashboardProfile from '../../../components/Dashboard/MyProfile/Profile'
import DashboardSocial from '../../../components/Dashboard/MyProfile/Social'
import DashboardPassword from '../../../components/Dashboard/MyProfile/Password'
import DshUserForm from '../../../components/common/Dashboard/DshUserForm/DshUserForm'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import UserService from '../../../services/UserService'
import useAlertToast from '../../../hooks/useToast'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

const DashboardMyProfile = () => {
  const { toast } = useAlertToast()
  const user = useAuthUser()
  const authHeader = useAuthHeader()
  const signIn = useSignIn()

  const onSubmit = async (newUserData, actions) => {
    actions.setSubmitting(true)
    try {
      const avatar = typeof newUserData.avatar === 'string' ? newUserData.avatar : user.avatar
      // Create the new user without the avatar field
      const updatedUserData = {
        ...user,
        ...newUserData,
        avatar
      }

      // Update the user
      let updatedUser = await UserService.updateUser(updatedUserData)
      // Uploading the avatar
      if (typeof newUserData.avatar === 'object') {
        updatedUser = await UserService.uploadAvatar(updatedUserData._id, newUserData.avatar)
      }
      // Update the user in the context
      signIn({
        auth: {
          token: authHeader.split(' ')[1],
          type: authHeader.split(' ')[0]
        },
        userState: { ...updatedUser }
      })
      toast.showSuccess('User updated successfully!')
      actions.setSubmitting(false)
    } catch (error) {
      console.error('Error updating user:', error.message)
    }
  }

  return (
    <>
      <DshUserForm
        title='My Profile'
        subtitle='We are glad to see you again!'
        user={user}
        onSubmit={onSubmit}
      />
      <DashboardLayout>
        <div className='row align-items-center pb40'>
          <div className='col-lg-12'>
            <div className='dashboard_title_area '>
              <h2 className='dark:text-white'>My Profile</h2>
              <p className='text dark:text-white'>We are glad to see you again!</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <DashboardProfile />
            <DashboardSocial />
            <DashboardPassword />
          </div>
        </div>
      </DashboardLayout>
    </>

  )
}

export default DashboardMyProfile
