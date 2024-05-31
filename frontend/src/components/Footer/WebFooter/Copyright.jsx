import React from 'react'
import { Link } from 'react-router-dom'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  const footerMenuItems = [
    {
      label: 'Privacy',
      link: 'privacy'
    },
    {
      label: 'Terms',
      link: 'terms'
    },
    {
      label: 'Sitemap',
      link: 'sitemap'
    }
  ]

  return (
    <div className='container mx-auto sm:px-4 white-bdrt1 py-4'>
      <div className='flex flex-wrap '>
        <div className='sm:w-1/2 pr-4 pl-4'>
          <div className='text-center text-lg-start'>
            <p className='copyright-text text-gray ff-heading'>
              © Homez {getCurrentYear()}{' '}
              <Link
                rel='noopener noreferrer'
                className='text-white'
              >
                JCC
              </Link>{' '}
              - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className='sm:w-1/2 pr-4 pl-4'>
          <div className='text-center text-lg-end'>
            <p className='footer-menu ff-heading text-gray'>
              {footerMenuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link className='text-gray' to={item.link}>
                    {item.label}
                  </Link>
                  {index !== footerMenuItems.length - 1 && ' · '}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  )
}

export default Footer
