import './DreamRoom.css'
import GreyCircleImage from '../../../assets/img/home/dreamRoom/greyCircle.png'
import CircleLine from '../../../assets/vectors/circleLine-2.svg'
import DreamImage from '../../../assets/img/home/dreamRoom/dreamRoom-3.png'
import VerticalMeshImage from '../../../assets/vectors/verticalMesh.svg'
import { Link } from 'react-router-dom'

const DreamRoom = () => {
  return (
    <section className='about-us relative'>
      <div className='-z-10 absolute w-full h-full hidden dark:block top-0 left-0 dark:bg-lightmidnight' />
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap justify-around mt80 mt0-md'>
          <div className='md:w-1/2 pr-4 pl-4 xl:w-1/2'>
            <div className='relative'>
              <div className='img-box-7 relative'>
                <div style={{ borderRadius: '4%', borderWidth: '11px' }} className=' absolute w-[59%] hidden dark:block  border-lightmidnight h-[58%] bottom-0 right-[-1px] box-border' />
                <img
                  width={591}
                  height={768}
                  className='w-full h-full cover img-1'
                  src={DreamImage}
                  alt='about'
                />
              </div>
              <div className='img-box-8 relative'>
                <img
                  width={193}
                  height={193}
                  className='img-1 spin-right'
                  src={GreyCircleImage}
                  alt='about'
                />
              </div>
              <p>
                <div className='!left-auto !bottom-auto iconbox-style5 flex items-center shadow-lg right-[13%] top-[35%] dark:bg-midnight/90 group hover:dark:bg-orangePrimary'>
                  <span className='icon flaticon-home flex-shrink-0 dark:hover:bg-orangePrimaryLightHover' />
                </div>
              </p>
              <img
                className='absolute top-[10%] right-3 z-[-1]'
                src={VerticalMeshImage}
                alt='Vertical Mesh'
              />
              <div className='img-box-10 relative'>
                <div className='listing-style1 mini-style bounce-y dark:bg-midnight/90'>
                  <div className='list-content'>
                    <h6 className='list-title'>
                      <a className='dark:text-white'>Rego Park Room</a>
                    </h6>
                    <h6 className='list-title dark:text-white'>
                      $250 / month
                    </h6>
                    <p className='list-text'>
                      <i className='fa-solid fa-location-dot pr-3' />
                      Málaga, Spain
                    </p>
                    <div className='list-meta d-flex align-items-center dark:text-white'>
                      <Link className='group'>
                        <span className='flaticon-bed dark:text-white group-hover:dark:text-orangePrimary' />
                        <div className='dark:text-white inline group-hover:dark:text-orangePrimary'>3 beds</div>
                      </Link>
                      <Link className='dark:text-white group'>
                        <span className='flaticon-shower dark:text-white group-hover:dark:text-orangePrimary' />
                        <div className='dark:text-white inline group-hover:dark:text-orangePrimary'>2 baths</div>
                      </Link>
                      <Link className='group'>
                        <span className='flaticon-expand dark:text-white group-hover:dark:text-orangePrimary' />
                        <div className='dark:text-white inline group-hover:dark:text-orangePrimary'>30 sqft</div>
                      </Link>
                    </div>
                    <Link className='btn mt15 fz15 dark:!text-white'>
                      View Room
                      <i className='fal fa-arrow-right-long dark:text-white' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End col */}

          <div className='md:w-1/2 pr-4 pl-4 xl:w-1/3 xl:mx-1/5 relative'>
            <div className='about-box-1'>
              <h2 className='title mb30 dark:text-white'>With Us Help You Find Your Dream Home</h2>
              <p className='text mb20 fz15 dark:text-white'>
                As the complexity of buildings to increase, the field of
                architecture.
              </p>
              <ul className='flex flex-col gap-8 pb-9'>
                <li className='flex items-center'>
                  <span className='!flex dreamRoom-check icon fa-regular fa-check mr-4 dark:!hidden' />
                  <svg className='mr-4 hidden dark:inline' xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'>
                    <path opacity='0.15' d='M25 0.759521C38.8071 0.759521 50 11.9524 50 25.7595C50 39.5666 38.8071 50.7595 25 50.7595C11.1929 50.7595 0 39.5666 0 25.7595C0 11.9524 11.1929 0.759521 25 0.759521Z' fill='url(#paint0_radial_2412_727)' />
                    <path d='M33 20.2595L22 31.2595L17 26.2595' stroke='#EB6753' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <defs>
                      <radialGradient id='paint0_radial_2412_727' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(25 25.7595) rotate(90) scale(25)'>
                        <stop stopColor='#EB6753' />
                        <stop offset='0.495043' stopColor='#EB6753' stopOpacity='0.38' />
                        <stop offset='1' stopColor='white' stopOpacity='0' />
                      </radialGradient>
                    </defs>
                  </svg>
                  <span className='text-[17px] dark:text-white'> Ensuring student satisfaction, guaranteed</span>
                </li>
                <li className='flex items-center'>
                  <span className='!flex dreamRoom-check icon fa-regular fa-check mr-4 dark:!hidden' />
                  <svg className='mr-4 hidden dark:inline' xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'>
                    <path opacity='0.15' d='M25 0.759521C38.8071 0.759521 50 11.9524 50 25.7595C50 39.5666 38.8071 50.7595 25 50.7595C11.1929 50.7595 0 39.5666 0 25.7595C0 11.9524 11.1929 0.759521 25 0.759521Z' fill='url(#paint0_radial_2412_727)' />
                    <path d='M33 20.2595L22 31.2595L17 26.2595' stroke='#EB6753' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <defs>
                      <radialGradient id='paint0_radial_2412_727' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(25 25.7595) rotate(90) scale(25)'>
                        <stop stopColor='#EB6753' />
                        <stop offset='0.495043' stopColor='#EB6753' stopOpacity='0.38' />
                        <stop offset='1' stopColor='white' stopOpacity='0' />
                      </radialGradient>
                    </defs>
                  </svg>
                  <span className='text-[17px] dark:text-white'>Your trusted partner for secure accommodation</span>
                </li>
                <li className='flex items-center'>

                  <span className='!flex dreamRoom-check icon fa-regular fa-check mr-4 dark:!hidden' />
                  <svg className='mr-4 hidden dark:inline' xmlns='http://www.w3.org/2000/svg' width='50' height='51' viewBox='0 0 50 51' fill='none'>
                    <path opacity='0.15' d='M25 0.759521C38.8071 0.759521 50 11.9524 50 25.7595C50 39.5666 38.8071 50.7595 25 50.7595C11.1929 50.7595 0 39.5666 0 25.7595C0 11.9524 11.1929 0.759521 25 0.759521Z' fill='url(#paint0_radial_2412_727)' />
                    <path d='M33 20.2595L22 31.2595L17 26.2595' stroke='#EB6753' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    <defs>
                      <radialGradient id='paint0_radial_2412_727' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(25 25.7595) rotate(90) scale(25)'>
                        <stop stopColor='#EB6753' />
                        <stop offset='0.495043' stopColor='#EB6753' stopOpacity='0.38' />
                        <stop offset='1' stopColor='white' stopOpacity='0' />
                      </radialGradient>
                    </defs>
                  </svg>

                  <span className='text-[17px] dark:text-white'>Assurance of safe and comfortable living spaces</span>
                </li>
              </ul>
              <Link to='rooms' className='ud-btn btn-thm'>
                See More
                <i className='fal fa-arrow-right-long' />
              </Link>
              <img className='absolute right-0 -bottom-[60px] dark:brightness-[10000%]' src={CircleLine} alt='' />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  )
}

export default DreamRoom
