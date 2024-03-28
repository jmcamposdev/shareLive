import { Link } from 'react-router-dom'
import HouseImg from '../../../../assets/vectors/housesIllustration.svg'

const TopBanner = () => {
  return (
    <section className='our-cta2 p0 px20'>
      <div className='cta-banner2 bgc-thm maxw1600 mx-auto pt100 pt50-md pb85 pb50-md px30-md bdrs12 position-relative overflow-hidden'>
        <div
          className='cta-style2 d-none d-lg-block'
          data-aos='fade-left'
          data-aos-delay='300'
        >
          <img
            width={650}
            height={365}
            src={HouseImg}
            alt='element'
          />
        </div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-7 col-xl-5'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <div className='cta-style2'>
                <h2 className='cta-title'>
                  Start Listing or Buying a Property With Realton
                </h2>
                <p className='cta-text'>
                  Talk to our experts or Browse through more properties.
                </p>
                <Link href='/contact' className='ud-btn btn-dark mt10'>
                  Learn More
                  <i className='fal fa-arrow-right-long' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopBanner
