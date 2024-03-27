const SquareFeet = () => {
  return (
    <div className='space-area'>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='form-style1'>
          <input
            type='number'
            className='form-control filterInput'
            placeholder='Min.'
            id='minFeet'
          />
        </div>
        <span className='dark-color'>-</span>
        <div className='form-style1'>
          <input
            type='number'
            id='maxFeet'
            className='form-control filterInput'
            placeholder='Max'
          />
        </div>
      </div>
    </div>
  )
}

export default SquareFeet
