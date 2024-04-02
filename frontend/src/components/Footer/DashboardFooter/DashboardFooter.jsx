import React from 'react'

const footerLinks = [
  { text: 'Privacy', href: '#' },
  { text: 'Terms', href: '#' },
  { text: 'Sitemap', href: '#' }
]

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='dashboard_footer pt30 pb10'>
      <div className='container'>
        <div className='row items-center justify-content-center justify-content-md-between'>
          <div className='col-auto'>
            <div className='copyright-widget'>
              <p className='text'>
                © ShareLive {currentYear}{' '}
                <a
                  href='https://themeforest.net/user/ib-themes'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='font-semibold'>JCC Designs</span>
                </a>{' '}
                - All rights reserved
              </p>
            </div>
          </div>

          <div className='col-auto'>
            <div className='footer_bottom_right_widgets text-center text-lg-end'>
              <p>
                {footerLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a href={link.href}>{link.text}</a>
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
