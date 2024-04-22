const OverView = ({ bedroom, bath, yearbuilt, garage, squareMeters, propertytype }) => {
  return (
    <>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25 d-flex align-items-center'>
          <span className='icon flaticon-bed !leading-[55px] dark:border-borderColor/20 dark:text-white' />
          <div className='ml15'>
            <h6 className='mb-0 dark:text-white'>Bedroom</h6>
            <p className='text mb-0 fz15 dark:text-white'>{bedroom}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25 d-flex align-items-center'>
          <span className='icon flaticon-shower !leading-[55px] dark:border-borderColor/20 dark:text-white' />
          <div className='ml15'>
            <h6 className='mb-0 dark:text-white'>Bath</h6>
            <p className='text mb-0 fz15 dark:text-white'>{bath}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25 d-flex align-items-center'>
          <span className='icon flaticon-event !leading-[55px] dark:border-borderColor/20 dark:text-white' />
          <div className='ml15'>
            <h6 className='mb-0 dark:text-white'>Year Built</h6>
            <p className='text mb-0 fz15 dark:text-white'>{yearbuilt}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25-xs d-flex align-items-center'>
          <span className='icon flaticon-garage !leading-[55px] dark:border-borderColor/20 dark:text-white' />
          <div className='ml15'>
            <h6 className='mb-0 dark:text-white'>Garage</h6>
            <p className='text mb-0 fz15 dark:text-white'>{garage}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25-xs d-flex align-items-center'>
          <span className='icon flaticon-expand !leading-[55px] dark:border-borderColor/20 dark:text-white' />
          <div className='ml15'>
            <h6 className='mb-0 dark:text-white'>Sqft</h6>
            <p className='text mb-0 fz15 dark:text-white'>{squareMeters}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element d-flex align-items-center'>
          <span className='icon flaticon-home-1 !leading-[55px] dark:border-borderColor/20 dark:text-white' />
          <div className='ml15'>
            <h6 className='mb-0 dark:text-white'>Property Type</h6>
            <p className='text mb-0 fz15 dark:text-white'>{propertytype}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverView
