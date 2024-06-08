import Paris from '../../../assets/vectors/paris.svg'
import London from '../../../assets/vectors/london.svg'
import NewYork from '../../../assets/vectors/newYork.svg'
import { Link } from 'react-router-dom'

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
              <h2 className='title dark:text-white'>Our most popular offices</h2>
              <p className='paragraph dark:text-white'>
                ShareLive has more than 20 offices redistributed around the world, all waiting to answer your questions.
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
                <p className='text mb-1 dark:text-white'>145 Rue Saint-Honoré</p>
                <h6 className='mb10 dark:text-white'>(315) 905-2321</h6>
                <Link className='text-decoration-underline dark:text-white dark:hover:text-[#eb6753]' to='https://www.google.es/maps/place/Par%C3%ADs,+Francia/@48.8619324,2.3396418,19z/data=!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?hl=es&entry=ttu'>
                  Open Google Maps
                </Link>
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
                <p className='text mb-1 dark:text-white'>Bedford Square, London WC1B 3RA</p>
                <h6 className='mb10 dark:text-white'>(315) 905-2321</h6>
                <Link className='text-decoration-underline dark:text-white dark:hover:text-[#eb6753]' to='https://www.google.es/maps/place/Bedford+Square,+London+WC1B+3RA,+Reino+Unido/@51.5193842,-0.1309258,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x47d8a00baf21de75:0x52963a5addd52a99!2sLondres,+Reino+Unido!3b1!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw!3m5!1s0x48761b2df62cf6ef:0x6e9a21860e09c19c!8m2!3d51.5193821!4d-0.1292717!16s%2Fg%2F11t6kvh9f_?hl=es&entry=ttu'>
                  Open Google Maps
                </Link>
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
                <p className='text mb-1 dark:text-white'>97-93 Richards St, Brooklyn, NY 11231</p>
                <h6 className='mb10 dark:text-white'>(315) 905-2321</h6>
                <Link className='text-decoration-underline dark:text-white dark:hover:text-[#eb6753]' to='https://www.google.es/maps/place/97-93+Richards+St,+Brooklyn,+NY+11231,+EE.+UU./@40.6776418,-74.0117665,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNueva+York,+EE.+UU.!3b1!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2!3m5!1s0x89c25a8a5156f62d:0xd0ae6fcbf8d3eb95!8m2!3d40.6776388!4d-74.009857!16s%2Fg%2F11n135t950?hl=es&entry=ttu'>
                  Open Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurOffice
