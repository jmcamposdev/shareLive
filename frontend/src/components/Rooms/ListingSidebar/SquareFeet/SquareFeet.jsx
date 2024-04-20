import { useContext } from 'react'
import { RoomSearchContext } from '../../../../context/RoomSearchContext'

const SquareFeet = () => {
  const { filters, filterBy } = useContext(RoomSearchContext)
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
            value={sqft.min || ''}
            onChange={(e) => filterBy.sqft(parseInt(e.target.value) || null, sqft.max)}
          />
        </div>
        <span className='dark-color'>-</span>
        <div className='form-style1'>
          <input
            type='number'
            id='maxFeet'
            className='form-control filterInput'
            placeholder='Max'
            value={sqft.max || ''}
            onChange={(e) => filterBy.sqft(sqft.min, parseInt(e.target.value) || null)}
          />
        </div>
      </div>
    </div>
  )
}

export default SquareFeet
