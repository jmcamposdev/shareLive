import LeftHalfBlob from '../../../assets/img/aboutUs/leftHalfBlob.png'
import RightHalfBlob from '../../../assets/img/aboutUs/rightHalfBlob.png'

const FaqIntro = () => {
  return (
    <section className='our-about pb90 pt90 relative'>
      <div style={{ height: 'calc(100% + 210px)' }} className='w-full top-0 absolute -z-20 bg-f7f7f7 dark:bg-lightmidnight' />
      <img className='dark:hidden absolute max-w-[450px] -z-10 left-0 top-[14rem] hidden lg:block' src={LeftHalfBlob} alt='' />

      <svg className='dark:block hidden absolute -z-10 w-[600px] top-[16rem] left-[-302px]' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <path className='lg:block hidden' fill='#181a20' d='M40,-56C53.4,-45.3,67,-35.7,65.8,-24.8C64.6,-13.9,48.6,-1.7,39.5,8.6C30.3,18.8,27.9,27,22.5,34.1C17,41.1,8.5,47,-5.1,54.1C-18.7,61.1,-37.5,69.2,-52.8,65.4C-68.1,61.5,-79.9,45.7,-82.1,29C-84.3,12.4,-76.8,-5.1,-71.2,-23.4C-65.6,-41.8,-62.1,-61.2,-50.5,-72.5C-39,-83.8,-19.5,-87.2,-3.1,-82.9C13.3,-78.6,26.5,-66.7,40,-56Z' transform='translate(100 100)' />
      </svg>
      <svg className='dark:block hidden absolute -z-[9] w-[500px] left-[-220px] top-[235px] rotate-[12deg]' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='56%' stopColor='rgba(232,70,46,1)' />
          <stop offset='100%' stopColor='rgba(222,117,101,1)' />
        </linearGradient>
        <path className='lg:block hidden' fill='url(#gradient1)' d='M19.1,-24.8C27.8,-20,39.9,-18.5,41.7,-13.5C43.4,-8.5,34.8,0,30.9,9.4C27,18.8,27.8,29.2,23.5,43.7C19.1,58.2,9.6,76.8,-0.6,77.6C-10.7,78.5,-21.5,61.4,-34.8,49.8C-48.1,38.2,-64,32.1,-67.5,21.8C-71,11.5,-62.2,-2.9,-56.3,-17.4C-50.3,-31.8,-47.3,-46.3,-38.4,-51.1C-29.5,-55.8,-14.7,-50.7,-4.8,-44.2C5.2,-37.6,10.4,-29.6,19.1,-24.8Z' transform='translate(100 100)' />
      </svg>

      <img className='dark:hidden absolute max-w-[380px] -z-10 right-0 top-[38rem] lg:block hidden' src={RightHalfBlob} alt='' />
      <svg className='hidden dark:block absolute w-[500px] right-[-292px] top-[546px] -z-10' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <linearGradient id='gradient2' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='rgba(222,117,101,1)' />
          <stop offset='36%' stopColor='rgba(232,70,46,1)' />
        </linearGradient>
        <path className='lg:block hidden' fill='url(#gradient2)' d='M31.8,-0.6C31.8,22.8,15.9,45.6,-7.7,45.6C-31.3,45.6,-62.7,22.8,-62.7,-0.6C-62.7,-24,-31.3,-48,-7.7,-48C15.9,-48,31.8,-24,31.8,-0.6Z' transform='translate(100 100)' />
      </svg>
      <svg className='hidden dark:block absolute w-[600px] right-[-303px] rotate-[61deg] -z-[11] top-[510px]' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <path className='lg:block hidden' fill='#181A20' d='M43.1,-18.7C48.6,3,40.9,24.3,23.8,37.9C6.7,51.5,-19.7,57.5,-37.7,45.9C-55.7,34.2,-65.3,4.9,-57.6,-19.7C-49.9,-44.3,-24.9,-64.4,-3.1,-63.4C18.8,-62.4,37.6,-40.3,43.1,-18.7Z' transform='translate(100 100)' />
      </svg>

      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap  aos-init aos-animate' data-aos='fade-up' data-aos-delay='300'>
          <div className='lg:w-1/2 pr-4 pl-4'>
            <p className='text-xl mb-1.5 font-medium text-orangePrimary'>Frequently Asked Questions</p>
            <h2 className='dark:text-white'>Changing the landscape: Our <br className='hidden lg:block' /> Mission in Room Rentals.</h2>
          </div>
          <div className='lg:w-1/2 pr-4 pl-4'>
            <p className='text mb25 dark:text-white'>At ShareLive, we <span className='font-semibold'>understand</span> that when looking for a new student home, many questions arise. Don't worry, we are here to <span className='font-semibold'>help</span> you clarify any concerns you may have. In our Frequently Asked Questions (FAQ) section, we have compiled the most <span className='font-semibold'>common queries</span> from our user community and provided detailed and clear answers. </p>
            <p className='text mb55 dark:text-white'>At ShareLive, our commitment to your <span className='font-semibold'>comfort</span> and satisfaction extends beyond just providing housing solutions. We strive to offer comprehensive support throughout your journey in finding the <span className='font-semibold'>perfect</span> student home.</p>
            <div className='flex flex-wrap '>
              <div className='sm:w-1/2 pr-4 pl-4'>
                <div className='why-chose-list style3'>
                  <div className='list-one mb30 group'>
                    <span className='dark:!hidden list-icon flex-shrink-0 mb20 items-center justify-center group-hover:!bg-orangePrimary !bg-orangePrimaryLight' style={{ display: 'flex' }}>
                      <svg fill='none' width='30' height='30' viewBox='0 0 16 14' xmlns='http://www.w3.org/2000/svg'>
                        <path className='stroke-black group-hover:stroke-white transition-all duration-500 ease' d='M8.9101 1.51106L7.84998 2.57717L6.78986 1.52004C6.12216 0.938605 5.25866 0.632268 4.37381 0.66292C3.48896 0.693572 2.64872 1.05893 2.02285 1.68518C1.39699 2.31143 1.03214 3.15188 1.00202 4.03675C0.971909 4.92162 1.27877 5.78493 1.86061 6.45229L2.92073 7.5124L5.39135 9.98302L7.84998 12.4596L10.3206 9.98901L12.7912 7.51839L13.8393 6.45229C14.4713 5.79231 14.8197 4.91106 14.8098 3.99735C14.7999 3.08363 14.4325 2.21014 13.7864 1.56401C13.1403 0.917876 12.2668 0.550508 11.3531 0.540611C10.4393 0.530713 9.55809 0.879075 8.89812 1.51106H8.9101Z' strokeWidth='0.8' />
                      </svg>
                    </span>
                    <span className='transition-all duration-500 ease bg-midnight dark:flex hidden group-hover:bg-orangePrimary rounded-full w-[70px] h-[70px] flex-shrink-0 mb20 items-center justify-center'>
                      <svg fill='none' width='30' height='30' viewBox='0 0 16 14' xmlns='http://www.w3.org/2000/svg'>
                        <path className='stroke-white transition-all duration-500 ease' d='M8.9101 1.51106L7.84998 2.57717L6.78986 1.52004C6.12216 0.938605 5.25866 0.632268 4.37381 0.66292C3.48896 0.693572 2.64872 1.05893 2.02285 1.68518C1.39699 2.31143 1.03214 3.15188 1.00202 4.03675C0.971909 4.92162 1.27877 5.78493 1.86061 6.45229L2.92073 7.5124L5.39135 9.98302L7.84998 12.4596L10.3206 9.98901L12.7912 7.51839L13.8393 6.45229C14.4713 5.79231 14.8197 4.91106 14.8098 3.99735C14.7999 3.08363 14.4325 2.21014 13.7864 1.56401C13.1403 0.917876 12.2668 0.550508 11.3531 0.540611C10.4393 0.530713 9.55809 0.879075 8.89812 1.51106H8.9101Z' strokeWidth='0.8' />
                      </svg>
                    </span>
                    <div className='list-content flex-grow-1'>
                      <h6 className='mb-1 dark:text-white'>Heartfelt Guidance</h6>
                      <p className='text mb-0 fz14 dark:text-white'>Guided by ShareLive's Care <br className='hidden sm:block' /> with love.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sm:w-1/2 pr-4 pl-4'>
                <div className='why-chose-list style3'>
                  <div className='list-one mb30 group'>
                    <span className='dark:!hidden list-icon flex-shrink-0 mb20 items-center justify-center group-hover:!bg-orangePrimary !bg-orangePrimaryLight' style={{ display: 'flex' }}>
                      <svg width='30' height='30' viewBox='0 0 18 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path className='fill-black group-hover:fill-white transition-all duration-500 ease' d='M15.4657 8.98985C15.4657 7.06978 14.8281 5.52633 13.5529 4.3595C12.2791 3.19266 10.602 2.60925 8.52168 2.60925C7.17759 2.60925 6.00506 2.8763 5.00408 3.41042C4.00311 3.94316 3.13721 4.76488 2.40641 5.87556C2.17811 6.19055 1.88566 6.38776 1.52903 6.46719C1.17106 6.54663 0.84956 6.4761 0.564532 6.2556C0.325433 6.07346 0.180217 5.83516 0.128885 5.54071C0.0789036 5.24489 0.135639 4.96414 0.299091 4.69845C1.27575 3.1865 2.44423 2.06281 3.80453 1.32737C5.16348 0.59057 6.73586 0.222168 8.52168 0.222168C11.2774 0.222168 13.5272 1.03224 15.2712 2.65239C17.0165 4.27253 17.8891 6.36927 17.8891 8.94261C17.8891 10.3779 17.5811 11.7179 16.9651 12.9628C16.3491 14.2091 15.388 15.4211 14.0818 16.5989C12.4945 18.0068 11.403 19.1894 10.8073 20.1467C10.2129 21.1053 9.90022 22.1701 9.86915 23.3411C9.83808 23.6889 9.70637 23.9786 9.47402 24.21C9.24168 24.4429 8.958 24.5593 8.62299 24.5593C8.28799 24.5593 8.00431 24.4388 7.77196 24.1977C7.53827 23.9567 7.42142 23.6657 7.42142 23.3247C7.42142 21.9113 7.7544 20.6219 8.42037 19.4564C9.08498 18.291 10.1967 17.0125 11.7556 15.6211C13.1402 14.3967 14.1047 13.2799 14.6491 12.2705C15.1935 11.2598 15.4657 10.1663 15.4657 8.98985ZM8.52168 35.7777C7.97864 35.7777 7.50517 35.573 7.10127 35.1635C6.69601 34.7526 6.49339 34.2726 6.49339 33.7234C6.49339 33.1743 6.69601 32.6942 7.10127 32.2834C7.50517 31.8739 7.97796 31.6692 8.51965 31.6692C9.06134 31.6692 9.53549 31.8739 9.94209 32.2834C10.346 32.6942 10.5479 33.1743 10.5479 33.7234C10.5479 34.2726 10.3453 34.7526 9.94007 35.1635C9.53751 35.573 9.06472 35.7777 8.52168 35.7777Z' />
                      </svg>
                    </span>
                    <span className='transition-all duration-500 ease dark:flex hidden bg-midnight group-hover:bg-orangePrimary rounded-full w-[70px] h-[70px] flex-shrink-0 mb20 items-center justify-center'>
                      <svg width='30' height='30' viewBox='0 0 18 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path className='fill-white transition-all duration-500 ease' d='M15.4657 8.98985C15.4657 7.06978 14.8281 5.52633 13.5529 4.3595C12.2791 3.19266 10.602 2.60925 8.52168 2.60925C7.17759 2.60925 6.00506 2.8763 5.00408 3.41042C4.00311 3.94316 3.13721 4.76488 2.40641 5.87556C2.17811 6.19055 1.88566 6.38776 1.52903 6.46719C1.17106 6.54663 0.84956 6.4761 0.564532 6.2556C0.325433 6.07346 0.180217 5.83516 0.128885 5.54071C0.0789036 5.24489 0.135639 4.96414 0.299091 4.69845C1.27575 3.1865 2.44423 2.06281 3.80453 1.32737C5.16348 0.59057 6.73586 0.222168 8.52168 0.222168C11.2774 0.222168 13.5272 1.03224 15.2712 2.65239C17.0165 4.27253 17.8891 6.36927 17.8891 8.94261C17.8891 10.3779 17.5811 11.7179 16.9651 12.9628C16.3491 14.2091 15.388 15.4211 14.0818 16.5989C12.4945 18.0068 11.403 19.1894 10.8073 20.1467C10.2129 21.1053 9.90022 22.1701 9.86915 23.3411C9.83808 23.6889 9.70637 23.9786 9.47402 24.21C9.24168 24.4429 8.958 24.5593 8.62299 24.5593C8.28799 24.5593 8.00431 24.4388 7.77196 24.1977C7.53827 23.9567 7.42142 23.6657 7.42142 23.3247C7.42142 21.9113 7.7544 20.6219 8.42037 19.4564C9.08498 18.291 10.1967 17.0125 11.7556 15.6211C13.1402 14.3967 14.1047 13.2799 14.6491 12.2705C15.1935 11.2598 15.4657 10.1663 15.4657 8.98985ZM8.52168 35.7777C7.97864 35.7777 7.50517 35.573 7.10127 35.1635C6.69601 34.7526 6.49339 34.2726 6.49339 33.7234C6.49339 33.1743 6.69601 32.6942 7.10127 32.2834C7.50517 31.8739 7.97796 31.6692 8.51965 31.6692C9.06134 31.6692 9.53549 31.8739 9.94209 32.2834C10.346 32.6942 10.5479 33.1743 10.5479 33.7234C10.5479 34.2726 10.3453 34.7526 9.94007 35.1635C9.53751 35.573 9.06472 35.7777 8.52168 35.7777Z' />
                      </svg>
                    </span>
                    <div className='list-content flex-grow-1'>
                      <h6 className='mb-1 dark:text-white'>More Questions</h6>
                      <p className='text mb-0 fz14 dark:text-white'>Answers Await with ShareLive <br className='hidden sm:block' /> we are here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqIntro
