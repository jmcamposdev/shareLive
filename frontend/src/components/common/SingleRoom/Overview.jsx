const OverView = ({ bedroom, bath, yearbuilt, garage, squareMeters, propertytype }) => {
  return (
    <>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25 d-flex align-items-center'>
          <span className='icon flaticon-bed !leading-[55px]' />
          <div className='ml15'>
            <h6 className='mb-0'>Bedroom</h6>
            <p className='text mb-0 fz15'>{bedroom}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25 d-flex align-items-center'>
          <span className='icon flaticon-shower !leading-[55px]' />
          <div className='ml15'>
            <h6 className='mb-0'>Bath</h6>
            <p className='text mb-0 fz15'>{bath}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25 d-flex align-items-center'>
          <span className='icon flaticon-event !leading-[55px]' />
          <div className='ml15'>
            <h6 className='mb-0'>Year Built</h6>
            <p className='text mb-0 fz15'>{yearbuilt}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25-xs d-flex align-items-center'>
          <span className='icon flaticon-garage !leading-[55px]' />
          <div className='ml15'>
            <h6 className='mb-0'>Garage</h6>
            <p className='text mb-0 fz15'>{garage}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element mb25-xs d-flex align-items-center'>
          <span className='icon flaticon-expand !leading-[55px]' />
          <div className='ml15'>
            <h6 className='mb-0'>Sqft</h6>
            <p className='text mb-0 fz15'>{squareMeters}</p>
          </div>
        </div>
      </div>
      <div className='col-sm-6 col-lg-4'>
        <div className='overview-element d-flex align-items-center'>
          <span className='icon flaticon-home-1 !leading-[55px]' />
          <div className='ml15'>
            <h6 className='mb-0'>Property Type</h6>
            <p className='text mb-0 fz15'>{propertytype}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverView
