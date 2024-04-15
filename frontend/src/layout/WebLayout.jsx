import WebFooter from '../components/Footer/WebFooter/WebFooter'
import Header from '../components/Header/Header'
import MobileMenu from '../components/common/mobile-menu/MobileMenu'
import Chevron from '../components/common/chevron/Chevron'

function WebLayout ({ children }) {
  return (
    <div className='dark:bg-lightmidnight'>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* All Content */}
      <main>
        {children}
      </main>
      {/* End All Content */}

      {/* Start Our Footer */}
      <WebFooter />
      {/* End Our Footer */}
      <Chevron />
    </div>
  )
}

export default WebLayout
