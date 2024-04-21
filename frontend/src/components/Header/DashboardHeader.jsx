import { Link } from 'react-router-dom'
import MainMenu from '../common/MainMenu'
import LogoWhite from '../../assets/logos/logo-white.png'
import LogoDark from '../../assets/logos/logo-dark.png'
import userImage from '../../assets/img/dashboard/header/user-default.png'
import DarkModeSwitcher from '../common/darkModeSwitcher/DarkModeSwitcher'
import UserSettings from './UserSettings'

const DashboardHeader = () => {
  const menuItems = [
    {
      title: 'MAIN',
      items: [
        {
          icon: 'flaticon-discovery',
          text: 'Dashboard',
          href: '/dashboard-home'
        },
        {
          icon: 'flaticon-chat-1',
          text: 'Message',
          href: '/dashboard-message'
        }
      ]
    },
    {
      title: 'MANAGE ACCOUNT',
      items: [
        {
          icon: 'flaticon-protection',
          text: 'My Package',
          href: '/dashboard-my-package'
        },
        {
          icon: 'flaticon-user',
          text: 'My Profile',
          href: '/dashboard-my-profile'
        },
        { icon: 'flaticon-exit', text: 'Logout', href: '/login' }
      ]
    }
  ]

  return (
    <header className='header-nav nav-homepage-style light-header !fixed menu-home4 main-menu dark:bg-midnight'>
      <nav className='posr'>
        <div className='max-w-full mx-auto sm:px-4 pr30 pr15-xs pl30 posr menu_bdrt1'>
          <div className='flex flex-wrap  items-center justify-between'>
            <div className='col-lg-auto'>
              <div className='text-center text-lg-start flex items-center'>
                <div className='dashboard_header_logo relative me-2 xl:me-12'>
                  <Link className='logo' to='/'>
                    <img
                      src={LogoDark}
                      alt='Header Logo'
                      className='dark:hidden'
                    />
                    <img
                      src={LogoWhite}
                      alt='Header Logo'
                      className='hidden dark:block'
                    />
                  </Link>
                </div>
                {/* End Logo */}
              </div>
            </div>
            {/* End .col-auto */}

            <div className='hidden lg:block col-lg-auto'>
              <MainMenu />
              {/* End Main Menu */}
            </div>
            {/* End d-none d-lg-block */}

            <div className='col-lg-auto'>
              <div className='text-center text-lg-end header_right_widgets'>
                <ul className='mb0 flex justify-center sm:justify-end p-0'>
                  {/* Dark Mode Switcher */}
                  <li className='hidden sm:flex justify-center items-center w-[84px]'>
                    <DarkModeSwitcher />
                  </li>
                  {/* End Dark Mode Switcher */}

                  <li className='flex justify-center items-center'>
                    <Link className='text-center mr15 !flex justify-center items-center' href='/login'>
                      <span className='flaticon-email !flex dark:text-white' />
                    </Link>
                  </li>
                  {/* End email box */}

                  <li className='!flex justify-center items-center'>
                    <a className='text-center mr20 notif !flex justify-center items-center dark:bg-lightmidnight block' href='#'>
                      <span className='flaticon-bell !flex dark:text-white' />
                    </a>
                  </li>
                  {/* End notification icon */}

                  <UserSettings />
                  {/* End avatar dropdown */}

                </ul>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}
        </div>
      </nav>
    </header>
  )
}

export default DashboardHeader
