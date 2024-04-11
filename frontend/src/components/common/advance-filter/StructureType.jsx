import Select from 'react-select'
import { RoomContext } from '../../../context/roomContext'
import { useContext } from 'react'

const StructureType = () => {
  const { filters, filterBy } = useContext(RoomContext)
  const { structureType } = filters

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? '#eb6753'
          : isHovered
            ? '#eb675312'
            : isFocused
              ? '#eb675312'
              : undefined
      }
    }
  }

  const structureOptions = [
    { value: 'Apartment', label: 'Apartment' },
    { value: 'House', label: 'House' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Duplex', label: 'Duplex' },
    { value: 'Townhouse', label: 'Townhouse' },
    { value: 'Cottage', label: 'Cottage' }
  ]
  return (
    <Select
      onChange={(e) => filterBy.structureType(e.value)}
      value={{ value: structureType, label: structureType }}
      name='structureType'
      options={structureOptions}
      styles={customStyles}
      className='select-custom'
      classNamePrefix='select'
      required
    />
  )
}

export default StructureType
