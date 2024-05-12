import DashboardLayout from '../../../../layout/DashboardLayout'
import TitleDashboard from '../TitleDashboard/TitleDashboard'
import DshBasicUserForm from './DshBasicUserForm/DshBasicUserForm'
import DshPasswordUserForm from './DshPasswordUserForm/DshPasswordUserForm'
import DshSocialUserForm from './DshSocialUserForm/DshSocialUserForm'

const DshUserForm = ({ title, subtitle, user, onSubmit }) => {
  return (
    <DashboardLayout>
      <TitleDashboard title={title} subtitle={subtitle} />
      <DshBasicUserForm user={user} onSubmit={onSubmit} />
      <DshSocialUserForm user={user} onSubmit={onSubmit} />
      {user && <DshPasswordUserForm user={user} />}
    </DashboardLayout>
  )
}

export default DshUserForm