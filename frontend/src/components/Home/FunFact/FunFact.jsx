import funFactCardsData from '../../../data/home/funFacts.jsx'
import topImage from '../../../assets/img/home/funFact/funfact-1.png'
import bottomImage from '../../../assets/img/home/funFact/funfact-2.png'
import FunFactCards from './FunFactCards'

const FunFact = () => {
  return (
    <section className='bgc-thm-light pb90 mt90 mb90 dark:bg-orangePrimary/35 relative'>

      <img
        className='funfact-floating-img1 hidden lg:block '
        src={bottomImage}
        alt='illustration'
      />
      <img
        className='funfact-floating-img2 wow zoomIn hidden lg:block '
        src={topImage}
        alt='illustration'
      />
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap  items-center justify-between'>
          <div
            className='md:w-1/2 pr-4 pl-4 xl:w-2/5 wow fadeInRight'
            data-wow-delay='100ms'
          >
            <div className='cta-style6 mb30-sm'>
              <h2 className='cta-title mb25 dark:text-white'>
                Over 20 Years Dedicated to Providing Student Accommodation Solutions{' '}
              </h2>
              <p className='cta-text fz15 mb25 dark:text-slate-300'>
                Established with a commitment to excellence, our venture boasts over two  decades of unwavering dedication in delivering superior student  accommodation solutions.
              </p>
              <a href='/contact' className='ud-btn bg-gray-900 text-white hover:bg-gray-900 rounded-2xl'>
                See More <i className='fal fa-arrow-right-long' />
              </a>
            </div>
          </div>
          <div
            className='md:w-1/2 pr-4 pl-4 xl:w-1/2 xl:mx-1/6 wow fadeInLeft w-full'
            data-wow-delay='300ms'
          >
            <div className='flex flex-wrap  items-center w-full'>
              <FunFactCards funFacts={funFactCardsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunFact
