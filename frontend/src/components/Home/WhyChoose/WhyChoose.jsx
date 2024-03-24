import WhyChooseFeaturesData from '../../../data/home/whyChooseFeaturesData'
import WhyChooseImg from '../../../assets/img/home/why-chose.png'
import OrangeCircleImg from '../../../assets/vectors/orangePatternCircle.svg'
import { Link } from 'react-router-dom'
import WhyChooseFeatures from './WhyChooseFeatures/WhyChooseFeatures'

const WhyChoose = () => {
  return (
    <section className='pb90 mt90 mb90'>
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
              <h2 className='title'>Why Choose Us</h2>
              <p className='paragraph fz15'>
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
                className='absolute top-[50%] right-[-45px] z-[-1]'
                src={OrangeCircleImg}
                alt='Orange Circle'
              />
              <Link href='/single-v1/5'>
                <div className='iconbox-style5 flex items-center shadow-lg'>
                  <span className='icon flaticon-home flex-shrink-0' />
                  <div className='iconbox-content flex-shrink-1 ms-2'>
                    <p className='text mb-0'>Total Rent</p>
                    <h4 className='title mb-0'>4,382 Unit</h4>
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
