import { Link, useLocation } from 'react-router-dom'
import userImage from '../../assets/img/dashboard/header/user-default.png'
import React, { useState } from 'react'
import menuItems from '../common/dashboardHeaderMobile/dashboardHeaderMobileLinks.admin'

const UserSettings = () => {
  const { pathname } = useLocation()

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const a = [
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
    <li className='user_setting '>
      <div className='dropdown'>
        <a id='userImg' className={`${isExpanded ? 'border-black dark:!border-white ' : ''} btn !p-1 rounded-full hover:border hover:border-orangePrimary lg:!border-none`} href='#' data-bs-toggle='dropdown' aria-expanded={isExpanded} onClick={toggleExpanded}>
          <img
            width={44}
            height={44}
            src={userImage}
            alt='user.png'
          />
        </a>
        <div style={{ inset: 'unset !important' }} className='dark:bg-midnight !rounded-none dropdown-menu !h-[100dvh] !max-h-[100dvh] !top-0 !w-[100dvw] sm:!w-[360px] !left-[195px] sm:!left-[175px] rounded-none lg:!hidden '>
          <div className='user_setting_content'>
            {menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <p
                  className={`fz15 fw400 ff-heading dark:text-white ${
                                    sectionIndex === 0 ? 'mb20' : 'mt30'
                                  }`}
                >
                  {section.title}
                </p>
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    className={`dark:text-white dropdown-item dashboard-phone-link max-h-[65px] flex items-center  ${pathname === item.href ? '-is-active active-dashboard-phone-link dark:!bg-lightmidnight' : 'dark:hover:!bg-lightmidnight'} ${item.text === 'Logout' ? 'log-bt bg-[#FFF5F8] hover:!bg-[#FBE2EA] dark:!bg-red-700/10 dark:hover:!bg-red-600/20' : ''} `}
                    to={item.href}
                  >
                    {item.icon}

                    <span className={`ml10 bg-transparent !h-fit dark:text-white ${item.text === 'Logout' ? 'dark:!text-white !text-[#F1416C]' : ''}`}>{item.text}</span>
                  </Link>
                ))}
              </div>
            ))}
            <div className='h-[80px]' />
          </div>
        </div>
      </div>
    </li>
  )
}

export default UserSettings
