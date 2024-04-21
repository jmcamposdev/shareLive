import { Link } from 'react-router-dom'
import ContactInfo from '../mobile-menu/ContactInfo'
import Social from '../mobile-menu/Social'
import ProSidebarContent from '../mobile-menu/ProSidebarContent'
import MobileDarkNavIcon from '../../../assets/vectors/mobile-dark-nav-icon.svg'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LogoWhite from '../../../assets/logos/logo-white.png'
import DarkModeSwitcher from '../darkModeSwitcher/DarkModeSwitcher'
import UserSettings from '../../Header/UserSettings'

const MobileMenu = () => {
  return (
    <div className='mobilie_header_nav stylehome1 dark:!bg-midnight/90'>
      <div className='mobile-menu'>
        <div className='header innerpage-style bg-white dark:!bg-transparent !flex justify-center items-center'>
          <div className='menu_and_widgets w-full'>
            <div className='mobile_menu_bar flex justify-between items-center w-full'>
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
                  className='dark:brightness-[2000%]'
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
                  className='dark:hidden'
                />
                <img
                  width={138}
                  height={44}
                  src={LogoWhite}
                  alt='logo'
                  className='hidden dark:block'
                />
              </Link>
              <div className='flex gap-3 justify-center !align-center' style={{ alignItems: 'center' }}>
                <UserSettings />
                <DarkModeSwitcher />
              </div>

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
        <div className='rightside-hidden-bar dark:bg-midnight'>
          <div className='hsidebar-header bg-orangePrimaryLightHover dark:!bg-midnight border-b dark:!border-slate-300'>
            <div
              className='sidebar-close-icon dark:!bg-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            >
              <span className='far fa-times dark:text-midnight' />
            </div>
            <h4 className='title dark:!text-white ' style={{ fontSize: 'clamp(1rem, 0.916rem + 0.445vw, 1.25rem)' }}>Dashboard Navigation</h4>
          </div>
          {/* End header */}

          <div className='hsidebar-content !pb-0 '>
            <div className='hiddenbar_navbar_content'>
              <ProSidebarContent />
              {/* End .hiddenbar_navbar_menu */}
              {/* hiddenbar_footer */}
            </div>
          </div>

          {/* Page navigation */}

          <div className='hsidebar-header bg-orangePrimaryLightHover dark:!bg-midnight border-b dark:!border-slate-300'>
            <div
              className='sidebar-close-icon dark:!bg-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            >
              <span className='far fa-times dark:text-midnight' />
            </div>
            <h4 className='title dark:!text-white ' style={{ fontSize: 'clamp(1rem, 0.916rem + 0.445vw, 1.25rem)' }}>Dashboard Navigation</h4>
          </div>
          {/* End header */}

          <div className='hsidebar-content '>
            <div className='hiddenbar_navbar_content'>
              <ProSidebarContent />
              {/* End .hiddenbar_navbar_menu */}
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
