import Selector from '../Inputs/Selector'
import { RoomSearchContext } from '../../../context/RoomSearchContext'
import { useContext } from 'react'

const StructureType = () => {
  const { filters, filterBy } = useContext(RoomSearchContext)
  const { structureType } = filters

  const structureOptions = [
    { value: 'all', label: 'All' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'House', label: 'House' },
    { value: 'Penthouse', label: 'Penthouse' },
    { value: 'Duplex', label: 'Duplex' },
    { value: 'Townhouse', label: 'Townhouse' },
    { value: 'Cottage', label: 'Cottage' }
  ]
  return (
    <Selector
      id='structureType'
      inputName='structureType'
      inputType='text'
      containerClassName='w-full'
      label='Structure Type'
      labelClassName='text-[15px] !font-bold'
      options={structureOptions}
      optionValue='value'
      optionName='label'
      value={structureOptions.find((option) => option.value === structureType)}
      onChange={({ value }) => filterBy.structureType(value)}
    />
  )
}

export default StructureType
