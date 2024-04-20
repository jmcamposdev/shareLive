import { useContext } from 'react'
import { RoomSearchContext } from '../../../../context/RoomSearchContext'

const Bedroom = () => {
  const { filters, filterBy } = useContext(RoomSearchContext)
  const { bedrooms } = filters
  const options = [
    { id: 'any', label: 'any', value: 0, defaultChecked: true },
    { id: 'oneplus', label: '1+', value: 1 },
    { id: 'twoplus', label: '2+', value: 2 },
    { id: 'threeplus', label: '3+', value: 3 },
    { id: 'fourplus', label: '4+', value: 4 },
    { id: 'fiveplus', label: '5+', value: 5 }
  ]

  return (
    <>
      {options.map((option) => (
        <div className='selection' key={option.id}>
          <input
            id={option.id}
            type='radio'
            onChange={() => filterBy.bedrooms(option.value)}
            checked={bedrooms === option.value}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  )
}

export default Bedroom
