import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import LogoWhite from '../../assets/logos/logo-white.png'
import LogoWhite2 from '../../assets/logos/logo-white-2.png'
import LogoDark from '../../assets/logos/logo-dark.png'
import DarkModeSwitcher from '../common/darkModeSwitcher/DarkModeSwitcher'
import MainMenu from '../common/MainMenu'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
  const { user } = useAuth()
  const [navbar, setNavbar] = useState(false)

  // Variable to know if the user scrolled the page
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        className={`relative header-nav nav-homepage-style at-home2  main-menu !z-50 dark:!bg-midnight/90 ${
          navbar ? 'sticky slideInDown animated' : ''
        }`}
      >
        {/* If the page is not scrolled the nav wil have this background color */}
        <div className={`hidden lg:block absolute h-[87px] w-full top-0 ${!isScrolled ? 'bg-midnight' : 'bg-transparent'}`} />
        <nav className='posr'>
          <div className='container mx-auto sm:px-4 maxw1600 posr'>
            <div className='flex flex-wrap  items-center justify-between'>
              <div className='col-auto'>
                <div className='flex items-center justify-between'>
                  <div className='logos mr40'>
                    <Link className='header-logo logo1 relative' to='/'>
                      <img
                        style={{ height: '44px', maxWidth: 'fit-content' }}
                        src={LogoWhite}
                        alt='Header Logo'
                      />
                    </Link>
                    <Link className='header-logo logo2' to='/'>
                      <img
                        style={{ height: '44px', maxWidth: 'fit-content' }}
                        src={LogoDark}
                        alt='Header Logo'
                      />
                      <img
                        style={{ height: '44px', maxWidth: 'fit-content' }}
                        src={LogoWhite2}
                        alt='Header Logo'
                        className='absolute bottom-[1px] left-[16px] hidden dark:block'
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
                  <Link
                    className='ud-btn add-property menu-btn bdrs60 mx-2 xl:mx-6 dark:!text-white dark:!border-white '
                    to='/dashboard/rooms/add'
                  >
                    Add Property
                    <i className='fal fa-arrow-right-long' />
                  </Link>
                  {user
                    ? (
                      <Link
                        to='/dashboard'
                        className='ud-btn btn-thm dark:text-white !px-[22px] !py-[9px] '
                      >
                        Dashboard <i className='fal fa-arrow-right-long' />
                      </Link>
                      )
                    : (
                      <Link
                        to='/login'
                        className='login-info flex items-center'
                      >
                        <i className='ml-[8px] far fa-user-circle fz16 me-2 dark:!text-white' />{' '}
                        <span className='hidden xl:block dark:!text-white'>Login / Register</span>
                      </Link>

                      )}
                  <DarkModeSwitcher />
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

    </>
  )
}

export default Header
