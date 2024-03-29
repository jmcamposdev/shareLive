import { Link } from 'react-router-dom'
import MainMenu from '../common/MainMenu'
import LogoWhite from '../../assets/logos/logo-white.png'
import LogoDark from '../../assets/logos/logo-dark.png'
import userImage from '../../assets/img/dashboard/header/user-default.png'

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
    <header className='header-nav nav-homepage-style light-header !fixed menu-home4 main-menu'>
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
                  <li className='hidden sm:block'>
                    <Link className='text-center mr15 !flex justify-center items-center' href='/login'>
                      <span className='flaticon-email !flex' />
                    </Link>
                  </li>
                  {/* End email box */}

                  <li className='hidden sm:block'>
                    <a className='text-center mr20 notif !flex justify-center items-center' href='#'>
                      <span className='flaticon-bell !flex' />
                    </a>
                  </li>
                  {/* End notification icon */}

                  <li className='user_setting'>
                    <div className='dropdown'>
                      <a className='btn' href='#' data-bs-toggle='dropdown'>
                        <img
                          width={44}
                          height={44}
                          src={userImage}
                          alt='user.png'
                        />
                      </a>
                      <div className='dropdown-menu'>
                        <div className='user_setting_content'>
                          {menuItems.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <p
                                className={`fz15 fw400 ff-heading ${
                                    sectionIndex === 0 ? 'mb20' : 'mt30'
                                  }`}
                              >
                                {section.title}
                              </p>
                              {section.items.map((item, itemIndex) => (
                                <Link
                                  key={itemIndex}
                                  className='dropdown-item'
                                  href={item.href}
                                >
                                  <i className={`${item.icon} mr10`} />
                                  {item.text}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
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
