import React, { useState, useEffect } from 'react'
import WebLayout from '../../../layout/WebLayout'
import LogoWhite from '../../../assets/logos/logo-white.png'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LoginImg from '../../../assets/vectors/loginRegisterImg.svg'

const Login = () => {
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

  // Use state to handle the state of the remember me checkbox
  const [isChecked, setIsChecked] = useState(false)

  // function to change the state of the checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked) // Inverts the actual state
  }

  return (
    <WebLayout>
      <section className='our-compare pt120 pb120 relative dark:bg-lightmidnight'>
        {/* If the page is not scrolled the nav wil have this background color */}
        <div className={`hidden lg:block absolute h-[87px] w-full top-0 ${!isScrolled ? 'bg-midnight' : 'bg-transparent'}`} />
        <img
          alt='logo'
          data-aos='fade-right'
          data-aos-delay='300'
          loading='lazy'
          width='1012'
          height='519'
          decoding='async'
          data-nimg='1'
          className='login-bg-icon contain aos-init aos-animate text-transparent pb-7'
          src={LoginImg}
        />
        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap  aos-init aos-animate' data-aos='fade-left' data-aos-delay='300'>
            <div className='w-full lg:w-1/2 pr-4 pl-4'>
              <div className='dark:bg-midnight log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12'>
                <div className='text-center mb40 flex flex-col justify-center items-center'>
                  <a href='/'>
                    <img
                      className='dark:hidden text-transparent mb25'
                      alt='logo'
                      loading='lazy'
                      width='165'
                      height='52'
                      decoding='async'
                      data-nimg='1'
                      src={LogoDark}
                    />
                    <img
                      className='dark:block hidden text-transparent mb25'
                      alt='logo'
                      loading='lazy'
                      width='165'
                      height='52'
                      decoding='async'
                      data-nimg='1'
                      src={LogoWhite}
                    />
                  </a>
                  <h2 className='dark:text-white'>Sign in</h2>
                </div>
                <form className='form-style1'>
                  <div className='mb25'>
                    <label className='form-label fw600 dark-color dark:text-white'>Email</label>
                    <input
                      className='form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded dark:bg-lightmidnight'
                      placeholder='Enter Email'
                      required=''
                      type='email'
                    />
                  </div>
                  <div className='mb15'>
                    <label className='form-label fw600 dark-color dark:text-white'>Password</label>
                    <input
                      className='dark:bg-lightmidnight form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                      placeholder='Enter Password'
                      required=''
                      type='text'
                    />
                  </div>
                  <div className='checkbox-style1 block sm:flex items-center justify-between mb10'>
                    {/* Coloca onChange directamente en el input */}
                    <label className='custom_checkbox fz14 ff-heading dark:text-white'>Remember me
                      <input id='checkbox' type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                      <span className='checkmark dark:border-white' />
                    </label>
                    <a className='fz14 ff-heading dark:text-white' href='#'>Lost your password?</a>
                  </div>
                  <div className='d-grid mb20'>
                    <button className='ud-btn btn-thm dark:text-white' type='submit'>
                      Sign in <i className='fal fa-arrow-right-long' />
                    </button>
                  </div>
                  <div className='hr_content h-[33px] relative mb20'>
                    <hr className='absolute top-[45%] w-full dark:text-white' />
                    <span className='hr_top_text dark:text-white dark:bg-midnight'>OR</span>
                  </div>
                  <div className='d-grid mb10'>
                    <button className='ud-btn btn-white' type='button'>
                      <i className='fab fa-google' /> Continue Google
                    </button>
                  </div>
                  <div className='d-grid mb10'>
                    <button className='ud-btn btn-fb' type='button'>
                      <i className='fab fa-facebook-f' /> Continue Facebook
                    </button>
                  </div>
                  <div className='d-grid mb20'>
                    <button className='ud-btn btn-apple bg-black' type='button'>
                      <i className='fab fa-apple' /> Continue Apple
                    </button>
                  </div>
                  <p className='dark-color text-center mb0 mt10 dark:text-white'>
                    Not signed up? <a className='dark-color fw600 dark:text-white' href='/register'>Create an account</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  )
}

export default Login
