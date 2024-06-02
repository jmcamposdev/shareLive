import InstaIntro1 from '../../../assets/img/aboutUs/instaIntro1.jpg'
import InstaIntro2 from '../../../assets/img/aboutUs/instaIntro2.jpg'
import OrangeCircleImg from '../../../assets/vectors/orangePatternCircle.svg'
import { Link } from 'react-router-dom'

const WhyChoose = () => {
  return (
    <section className='pb90 relative overflow-hidden'>
      <div className='absolute w-full h-[250%] dark:bg-lightmidnight bg-f7f7f7 -z-[10] top-[-50%]' />
      <div className='container mx-auto sm:px-4'>
        <div
          className='flex flex-wrap  md:items-center justify-between'
          data-aos='fade-left'
          data-aos-delay='100'
        >
          <div
            className=' pr-4 pl-4 lg:w-2/5 lg:mx-1/6'
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

          <div className=' pr-4 pl-4 lg:w-3/5 lg:mx-1/6 relative flex lg:pl-14 gap-5 items-baseline'>

            <img className='rounded-2xl h-fit grow shrink min-w-0' src={InstaIntro1} alt='' />
            <img className='rounded-2xl h-fit grow shrink min-w-0' src={InstaIntro2} alt='' />
            <img
              className='absolute top-[-5%] left-[42%] z-[-1] spin-right'
              src={OrangeCircleImg}
              alt='Orange Circle'
            />
            <Link className='group '>
              <div style={{ left: '40%', right: 'unset' }} className='iconbox-style5 flex items-center shadow-lg dark:bg-midnight/90 hover:!bg-orangePrimaryLightHover'>
                <span className='transition-all duration-400 ease bg-orangePrimary bg-opacity-10 w-[70px] h-[70px] rounded-full group-hover:bg-white group-hover:bg-opacity-10 flex items-center justify-center'>
                  <svg width='27' height='31' viewBox='0 0 27 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path className='transition-all duration-400 ease fill-orangePrimary group-hover:fill-white' d='M23.0326 30.8938C21.9314 30.8938 20.9938 30.5104 20.2198 29.7436C19.4458 28.979 19.0588 28.0494 19.0588 26.955C19.0588 26.7449 19.0774 26.528 19.1144 26.3043C19.1504 26.0795 19.2049 25.8684 19.278 25.6709L6.98188 18.4834C6.59329 18.9183 6.14118 19.257 5.62553 19.4996C5.11094 19.7433 4.55929 19.8652 3.97059 19.8652C2.86729 19.8652 1.93024 19.4828 1.15941 18.7182C0.386471 17.9525 0 17.0229 0 15.9295C0 14.8372 0.386471 13.9071 1.15941 13.1393C1.92918 12.3715 2.86624 11.9876 3.97059 11.9876C4.55929 11.9876 5.11094 12.1094 5.62553 12.3531C6.14118 12.5957 6.59329 12.9345 6.98188 13.3693L19.278 6.18182C19.2049 5.98435 19.1504 5.77323 19.1144 5.54846C19.0774 5.32474 19.0588 5.10784 19.0588 4.89777C19.0588 3.80331 19.4448 2.87376 20.2166 2.10911C20.9875 1.34236 21.924 0.958984 23.0262 0.958984C24.1274 0.958984 25.065 1.34183 25.839 2.10753C26.613 2.87218 27 3.80121 27 4.89462C27 5.98698 26.6135 6.91706 25.8406 7.68486C25.0698 8.45266 24.1327 8.83656 23.0294 8.83656C22.4407 8.83656 21.8891 8.71472 21.3745 8.47104C20.8588 8.22841 20.4067 7.88967 20.0181 7.45483L7.722 14.6423C7.79506 14.8398 7.84959 15.0499 7.88559 15.2725C7.92265 15.4963 7.94118 15.7121 7.94118 15.9201C7.94118 16.128 7.92265 16.346 7.88559 16.5739C7.84959 16.8008 7.79506 17.013 7.722 17.2104L20.0181 24.3979C20.4067 23.9631 20.8588 23.6243 21.3745 23.3817C21.8891 23.138 22.4407 23.0162 23.0294 23.0162C24.1327 23.0162 25.0698 23.399 25.8406 24.1647C26.6135 24.9294 27 25.8584 27 26.9518C27 28.0442 26.6146 28.9743 25.8438 29.7421C25.0719 30.5099 24.1348 30.8938 23.0326 30.8938ZM23.0294 7.26104C23.6827 7.26104 24.2434 7.02944 24.7114 6.56624C25.1783 6.10199 25.4118 5.54583 25.4118 4.89777C25.4118 4.24971 25.1783 3.69355 24.7114 3.2293C24.2434 2.7661 23.6827 2.5345 23.0294 2.5345C22.3761 2.5345 21.8155 2.7661 21.3475 3.2293C20.8805 3.69355 20.6471 4.24971 20.6471 4.89777C20.6471 5.54583 20.8805 6.10199 21.3475 6.56624C21.8155 7.02944 22.3761 7.26104 23.0294 7.26104ZM3.97059 18.2896C4.62388 18.2896 5.18453 18.058 5.65253 17.5948C6.11947 17.1306 6.35294 16.5744 6.35294 15.9264C6.35294 15.2783 6.11947 14.7222 5.65253 14.2579C5.18453 13.7947 4.62388 13.5631 3.97059 13.5631C3.31729 13.5631 2.75665 13.7947 2.28865 14.2579C1.82171 14.7222 1.58824 15.2783 1.58824 15.9264C1.58824 16.5744 1.82171 17.1306 2.28865 17.5948C2.75665 18.058 3.31729 18.2896 3.97059 18.2896ZM23.0294 29.3183C23.6827 29.3183 24.2434 29.0867 24.7114 28.6235C25.1783 28.1592 25.4118 27.603 25.4118 26.955C25.4118 26.3069 25.1783 25.7508 24.7114 25.2865C24.2434 24.8233 23.6827 24.5917 23.0294 24.5917C22.3761 24.5917 21.8155 24.8233 21.3475 25.2865C20.8805 25.7508 20.6471 26.3069 20.6471 26.955C20.6471 27.603 20.8805 28.1592 21.3475 28.6235C21.8155 29.0867 22.3761 29.3183 23.0294 29.3183Z' />
                  </svg>
                </span>
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
