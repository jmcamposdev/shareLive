import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import LoginSignupModal from '../common/login-signup-modal'
import LogoWhite from '../../assets/logos/logo-white.png'
import LogoDark from '../../assets/logos/logo-dark.png'
import UserCircleIcon from '../../assets/vectors/userCircle.svg'

import MainMenu from '../common/MainMenu'

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <>
      <header
        className={`header-nav nav-homepage-style at-home2  main-menu ${
          navbar ? 'sticky slideInDown animated' : ''
        }`}
      >
        <nav className='posr'>
          <div className='container mx-auto sm:px-4 maxw1600 posr'>
            <div className='flex flex-wrap  items-center justify-between'>
              <div className='col-auto'>
                <div className='flex items-center justify-between'>
                  <div className='logos mr40'>
                    <Link className='header-logo logo1' href='/'>
                      <img
                        style={{ height: '44px', maxWidth: 'fit-content' }}
                        src={LogoWhite}
                        alt='Header Logo'
                      />
                    </Link>
                    <Link className='header-logo logo2' href='/'>
                      <img
                        style={{ height: '44px', maxWidth: 'fit-content' }}
                        src={LogoDark}
                        alt='Header Logo'
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className='col-auto'>
                <div className='flex items-center'>
                  <a
                    href='#'
                    className='login-info flex items-center'
                    data-bs-toggle='modal'
                    data-bs-target='#loginSignupModal'
                    role='button'
                  >
                    <svg className='me-2' width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg' stroke={navbar ? 'black' : 'white'}>
                      <path d='M9.09698 9.12405C9.04098 9.11605 8.96898 9.11605 8.90498 9.12405C7.49698 9.07605 6.37695 7.92405 6.37695 6.50803C6.37695 5.06003 7.54498 3.88403 9.00098 3.88403C10.449 3.88403 11.625 5.06003 11.625 6.50803C11.617 7.92405 10.505 9.07605 9.09698 9.12405Z' stroke='current-color' stroke-linecap='round' stroke-linejoin='round' />
                      <path d='M14.3914 14.404C12.9674 15.708 11.0794 16.5 8.99941 16.5C6.91942 16.5 5.03142 15.708 3.60742 14.404C3.68742 13.652 4.16742 12.916 5.02342 12.34C7.21542 10.884 10.7994 10.884 12.9754 12.34C13.8314 12.916 14.3114 13.652 14.3914 14.404Z' stroke='current-color' stroke-linecap='round' stroke-linejoin='round' />
                      <path d='M9 16.5C13.4182 16.5 17 12.9182 17 8.5C17 4.08172 13.4182 0.5 9 0.5C4.58172 0.5 1 4.08172 1 8.5C1 12.9182 4.58172 16.5 9 16.5Z' stroke='current-color' stroke-linecap='round' stroke-linejoin='round' />
                    </svg>
                    {' '}
                    <span className='hidden xl:block'>Login / Register</span>
                  </a>
                  <Link
                    className='ud-btn add-property menu-btn bdrs60 mx-2 xl:mx-6'
                    href='/dashboard-add-property'
                  >
                    Add Property
                    <i className='fal fa-arrow-right-long' />
                  </Link>
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className='signup-modal'>
        <div
          className='modal opacity-0'
          id='loginSignupModal'
          tabIndex={-1}
          aria-labelledby='loginSignupModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog  modal-dialog-scrollable modal-dialog-centered'>
            <LoginSignupModal />
          </div>
        </div>
      </div>
      {/* End Signup Modal */}
    </>
  )
}

export default Header
