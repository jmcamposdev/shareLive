import LoadingSkeleton from '../Loading/LoadingSkeleton'

const DescriptionSkeleton = () => {
  return (
    <>
      <div className='overview-element flex items-center'>
        <div className='w-full'>
          <LoadingSkeleton className='w-4/5 mb10 text h-[18px] ' />
          <div className='agent-single-accordion'>
            <div
              className='accordion accordion-flush'
              id='accordionFlushExample'
            >
              <div className='accordion-item dark:bg-midnight'>
                <div
                  id='flush-collapseOne'
                  className='accordion-collapse collapse'
                  aria-labelledby='flush-headingOne'
                  data-bs-parent='#accordionFlushExample'
                  style={{}}
                >
                  <div className='accordion-body p-0 dark:bg-midnight'>
                    <p className='text dark:text-white' />
                  </div>
                </div>
                <h2 className='accordion-header' id='flush-headingOne'>
                  <button
                    className='accordion-button p-0 collapsed dark:text-white dark:bg-midnight'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#flush-collapseOne'
                    aria-expanded='false'
                    aria-controls='flush-collapseOne'
                  >
                    <LoadingSkeleton className='w-[80px] h-[20px]' />
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DescriptionSkeleton
