import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import LoginSignupModal from '../common/login-signup-modal'
import LogoWhite from '../../assets/logos/logo-white.png'
import LogoDark from '../../assets/logos/logo-dark.png'

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
                    <i className='far fa-user-circle fz16 me-2' />{' '}
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
