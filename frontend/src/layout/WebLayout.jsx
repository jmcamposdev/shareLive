import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MobileMenu from '../components/common/mobile-menu/MobileMenu'

function WebLayout ({ children }) {
  return (
    <div>
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
      <Footer />
      {/* End Our Footer */}
    </div>
  )
}

export default WebLayout
