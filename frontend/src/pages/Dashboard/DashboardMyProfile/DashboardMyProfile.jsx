import DashboardLayout from '../../../layout/DashboardLayout'

import DashboardProfile from '../../../components/Dashboard/MyProfile/Profile'
import DashboardSocial from '../../../components/Dashboard/MyProfile/Social'
import DashboardPassword from '../../../components/Dashboard/MyProfile/Password'

// import Footer from '@/components/property/dashboard/Footer'
// import SidebarDashboard from '@/components/property/dashboard/SidebarDashboard'
// import ChangePasswordForm from '@/components/property/dashboard/dashboard-profile/ChangePasswordForm'
// import PersonalInfo from '@/components/property/dashboard/dashboard-profile/PersonalInfo'
// import ProfileBox from '@/components/property/dashboard/dashboard-profile/ProfileBox'
// import SocialField from '@/components/property/dashboard/dashboard-profile/SocialField'

const DashboardMyProfile = () => {
    return (
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
    )
}

export default DashboardMyProfile
