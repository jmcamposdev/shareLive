import LoadingSkeleton from '../Loading/LoadingSkeleton'

const ScheduleTourSkeleton = () => {
  const n = 4
  return (

    <div className='ps-navtab'>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          role='tabpanel'
        >
          <form className='form-style1'>
            <div className='row'>
              {[...Array(n)].map((e, i) =>
                <div key={i} className='col-lg-12 mb20'>
                  <LoadingSkeleton className='w-full h-[55px]' innerClasses='rounded-xl' />
                </div>
              )}
              <div className='col-lg-12 mb20'>
                <LoadingSkeleton className='w-full h-[155px]' innerClasses='rounded-xl' />
              </div>
              <div className='col-lg-12'>
                <LoadingSkeleton className='w-full h-[55px]' innerClasses='rounded-xl' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTourSkeleton
