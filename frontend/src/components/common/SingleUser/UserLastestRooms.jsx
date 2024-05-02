import { useRef, useState } from 'react'
import RoomSimple from '../Room/RoomSimple/RoomSimple'

const UserLatestRooms = ({ userName, rooms, numToDisplay }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const titleRef = useRef(null)

  const handleToggleExpand = () => {
    if (isExpanded && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        setIsExpanded(!isExpanded)
      }, 300)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  return (

    rooms
      ? (
        <>
          <div className='flex flex-wrap  items-center mt40'>
            <div className='sm:w-1/3 pr-4 pl-4'>
              <h6
                ref={titleRef}
                className='fz17 dark:text-white mb30'
              >{userName}'s Rooms
              </h6>
            </div>
            <div className='sm:w-2/3 pr-4 pl-4' />
            <div className='lg:w-full pr-4 pl-4'>
              <div className='tab-content' id='pills-tabContent'>
                <div className='tab-pane block active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
                  <div className='flex flex-wrap gap-[30px]'>

                    {rooms.slice(0, isExpanded ? rooms.length : numToDisplay).map(room => (
                      <div key={room._id} className='w-full md:w-calc-half-minus-30'>
                        <RoomSimple key={room._id} room={room} />
                      </div>
                    ))}

                  </div>
                </div>
              </div>
              <div className='d-grid pb30 bdrb1 dark:border-borderColor/20'>
                <a
                  className='ud-btn btn-white2'
                  onClick={handleToggleExpand}
                >
                  {isExpanded ? 'Show less' : 'Show all'} rooms
                  <i className='fal fa-arrow-right-long' />
                </a>
              </div>
            </div>
          </div>
        </>
        )
      : (
        <div className='lg:w-full pr-4 pl-4'>
          <h6 className='fz17 pb60 mt60 dark:text-white bdrb1  w-full bdrb1 dark:border-borderColor/20'>This user has no rooms.</h6>
        </div>
        )

  )
}

export default UserLatestRooms
