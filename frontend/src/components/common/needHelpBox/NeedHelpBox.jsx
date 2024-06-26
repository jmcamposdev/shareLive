import { Link } from 'react-router-dom'
import circulo from '../../../assets/vectors/greyPatternCircle.svg'

const NeedHelpBox = () => {
  return (
    <section className='our-cta pt-0  dark:bg-lightmidnight overflow-hidden'>
      <div className='cta-banner bgc-f7 mx-auto maxw1600 pt120 pb120 pt60-md pb60-md bdrs12 relative mx20-lg dark:bg-midnight'>
        <div className='img-box-5 !right-[-215px] !top-[-176px]'>
          <img className='img-1 spin-right' src={circulo} alt='' />
        </div>
        <div className='img-box-6 !left-[-211px] !bottom-[-185px]'>
          <img className='img-1 spin-left' src={circulo} alt='' />
        </div>
        <div className='container mx-auto sm:px-4 '>
          <div className='flex flex-wrap  items-center'>
            <div className='lg:w-3/5 pr-4 pl-4 xl:w-1/2 wow fadeInLeft' style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
              <div className='cta-style1'>
                <h2 className='cta-title dark:text-white'>Need help? Talk to our expert.</h2>
                <p className='cta-text mb-0 dark:text-white'>Talk to our experts or Browse through more properties.</p>
              </div>
            </div>
            <div className='lg:w-2/5 pr-4 pl-4 xl:w-1/2 wow fadeInRight w-full' data-wow-delay='300ms' style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInRight' }}>
              <div className='cta-btns-style1 block sm:flex items-center lg:justify-end'>
                <Link to='tel:9208519087' className='ud-btn btn-transparent mr30 mr0-xs clear-start dark:border-white dark:hover:border-[#eb6753] dark:text-white'>Contact Us<i className='fal fa-arrow-right-long' /></Link>
                <Link to='tel:9208519087' className='ud-btn bg-gray-900 text-white hover:bg-gray-900 dark:bg-transparent dark:border-white dark:border-[1px] dark:hover:border-[#eb6753]'><span className='flaticon-call vam pe-2 relative top-[2px]' />920 851 9087</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedHelpBox
