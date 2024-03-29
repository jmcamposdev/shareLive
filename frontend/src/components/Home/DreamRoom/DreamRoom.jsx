import './DreamRoom.css'
import GreyCircleImage from '../../../assets/img/home/dreamRoom/greyCircle.png'
import CircleLine from '../../../assets/vectors/circleLine-2.svg'
import DreamImage from '../../../assets/img/home/dreamRoom/dreamRoom-3.png'
import VerticalMeshImage from '../../../assets/vectors/verticalMesh.svg'
import { Link } from 'react-router-dom'

const DreamRoom = () => {
  return (
    <section className='about-us'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap justify-around mt80 mt0-md'>
          <div className='md:w-1/2 pr-4 pl-4 xl:w-1/2'>
            <div className='relative'>
              <div className='img-box-7'>
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
              <a href='/'>
                <div className='!left-auto !bottom-auto iconbox-style5 flex items-center shadow-lg right-[13%] top-[35%] '>
                  <span className='icon flaticon-home flex-shrink-0' />
                </div>
              </a>
              <img
                className='absolute top-[10%] right-3 z-[-1]'
                src={VerticalMeshImage}
                alt='Vertical Mesh'
              />
              <div className='img-box-10 relative'>
                <div className='listing-style1 mini-style bounce-y'>
                  <div className='list-content'>
                    <h6 className='list-title'>
                      <Link href='/single-v1/1'>Rego Park Room</Link>
                    </h6>
                    <h6 className='list-title'>
                      $250 / month
                    </h6>
                    <p className='list-text'>
                      <i className='fa-solid fa-location-dot pr-3' />
                      Málaga, Spain
                    </p>
                    <div className='list-meta d-flex align-items-center'>
                      <a href='#'>
                        <span className='flaticon-bed' />
                        3 bed
                      </a>
                      <a href='#'>
                        <span className='flaticon-shower' />
                        2 bath
                      </a>
                      <a href='#'>
                        <span className='flaticon-expand' />
                        30 sqft
                      </a>
                    </div>
                    <Link href='/single-v1/1' className='btn mt15 fz15'>
                      View Room
                      <i className='fal fa-arrow-right-long' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End col */}

          <div className='md:w-1/2 pr-4 pl-4 xl:w-1/3 xl:mx-1/5 relative'>
            <div className='about-box-1'>
              <h2 className='title mb30'>With Us Help You Find Your Dream Home</h2>
              <p className='text mb20 fz15'>
                As the complexity of buildings to increase, the field of
                architecture.
              </p>
              <ul className='flex flex-col gap-8 pb-9'>
                <li className='flex items-center'>
                  <span className='!flex dreamRoom-check icon fa-regular fa-check mr-4' />
                  <span className='text-[17px]'> Ensuring student satisfaction, guaranteed</span>
                </li>
                <li className='flex items-center'>
                  <span className='!flex dreamRoom-check icon fa-regular fa-check mr-4' />
                  <span className='text-[17px]'>Your trusted partner for secure accommodation</span>
                </li>
                <li className='flex items-center'>
                  <span className='!flex dreamRoom-check icon fa-regular fa-check mr-4' />
                  <span className='text-[17px]'>Assurance of safe and comfortable living spaces</span>
                </li>
              </ul>
              <Link href='#' className='ud-btn btn-thm'>
                See More
                <i className='fal fa-arrow-right-long' />
              </Link>
              <img className='absolute right-0 -bottom-[60px]' src={CircleLine} alt='' />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  )
}

export default DreamRoom
