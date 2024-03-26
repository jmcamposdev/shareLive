import ThreeBlobs from '../../../assets/img/aboutUs/threeBlobs.png'

const AboutIntro = () => {
  return (
    <section className='about-us'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap  mt80 mt0-md'>

          <div className='md:w-1/2 pr-4 pl-4 xl:mx-1/5'>
            <div className='about-box-1 wow fadeInLeft h-full flex flex-col justify-center' data-wow-delay='300ms' style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInLeft' }}>
              <p className='text-xl mb-1.5 font-medium text-orangePrimary'>Our History</p>
              <h2 className='title mb30'>Why Should you choose us</h2>
              <p className='text mb20 fz15 text-2xl font-light'>
                Choosing us means choosing <span className='font-semibold'>excellence</span> in student accommodation. With  over <span className='font-semibold'>two decades</span> of experience and a proven track record of providing  quality living spaces, we stand as a beacon of <span className='font-semibold'>reliability and comfort</span>  in the realm of student housing.
              </p>
            </div>
          </div>

          <div className='md:w-1/2 xl:w-1/2 pr-4 pl-16'>
            <img data-wow-delay='300ms' style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInRight' }} src={ThreeBlobs} alt='Three blobs, one is a pattern, the other is a gradient and the last one is the imgae of a hosue' className='relative wow fadeInRight' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
