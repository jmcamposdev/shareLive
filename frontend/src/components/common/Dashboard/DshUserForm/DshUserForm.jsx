import DashboardLayout from '../../../../layout/DashboardLayout'
import BoxDashboard from '../BoxDashboard/BoxDashboard'
import TitleDashboard from '../TitleDashboard/TitleDashboard'
import DshBasicUserForm from './DshBasicUserForm/DshBasicUserForm'

const DshUserForm = ({ title, subtitle, user, onSubmit, isEdit }) => {
  return (
    <DashboardLayout>
      <TitleDashboard title={title} subtitle={subtitle} />
      <BoxDashboard>
        <DshBasicUserForm user={user} onSubmit={onSubmit} />
      </BoxDashboard>
    </DashboardLayout>
  )
}

export default DshUserForm
