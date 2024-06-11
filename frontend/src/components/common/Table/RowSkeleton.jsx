import LoadingImg from '../Loading/LoadingImg'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

const RoomSimpleSkeleton = () => {
  return (
    <>
      <tr className='flex flex-col border box-border rounded-xl overflow-hidden 2xl:border-none w-full 2xl:flex-nowrap 2xl:flex-row  !border-[#ddd] dark:!border-borderColor/20'>
        <div className='2xl:hidden px-[30px] pt-8 pb-[30px] box-border'>
          <div className='w-full flex justify-between h-fit flex-wrap-reverse !mb-7 gap-6'>

            <a className='group overflow-hidden h-[140px] aspect-square rounded-md shrink-0 block bg-cover mb-[20px] !order-last md:!order-first'>
              <LoadingImg className='h-full w-full' />
            </a>

            <div className='grow shrink flex flex-col justify-center gap-3 mb-4 order-last sm:order-5'>
              <a className='dark:text-white font-bold text-lg m-0 dark:hover:text-orangePrimary'>
                <LoadingSkeleton className='w-52 h-5' />
              </a>
              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center'>
                <span className='font-normal text-base text-[#717171]'><LoadingSkeleton className='w-44 h-4' /></span>
              </p>
            </div>

          </div>

          <div className='w-full flex flex-col  gap-4'>

            <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
              <span className='font-medium text-base text-[#717171] '><LoadingSkeleton className='w-24 h-4' /></span>
              <span className='font-normal text-base'><LoadingSkeleton className='w-24 h-4' /></span>
            </p>

            <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
              <span className='font-normal text-base'><LoadingSkeleton className='w-24 h-4' /></span>
              <span className='font-normal text-base'><LoadingSkeleton className='w-24 h-4' /></span>
            </p>

            <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
              <span className='font-normal text-base'><LoadingSkeleton className='w-24 h-4' /></span>
              <span className='font-normal text-base'><LoadingSkeleton className='w-24 h-4' /></span>
            </p>
          </div>
        </div>
        <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight hidden 2xl:block w-[40%] p-[30px] box-border'>
          <div className='list-thumb !h-[110px]'>
            <LoadingImg className='w-full h-full aspect-square' />
          </div>
          <div className='list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4'>
            <div className='h6 list-title'>
              <a
                className='dark:text-white dark:hover:!text-orangePrimary'
              >
                <LoadingSkeleton className='w-full h-5' />
              </a>
            </div>
            <p className='list-text mb-0'>
              <LoadingSkeleton className='w-36 h-4 mb-2 mt-[14px]' />
            </p>
            <div className='list-price dark:bg-midnight'>
              <p href='#' className='dark:text-white font-normal'>
                <LoadingSkeleton className='w-24 h-5' />
              </p>
            </div>
          </div>
        </div>
        <div className='hidden w-[20%] 2xl:flex justify-center items-center'>
          <LoadingSkeleton className='w-28 h-4' />
        </div>
        <div className='hidden w-[20%] 2xl:flex justify-center items-center'>
          <LoadingSkeleton className='w-28 h-4' />
        </div>
        <div className='w-full 2xl:w-[20%] flex justify-center items-center gap-4 px-[30px] py-5 2xl:p-0'>
          <LoadingSkeleton className='2xl:w-8 2xl:h-8 w-11 h-11' innerClasses='rounded-md' />
          <LoadingSkeleton className='2xl:w-8 2xl:h-8 w-11 h-11' innerClasses='rounded-md' />
        </div>
      </tr>
    </>
  )
}

export default RoomSimpleSkeleton
