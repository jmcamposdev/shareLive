import RecentActivities from '../../../components/Dashboard/Home/RecentActivities/RecentActivities'
import TopStateBlock from '../../../components/Dashboard/Home/TopStateBlock/TopStateBlock'
import WeeklyRoomsChart from '../../../components/Dashboard/Home/WeeklyRoomsChart/WeeklyRoomsChart'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import DashboardLayout from '../../../layout/DashboardLayout'

function DashboardHomeAdmin () {
  return (
    <DashboardLayout>
      <TitleDashboard title='Howdy, Ali!' subtitle='We are glad to see you again!' />
      <TopStateBlock />
      <div className='flex flex-wrap '>
        <div className='w-full xl:w-2/3 pr-4 pl-4'>
          <WeeklyRoomsChart />
        </div>
        <div className='w-full xl:w-1/3 pr-4 pl-4'>
          <RecentActivities />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardHomeAdmin
