import { Link } from 'react-router-dom'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LogoWhite from '../../../assets/logos/logo-white.png'
import DarkModeSwitcher from '../darkModeSwitcher/DarkModeSwitcher'
import UserSettings from '../../Header/UserSettings'

const MobileMenu = () => {
  return (
    <div className='mobilie_header_nav stylehome1 dark:!bg-midnight'>
      <div className='mobile-menu'>
        <div className='header innerpage-style bg-white dark:!bg-transparent !flex justify-center items-center'>
          <div className='menu_and_widgets w-full'>
            <div className='mobile_menu_bar flex justify-between items-center w-full'>
              <UserSettings />
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
                <li className='flex justify-center align-center'>
                  <Link className='text-center !flex justify-center items-center !mr-2' to='/dashboard/messages'>
                    <span className='flaticon-email !flex dark:text-white text-2xl' />
                  </Link>
                </li>
                {/* End email box */}

                <li className='!flex justify-center items-center'>
                  <a className='text-center notif !flex justify-center items-center dark:bg-lightmidnight block !mr-2' href='#'>
                    <span className='flaticon-bell !flex dark:text-white text-2xl' />
                  </a>
                </li>
                <DarkModeSwitcher />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
