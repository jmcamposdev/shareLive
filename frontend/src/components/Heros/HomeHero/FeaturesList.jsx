import heroFeatures from '../../../data/heroFeatures'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import '../../../../node_modules/swiper/swiper-bundle.min.css'
SwiperCore.use()

const FeaturesList = () => {
  return (
    <section className='pb90 pb30-md !z-0'>
      <div className='container'>
        <div className='row justify-content-center' data-aos='fade'>
          <div className='col-lg-12'>
            <Swiper
              spaceBetween={30}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                1024: {
                  slidesPerView: 4
                },
                1200: {
                  slidesPerView: 5
                }
              }}
              autoplay={{ delay: 3000 }}
            >
              {heroFeatures.map((type) => (
                <SwiperSlide key={type.id}>
                  <div className='item group'>
                    <div className='iconbox-style4 dark:bg-midnight hover:!bg-orangePrimaryLightHover'>
                      <span className={`icon ${type.icon} dark:text-white dark:bg-lightmidnight group-hover:dark:!bg-orangePrimary`} />
                      <div className='iconbox-content'>
                        <h6 className='title dark:text-white'>{type.title}</h6>
                        <p className='text mb-0 dark:text-white'>{type.text}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesList
