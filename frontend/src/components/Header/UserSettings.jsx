import { Link } from 'react-router-dom'
import userImage from '../../assets/img/dashboard/header/user-default.png'
import React, { useState } from 'react'

const UserSettings = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

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
    <li className='user_setting'>
      <div className='dropdown'>
        <a id='userImg' className={`${isExpanded ? 'border-white' : ''} btn p-1 rounded-full hover:border hover:border-orangePrimary`} href='#' data-bs-toggle='dropdown' aria-expanded={isExpanded} onClick={toggleExpanded}>
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
  )
}

export default UserSettings
