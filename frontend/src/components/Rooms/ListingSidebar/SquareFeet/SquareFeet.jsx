import { useContext } from 'react'
import { RoomContext } from '../../../../context/roomContext'

const SquareFeet = () => {
  const { filters, filterBy } = useContext(RoomContext)
  const { sqft } = filters
  return (
    <div className='space-area'>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='form-style1'>
          <input
            type='number'
            className='form-control filterInput'
            placeholder='Min.'
            id='minFeet'
            onChange={(e) => filterBy.sqft(e.target.value, sqft.max)}
          />
        </div>
        <span className='dark-color'>-</span>
        <div className='form-style1'>
          <input
            type='number'
            id='maxFeet'
            className='form-control filterInput'
            placeholder='Max'
            onChange={(e) => filterBy.sqft(sqft.min, e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default SquareFeet
