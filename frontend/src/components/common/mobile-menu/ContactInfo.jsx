import React from 'react'
import { Link } from 'react-router-dom'

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Total Free Customer Care',
      phone: '+(0) 123 050 945 02',
      phoneHref: 'tel:+012305094502' // Updated phoneHref to use "tel" URI
    },
    {
      id: 2,
      title: 'Need Live Support?',
      email: 'info@sharelive.com',
      emailHref: 'mailto:hi@homez.com' // Updated emailHref to use "mailto" URI
    }
  ]

  return (
    <>
      {contactInfo.map((info) => (
        <div className='col-auto px-3' key={info.id}>
          <div className='contact-info'>
            <p className='info-title dark-color dark:text-white'>{info.title}</p>
            {info.phone && (
              <h6 className='info-phone dark-color'>
                <Link className='dark:text-white dark:hover:text-orangePrimary' to={info.phoneHref}>{info.phone}</Link>
              </h6>
            )}
            {info.email && (
              <h6 className='info-mail dark-color'>
                <Link className='dark:text-white dark:hover:text-orangePrimary' to={info.emailHref}>{info.email}</Link>
              </h6>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default ContactInfo
