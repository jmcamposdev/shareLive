import WebFooter from '../components/Footer/WebFooter/WebFooter'
import Header from '../components/Header/Header'
import MobileMenu from '../components/common/mobile-menu/MobileMenu'
import Chevron from '../components/common/chevron/Chevron'

function WebLayout ({ children }) {
  return (
    <>
      {/*
        Background for the phone header, the mobile menu is opaque in dark mode and if this element
        is not present the user can see the white background of the body
      */}
      <div className='fixed top-0 w-full h-[65px] bg-midnight lg:hidden' />
      <div className='relative'>

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
    </>
  )
}

export default WebLayout
