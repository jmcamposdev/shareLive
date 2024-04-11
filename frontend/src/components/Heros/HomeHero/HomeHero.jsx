import { RoomProvider } from '../../../context/roomContext'
import AdvanceFilterModal from '../../common/advance-filter/AdvancedFilterModal'
import FeaturesList from './FeaturesList'
import HeroContent from './HeroContent'

const HomeHero = () => {
  return (
    <RoomProvider>
      <section className='home-banner-style2 p0'>
        <div className='home-style2'>
          <div className='container mx-auto sm:px-4 maxw1600'>
            <div className='home2-hero-banner bdrs12' />
            <div className='flex flex-wrap '>
              <div className='lg:w-4/5 pr-4 pl-4 mx-auto'>
                <div className='inner-banner-style2 text-center position-relative'>
                  <HeroContent />
                  <h2 className='hero-title' data-aos='fade-up' data-aos-delay='150'>
                    Find your new shared life
                  </h2>
                  <p className='hero-text fz15' data-aos='fade-up' data-aos-delay='250'>
                    Discover the perfect community to share your university life
                  </p>
                </div>
                {/* End Hero content */}

                {/* <!-- Advance Feature Modal Start --> */}
                <div className='advance-feature-modal'>
                  <div
                    className='modal fade'
                    id='advanceSeachModal'
                    tabIndex={-1}
                    aria-labelledby='advanceSeachModalLabel'
                    aria-hidden='true'
                  >
                    <AdvanceFilterModal />
                  </div>
                </div>
                {/* <!-- Advance Feature Modal End --> */}
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      <FeaturesList />
    </RoomProvider>
  )
}

export default HomeHero
