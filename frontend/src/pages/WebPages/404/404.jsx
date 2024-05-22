import React, { useState, useEffect } from 'react'
import WebLayout from '../../../layout/WebLayout'
import ErrorImg from '../../../assets/vectors/404img.svg'
import ErrorImgDark from '../../../assets/vectors/404imgDark.svg'

function NotFound() {
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

  return (
    <WebLayout>
      <section className='our-error relative dark:bg-lightmidnight'>
        {/* If the page is not scrolled the nav wil have this background color */}
        <div className={`hidden lg:block absolute h-[87px] w-full top-0 ${!isScrolled ? 'bg-midnight' : 'bg-transparent'}`} />
        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap  items-center justify-center'>
            <div className='xl:w-1/2 pr-4 pl-4 aos-init aos-animate' data-aos='fade-left'>
              <div className='animate_content text-center text-xl-start'>
                <div className='animate_thumb'>
                  <img alt='error-page-img' loading='lazy' width='591' height='452' decoding='async' data-nimg='1' className='w-full h-full cover hidden dark:block' style={{ color: 'transparent' }} src={ErrorImg} />
                  <img alt='error-page-img' loading='lazy' width='591' height='452' decoding='async' data-nimg='1' className='w-full h-full cover dark:hidden' style={{ color: 'transparent' }} src={ErrorImgDark} />
                </div>
              </div>
            </div>
            <div className='xl:w-2/5 pr-4 pl-4 xl:mx-1/6 wow fadeInLeft aos-init aos-animate' data-aos='fade-right'>
              <div className='error_page_content mt80 mt50-lg text-center text-xl-start'>
                <div className='erro_code'><span className='text-thm'>40</span><span className='dark:text-white'>4</span></div>
                <div className='h2 error_title dark:text-white'>Oops! It looks like you're lost.</div>
                <p className='text fz15 mb20 dark:text-white'>The page you're looking for isn't available. Try to search again <br className='hidden lg:block' /> or use the go to.</p>
                <a className='ud-btn bg-gray-900 text-white hover:bg-gray-900' href='/'>Go Back To Homepages<i className='fal fa-arrow-right-long' /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  )
}
export default NotFound
