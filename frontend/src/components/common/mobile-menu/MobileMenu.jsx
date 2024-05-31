import { Link } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import Social from './Social'
import ProSidebarContent from './ProSidebarContent'
import MobileDarkNavIcon from '../../../assets/vectors/mobile-dark-nav-icon.svg'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LogoWhite from '../../../assets/logos/logo-white.png'
import DarkModeSwitcher from '../darkModeSwitcher/DarkModeSwitcher'
import { useAuth } from '../../../context/AuthContext'

const MobileMenu = () => {
  const { user } = useAuth()
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
              <Link className='mobile_logo' to='/'>
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
                <Link to={user ? '/dashboard' : '/login'} className=' flex justify-center align-center h-fit'>
                  <svg width='28' height='28' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path className='stroke-black dark:stroke-white' d='M9.09698 9.12405C9.04098 9.11605 8.96898 9.11605 8.90498 9.12405C7.49698 9.07605 6.37695 7.92405 6.37695 6.50803C6.37695 5.06003 7.54498 3.88403 9.00098 3.88403C10.449 3.88403 11.625 5.06003 11.625 6.50803C11.617 7.92405 10.505 9.07605 9.09698 9.12405Z' strokeWidth='0.8' strokeLinecap='round' strokeLinejoin='round' />
                    <path className='stroke-black dark:stroke-white' d='M14.3914 14.404C12.9674 15.708 11.0794 16.5 8.99941 16.5C6.91942 16.5 5.03142 15.708 3.60742 14.404C3.68742 13.652 4.16742 12.916 5.02342 12.34C7.21542 10.884 10.7994 10.884 12.9754 12.34C13.8314 12.916 14.3114 13.652 14.3914 14.404Z' strokeWidth='0.8' strokeLinecap='round' strokeLinejoin='round' />
                    <path className='stroke-black dark:stroke-white' d='M9 16.5C13.4182 16.5 17 12.9182 17 8.5C17 4.08172 13.4182 0.5 9 0.5C4.58172 0.5 1 4.08172 1 8.5C1 12.9182 4.58172 16.5 9 16.5Z' strokeWidth='0.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>

                </Link>
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
            <h4 className='title dark:!text-white ' style={{ fontSize: 'clamp(1rem, 0.916rem + 0.445vw, 1.25rem)' }}>Welcome to ShareLive</h4>
          </div>
          {/* End header */}

          <div className='hsidebar-content '>
            <div className='hiddenbar_navbar_content'>
              <ProSidebarContent />
              {/* End .hiddenbar_navbar_menu */}

              <div className='hiddenbar_footer relative border-t border-slate-300'>
                <div className='flex flex-wrap pt45 pb30 pl30'>
                  <ContactInfo />
                </div>
                {/* End .row */}

                <div className='flex flex-wrap  pt30 pb30 border-t border-slate-300'>
                  <div className='col-auto'>
                    <div className='social-style-sidebar flex items-center pl30'>
                      <h6 className='me-4 mb-0 dark:text-white'>Follow us</h6>
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
