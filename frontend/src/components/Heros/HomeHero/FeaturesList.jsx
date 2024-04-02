import heroFeatures from '../../../data/heroFeatures'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import '../../../../node_modules/swiper/swiper-bundle.min.css'
SwiperCore.use()
const FeaturesList = () => {
  return (
    <section className='pb90 pb30-md'>
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
                  <div className='item'>
                    <div className='iconbox-style4'>
                      <span className={`icon ${type.icon}`} />
                      <div className='iconbox-content'>
                        <h6 className='title'>{type.title}</h6>
                        <p className='text mb-0'>{type.text}</p>
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
