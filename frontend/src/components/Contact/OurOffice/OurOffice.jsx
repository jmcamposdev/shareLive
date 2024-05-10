import Paris from '../../../assets/vectors/paris.svg'
import London from '../../../assets/vectors/london.svg'
import NewYork from '../../../assets/vectors/newYork.svg'

const OurOffice = () => {
  return (
    <section className='pt0 pb90 pb10-md  dark:bg-lightmidnight'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-lg-6 m-auto'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='main-title text-center '>
              <h2 className='title dark:text-white'>Visit Our Office</h2>
              <p className='paragraph dark:text-white'>
                Realton has more than 9,000 offices of all sizes and all
                potential of session.
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}
        <div className='flex flex-wrap mt-0 justify-center items-center '>
          <div className='sm:w-1/2 lg:w-1/3 pr-4 pl-4 grow wow fadeInLeft ' style={{ visibility: 'visible', animationDelay: '0ms', animationName: 'fadeInLeft' }}>
            <div className='iconbox-style8 text-center dark:bg-midnight dark:hover:shadow-[0_10px_40px_#ffff]'>
              <div className='icon dark:invert'>
                <img src={Paris} alt='Paris' style={{ height: '120px', width: '120px', display: 'inline' }} />
              </div>
              <div className='iconbox-content'>
                <h4 className='title dark:text-white'>Paris</h4>
                <p className='text mb-1 dark:text-white'>1301 2nd Ave, Seattle, WA 98101</p>
                <h6 className='mb10 dark:text-white'>(315) 905-2321</h6>
                <a className='text-decoration-underline dark:text-white dark:hover:text-[#eb6753]' href='#'>
                  Open Google Map
                </a>
              </div>
            </div>
          </div>
          <div className='sm:w-1/2 pr-4 pl-4 lg:w-1/3 grow'>
            <div className='iconbox-style8 text-center active dark:bg-midnight dark:hover:shadow-[0_10px_40px_#ffff]'>
              <div className='icon dark:invert'>
                <img src={London} alt='London' style={{ height: '120px', width: '120px', display: 'inline' }} />
              </div>
              <div className='iconbox-content'>
                <h4 className='title dark:text-white '>London</h4>
                <p className='text mb-1 dark:text-white'>1301 2nd Ave, Seattle, WA 98101</p>
                <h6 className='mb10 dark:text-white'>(315) 905-2321</h6>
                <a className='text-decoration-underline dark:text-white dark:hover:text-[#eb6753]' href='#'>
                  Open Google Map
                </a>
              </div>
            </div>
          </div>
          <div className='sm:w-1/2 lg:w-1/3 pr-4 pl-4 sm:grow-0 grow'>
            <div className='iconbox-style8 text-center dark:bg-midnight dark:hover:shadow-[0_10px_40px_#ffff]'>
              <div className='icon dark:invert'>
                <img src={NewYork} alt='New York' style={{ height: '120px', width: '120px', display: 'inline' }} />
              </div>
              <div className='iconbox-content'>
                <h4 className='title dark:text-white'>New York</h4>
                <p className='text mb-1 dark:text-white'>1301 2nd Ave, Seattle, WA 98101</p>
                <h6 className='mb10 dark:text-white'>(315) 905-2321</h6>
                <a className='text-decoration-underline dark:text-white dark:hover:text-[#eb6753]' href='#'>
                  Open Google Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurOffice
