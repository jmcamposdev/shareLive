import LoadingImg from '../../../components/common/Loading/LoadingImg'
import LoadingSkeleton from '../../../components/common/Loading/LoadingSkeleton'

import UserReviewsStatsSkeleton from '../../../components/common/SingleUser/UserReviewStatsSkeleton'
import UserSocialsSkeleton from '../../../components/common/SingleUser/UserSocialsSkeleton'

const UserHeaderSingleSkeleton = () => {
  return (
    <div className='bg-transparent cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 relative mx20-lg overflow-hidden'>
      <div className='w-full h-full absolute top-0 left-0 opacity-75 dark:opacity-60'>
        <LoadingSkeleton className='w-full h-full opacity-10' innerClasses='rounded-none' />
      </div>
      <div className='container mx-auto sm:px-4 relative '>
        <div className='flex flex-wrap  items-center'>
          <div className='xl:w-3/5 pr-4 pl-4'>
            <div className='agent-single sm:flex items-center'>
              <div className=' single-img mb30-sm rounded-full overflow-hidden w-[172px] h-[172px] shadow-sm'>
                <LoadingImg className='w-full h-full' />
              </div>
              <div className='single-contant ml30 ml0-xs'>
                <h2 className='title dark:text-white mb-2'>
                  <LoadingSkeleton className='h-8 w-80' innerClasses='shadow-sm' />
                </h2>
                {/* <p className='fz15'>Renter in <b>`${user.zone}`</b></p> */}
                <div className='agent-meta mb15 mt15 md:flex items-center'>
                  <UserReviewsStatsSkeleton />
                  <a className='text fz15 pe-2 ps-2  dark:text-white'>
                    <LoadingSkeleton className='w-28 h-6' innerClasses='shadow-sm' />
                  </a>
                  <a className='text fz15 ps-2 dark:text-white'>
                    <LoadingSkeleton className='w-28 h-6' innerClasses='shadow-sm' />
                  </a>
                </div>
                <UserSocialsSkeleton />
              </div>
            </div>
            <div className='img-box-11 relative hidden xl:block'>
              <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent dark:hidden' />
              <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent hidden dark:block !z-10' />
              <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent dark:hidden' />
              <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent hidden dark:block' />
              <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent dark:hidden' />
              <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent hidden dark:block' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHeaderSingleSkeleton
