import TestimonialsData from '../../../data/home/testimonials'
import TestimonialsList from './TestimonialsList/TestimonialsList'

const Testimonials = () => {
  return (
    <section className='our-testimonial bgc-dark mb90'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-6 mx-auto'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='main-title text-center'>
              <h2 className='title text-white'>Testimonials</h2>
              <p className='paragraph text-white'>
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className='row'>
          <div
            className='col-lg-8 m-auto'
            data-aos='fade-up'
            data-wow-delay='500'
          >
            <div className='testimonial-style2'>
              <TestimonialsList testimonials={TestimonialsData} />
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
    </section>
  )
}

export default Testimonials
