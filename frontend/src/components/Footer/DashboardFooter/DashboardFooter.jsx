import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { text: 'Privacy', href: '#' },
  { text: 'Terms', href: '#' },
  { text: 'Sitemap', href: '#' }
]

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='dashboard_footer pt30 pb10 dark:bg-midnight'>
      <div className='container'>
        <div className='row items-center justify-content-center justify-content-md-between'>
          <div className='col-auto'>
            <div className='copyright-widget'>
              <p className='text dark:text-borderColor'>
                © ShareLive {currentYear}{' '}
                <Link
                  rel='noopener noreferrer'
                >
                  <span style={{ transition: 'all 400ms ease' }} className='font-semibold dark:text-white dark:hover:text-orangePrimary'>JCC Designs</span>
                </Link>{' '}
                - All rights reserved
              </p>
            </div>
          </div>

          <div className='col-auto'>
            <div className='footer_bottom_right_widgets text-center text-lg-end'>
              <p className='dark:text-white'>
                {footerLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a className='dark:text-white dark:hover:text-orangePrimary' href={link.href}>{link.text}</a>
                    {index !== footerLinks.length - 1 && ' · '}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default DashboardFooter
