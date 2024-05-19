import RecentActivities from '../../../components/Dashboard/Home/RecentActivities/RecentActivities'
import TopStateBlock from '../../../components/Dashboard/Home/TopStateBlock/TopStateBlock'
import WeeklyRoomsChart from '../../../components/Dashboard/Home/WeeklyRoomsChart/WeeklyRoomsChart'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import useAuth from '../../../hooks/useAuth'
import useDshHomeAdmin from '../../../hooks/useDshHomeAdmin'
import DashboardLayout from '../../../layout/DashboardLayout'

function DashboardHomeAdmin () {
  const { user } = useAuth()
  const { stats, loading } = useDshHomeAdmin()
  return (
    <DashboardLayout>
      <TitleDashboard title={`Howdy, ${user.name}!`} subtitle='We are glad to see you again!' />
      <TopStateBlock
        totalRooms={stats.rooms?.totalRooms}
        totalViews={stats.rooms?.totalVisits}
        totalFavorites={stats.rooms?.totalFavorites}
        totalReviews={stats.reviews?.totalReviews}
        loading={loading}
      />
      <div className='flex flex-wrap mb30'>
        <div className='w-full xl:w-2/3 pr-4 pl-4 h-fit'>
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
