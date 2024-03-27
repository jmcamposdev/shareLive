import WhyChooseImg from '../../../assets/img/home/why-chose.png'
import InstaIntro1 from '../../../assets/img/aboutUs/instaIntro1.jpg'
import InstaIntro2 from '../../../assets/img/aboutUs/instaIntro2.jpg'
import OrangeCircleImg from '../../../assets/vectors/orangePatternCircle.svg'
import { Link } from 'react-router-dom'

const WhyChoose = () => {
  return (
    <section className='pb90 dark:bg-lightmidnight'>
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
              <p className='text-xl mb-1.5 font-medium text-orangePrimary'>Our Instagram Mural</p>
              <h2 className='title dark:text-white'>Share with us your experience</h2>
              <p className='paragraph fz15 mt-[30px] dark:text-white'>
                Share your <span className='font-semibold'>unforgettable</span> moments with us! Whether it's the breathtaking  views from your latest adventure, cozy evenings spent with <span className='font-semibold'>friends</span>, or  the <span className='font-semibold'>joy</span> of discovering new places, we want to see it all.
              </p>
            </div>
            {/* End main-title2 */}

            {/* End .why-chose-list */}
          </div>
          {/* End .col-6 */}

          <div className='md:w-1/2 pr-4 pl-4 lg:w-3/5 lg:mx-1/6 relative flex lg:pl-14 gap-5 items-baseline'>

            <img className='rounded-2xl h-fit grow shrink min-w-0' src={InstaIntro1} alt='' />
            <img className='rounded-2xl h-fit grow shrink min-w-0' src={InstaIntro2} alt='' />
            <img
              className='absolute top-[50%] right-[-45px] z-[-1]'
              src={OrangeCircleImg}
              alt='Orange Circle'
            />
            <Link href='/single-v1/5' className='group'>
              <div className='iconbox-style5 flex items-center shadow-lg'>
                <span className='bg-orangePrimaryLight w-[70px] h-[70px] rounded-full group-hover:bg-orangePrimaryLightHover' />
              </div>
            </Link>

          </div>
          {/* End .col-6 */}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
