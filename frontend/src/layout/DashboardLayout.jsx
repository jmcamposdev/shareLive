import SidebarDashboard from '../components/common/Dashboard/SidebarDashboard/SidebarDashboard'
import DashboardFooter from '../components/Footer/DashboardFooter/DashboardFooter'
import DashboardHeader from '../components/Header/DashboardHeader'
import MobileMenu from '../components/common/mobile-menu/MobileMenu'

function DashboardLayout ({ children }) {
  return (
    <>
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <div className='dashboard_content_wrapper'>
        <div className='dashboard dashboard_wrapper pr30 pr0-xl'>
          <SidebarDashboard />
          <div className='dashboard__main pl0-md'>
            <div className='dashboard__content bgc-f7'>
              {children}
            </div>

            <DashboardFooter />
          </div>
        </div>
      </div>

    </>
  )
}

export default DashboardLayout
