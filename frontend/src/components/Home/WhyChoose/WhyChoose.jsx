import WhyChooseFeaturesData from '../../../data/home/whyChooseFeaturesData'
import WhyChooseImg from '../../../assets/img/home/why-chose.png'
import OrangeCircleImg from '../../../assets/vectors/orangePatternCircle.svg'
import { Link } from 'react-router-dom'
import WhyChooseFeatures from './WhyChooseFeatures/WhyChooseFeatures'

const WhyChoose = () => {
  return (
    <section className='pb-[180px] mt90  relative overflow-x-hidden'>
      <div className='absolute top-0 left-0 w-full h-full -z-10 hidden dark:block dark:bg-lightmidnight' />
      <div className='container mx-auto sm:px-4'>
        <div
          className='flex flex-wrap  md:items-center justify-between'
          data-aos='fade-left'
          data-aos-delay='100'
        >
          <div
            className='md:w-1/2 pr-4 pl-4 lg:w-2/5 lg:mx-1/6'
            data-aos='fade-right'
            data-aos-delay='300'
          >
            <div className='main-title2'>
              <h2 className='title dark:text-white'>Why Choose Us</h2>
              <p className='paragraph fz15 dark:text-white'>
                At ShareLive, we are committed to providing a unique experience for students, simplifying the process of finding and booking accommodation
              </p>
            </div>
            {/* End main-title2 */}

            <div className='why-chose-list'>
              <WhyChooseFeatures features={WhyChooseFeaturesData} />
            </div>
            {/* End .why-chose-list */}
          </div>
          {/* End .col-6 */}

          <div className='md:w-1/2 pr-4 pl-4 lg:w-1/2'>
            <div className='relative mb30-md'>
              <img
                width={591}
                height={685}
                className='w-full h-full cover'
                src={WhyChooseImg}
                alt='why chosse'
              />
              <img
                className='absolute top-[50%] right-[-45px] z-[-1] spin-right'
                src={OrangeCircleImg}
                alt='Orange Circle'
              />
              <Link>
                <div className='iconbox-style5 flex items-center shadow-lg dark:bg-midnight/90 hover:!bg-orangePrimary/90'>
                  <span className='icon flaticon-home flex-shrink-0 dark:hover:!bg-orangePrimaryLightHover' />
                  <div className='iconbox-content flex-shrink-1 ms-2'>
                    <p className='text mb-0 dark:text-white'>Total Rent</p>
                    <h4 className='title mb-0 dark:text-white'>4,382 Unit</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* End .col-6 */}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
