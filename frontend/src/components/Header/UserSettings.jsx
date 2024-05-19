import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import menuItems from '../common/dashboardHeaderMobile/dashboardHeaderMobileLinks.admin'
import { useAuth } from '../../context/AuthContext'

const UserSettings = () => {
  const { pathname } = useLocation()
  const { user } = useAuth()

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <li className='user_setting '>
      <div className='dropdown'>
        <a
          id='userImg'
          className={`${isExpanded ? 'border-black dark:!border-white ' : ''} btn !p-1 rounded-full hover:border hover:border-orangePrimary lg:!border-none`}
          data-bs-toggle='dropdown'
          aria-expanded={isExpanded}
          onClick={toggleExpanded}
        >
          <img
            className='rounded-full'
            width={44}
            height={44}
            src={user.avatar}
            alt={user.name}
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
                    className={`dark:text-white dropdown-item dashboard-phone-link max-h-[65px] flex items-center  ${pathname === item.href ? '-is-active active-dashboard-phone-link dark:!bg-lightmidnight' : 'dark:hover:!bg-lightmidnight'} ${item.text === 'Log out' ? 'log-bt bg-[#FFF5F8] hover:!bg-[#FBE2EA] dark:!bg-red-700/10 dark:hover:!bg-red-600/20' : ''} `}
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
