import LoadingSkeleton from '../Loading/LoadingSkeleton'

const PropertyHeaderSkeleton = () => {
  return (
    <>
      <div className='flex-[0_0_auto] w-full md:w-1/3 px-[12px]'>
        <div className='single-property-content mb30-md'>
          <h2 className='sp-lg-title dark:text-white h-7'><LoadingSkeleton className='h-full w-full' /></h2>
          <div className='pd-meta mb15 d-md-flex align-items-center'>
            <LoadingSkeleton className='w-3/5 h-5' />
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className='flex-[0_0_auto] w-full md:w-1/3 px-[12px]'>
        <div className='single-property-content'>
          <div className='property-action lg:text-right'>
            <div className='flex mb-[20px] mb10-md items-center justify-start lg:justify-end'>
              <LoadingSkeleton className='h-[35px] w-[35px] mr-[10px]' innerClasses='rounded-md' />
              <LoadingSkeleton className='h-[35px] w-[35px] mr-[10px]' innerClasses='rounded-md' />
            </div>
            <h3 className='price mb15 dark:text-white'>
              <LoadingSkeleton className='h-7 w-3/5 ml-auto' />
            </h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  )
}

export default PropertyHeaderSkeleton
