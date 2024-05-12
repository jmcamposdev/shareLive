import DashboardLayout from '../../../../layout/DashboardLayout'
import TitleDashboard from '../TitleDashboard/TitleDashboard'
import DshBasicUserForm from './DshBasicUserForm/DshBasicUserForm'
import DshSocialUserForm from './DshSocialUserForm/DshSocialUserForm'

const DshUserForm = ({ title, subtitle, user, onSubmit, isEdit }) => {
  return (
    <DashboardLayout>
      <TitleDashboard title={title} subtitle={subtitle} />
      <DshBasicUserForm user={user} onSubmit={onSubmit} />
      <DshSocialUserForm user={user} onSubmit={onSubmit} />
    </DashboardLayout>
  )
}

export default DshUserForm
