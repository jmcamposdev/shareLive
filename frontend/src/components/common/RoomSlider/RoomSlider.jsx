import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RoomSimple from '../Room/RoomSimple/RoomSimple'

const RoomSlider = ({ rooms, loading }) => {
  return (
    <div className='flex flex-wrap '>
      <div className='w-full pr-4 pl-4' data-aos='fade-up' data-aos-delay='200'>
        <div className='feature-listing-slider'>
          <Swiper
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true
            }}
            spaceBetween={30}
            loop
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.rooms_next__active',
              prevEl: '.rooms_prev__active'
            }}
            pagination={{
              el: '.rooms_pagination__active',
              clickable: true
            }}
            breakpoints={{
              300: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }}
          >
            {loading
              ? (
                <>
                  <SwiperSlide>
                    <RoomSimple loading />
                  </SwiperSlide>
                  <SwiperSlide>
                    <RoomSimple loading />
                  </SwiperSlide>
                  <SwiperSlide>
                    <RoomSimple loading />
                  </SwiperSlide>
                  <SwiperSlide>
                    <RoomSimple loading />
                  </SwiperSlide>
                  <SwiperSlide>
                    <RoomSimple loading />
                  </SwiperSlide>
                </>

                )
              : (
                  rooms.map((room) => (
                    <SwiperSlide key={room.id}>
                      <RoomSimple room={room} />
                    </SwiperSlide>
                  ))

                )}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default RoomSlider
