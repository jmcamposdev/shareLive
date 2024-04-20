const WalkScore = ({ address, city, state, postalCode, score }) => {
  return (
    <>
      <div className='col-md-12'>
        <h4 className='fw400 mb20'>
          {address}, {postalCode} - {city} {state}
        </h4>
        <div className='walkscore d-sm-flex align-items-center mb20'>
          <span className='icon mr15 mb10-sm flaticon-walking' />
          <div className='details'>
            <p className='dark-color fw600 mb-2'>Walk Score</p>
            <p className='text mb-0'>{score.walk} / 100</p>
          </div>
        </div>
        <div className='walkscore d-sm-flex align-items-center mb20'>
          <span className='icon mr15 mb10-sm flaticon-bus' />
          <div className='details'>
            <p className='dark-color fw600 mb-2'>Transit Score</p>
            <p className='text mb-0'>{score.transit} / 100</p>
          </div>
        </div>
        <div className='walkscore d-sm-flex align-items-center'>
          <span className='icon mr15 mb10-sm flaticon-bike' />
          <div className='details'>
            <p className='dark-color fw600 mb-2'>Walk Score</p>
            <p className='text mb-0'>{score.bike} / 100</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WalkScore
