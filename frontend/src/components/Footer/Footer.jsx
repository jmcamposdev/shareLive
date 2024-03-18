import { Link } from 'react-router-dom'
import ContactMeta from './ContactMeta'
import AppWidget from './AppWidget'
import Social from './Social'
import Subscribe from './Subscribe'
import MenuWidget from './MenuWidget'
import Copyright from './Copyright'
import LogoWhite from '../../assets/logos/logo-white.png'

const Footer = () => {
  return (
    <>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap '>
          <div className='lg:w-2/5 pr-4 pl-4'>
            <div className='footer-widget mb-4 lg:mb-12'>
              <Link className='footer-logo' href='/'>
                <img
                  width={138}
                  height={44}
                  className='mb40'
                  src={LogoWhite}
                  alt=''
                />
              </Link>
              <ContactMeta />
              <AppWidget />
              <div className='social-widget'>
                <h6 className='text-white mb20'>Follow us on social media</h6>
                <Social />
              </div>
            </div>
          </div>
          {/* End .col-lg-5 */}

          <div className='lg:w-3/5 pr-4 pl-4'>
            <div className='footer-widget mb-4 lg:mb-12'>
              <Subscribe />
              <div className='flex flex-wrap  justify-between'>
                <MenuWidget />
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <Copyright />
      {/* End copyright */}
    </>
  )
}

export default Footer
