import { Link } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import Social from './Social'
import ProSidebarContent from './ProSidebarContent'
import MobileDarkNavIcon from '../../../assets/vectors/mobile-dark-nav-icon.svg'
import LogoDark from '../../../assets/logos/logo-dark.png'

const MobileMenu = () => {
  return (
    <div className='mobilie_header_nav stylehome1'>
      <div className='mobile-menu'>
        <div className='header innerpage-style'>
          <div className='menu_and_widgets'>
            <div className='mobile_menu_bar flex justify-between items-center'>
              <a
                className='menubar'
                href='#'
                data-bs-toggle='offcanvas'
                data-bs-target='#mobileMenu'
                aria-controls='mobileMenu'
              >
                <img
                  width={25}
                  height={9}
                  src={MobileDarkNavIcon}
                  alt='mobile icon'
                />
              </a>
              <Link className='mobile_logo' href='/'>
                <img
                  width={138}
                  height={44}
                  src={LogoDark}
                  alt='logo'
                />
              </Link>
              <Link href='/login'>
                <span className='icon fz18 far fa-user-circle' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.mobile-menu meta */}

      <div
        className='offcanvas offcanvas-start mobile_menu-canvas'
        tabIndex='-1'
        id='mobileMenu'
        aria-labelledby='mobileMenuLabel'
        data-bs-scroll='true'
      >
        <div className='rightside-hidden-bar'>
          <div className='hsidebar-header'>
            <div
              className='sidebar-close-icon'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            >
              <span className='far fa-times' />
            </div>
            <h4 className='title'>Welcome to ShareLive</h4>
          </div>
          {/* End header */}

          <div className='hsidebar-content '>
            <div className='hiddenbar_navbar_content'>
              <ProSidebarContent />
              {/* End .hiddenbar_navbar_menu */}

              <div className='hiddenbar_footer relative bdrt1'>
                <div className='flex flex-wrap pt45 pb30 pl30'>
                  <ContactInfo />
                </div>
                {/* End .row */}

                <div className='flex flex-wrap  pt30 pb30 bdrt1'>
                  <div className='col-auto'>
                    <div className='social-style-sidebar flex items-center pl30'>
                      <h6 className='me-4 mb-0'>Follow us</h6>
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
              {/* hiddenbar_footer */}
            </div>
          </div>
          {/* End hsidebar-content */}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
