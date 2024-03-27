import { useContext, useState } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { RoomContext } from '../../../../context/roomContext'

const PriceRange = () => {
  const { filters, filterBy } = useContext(RoomContext)
  const { min, max } = filters.price
  const [price, setPrice] = useState({ value: { min: 20, max: 70987 } })

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value })
    filterBy.price(value.min, value.max)
  }

  return (
    <>
      <div className='range-wrapper'>
        <InputRange
          formatLabel={() => ''}
          maxValue={1500}
          minValue={0}
          value={{ min, max }}
          onChange={(value) => handleOnChange(value)}
          id='slider'
        />
        <div className='d-flex align-items-center'>
          <span id='slider-range-value1'>${price.value.min}</span>
          <i className='fa-sharp fa-solid fa-minus mx-2 dark-color icon' />
          <span id='slider-range-value2'>${price.value.max}</span>
        </div>
      </div>
    </>
  )
}

export default PriceRange