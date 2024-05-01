import LoadingSkeleton from '../Loading/LoadingSkeleton'

const DescriptionSingleSkeleton = () => {
  return (
    <div className='flex flex-wrap '>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='agent-single-details mt30 pb30'>
          <h6 className='fz17 mb30 dark:text-white'>
            <LoadingSkeleton className='w-1/2 h-6' />
          </h6>
          <p
            className='text dark:text-white transition-all duration-300 overflow-y-hidden flex flex-col gap-2'
          >
            <LoadingSkeleton className='h-[18px] w-full' />
            <LoadingSkeleton className='h-[18px] w-full' />
            <LoadingSkeleton className='h-[18px] w-3/5' />
          </p>

          <div className='agent-single-accordion'>
            <div className='accordion accordion-flush' id='accordionFlushExample'>
              <div className='accordion-item bg-transparent'>
                <h2 className='accordion-header' id='flush-headingOne'>
                  <button className='accordion-button p-0 collapsed  dark:text-white' type='button' aria-expanded='true' aria-controls='flush-collapseOne'>
                    <LoadingSkeleton className='h-5 w-24' />
                  </button>
                </h2>
              </div>
            </div>
          </div>

        </div>
        <LoadingSkeleton className='w-full h-px' />
      </div>
    </div>
  )
}

export default DescriptionSingleSkeleton
