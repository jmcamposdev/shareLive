const RoomVisits = ({ visits }) => {
  return (
    <div className='flex items-center mr-[10px] dark:text-white '>
      <i className='fa-light fa-eye mr-[5px]' />
      <span>{visits}</span>
    </div>
  )
}

export default RoomVisits
