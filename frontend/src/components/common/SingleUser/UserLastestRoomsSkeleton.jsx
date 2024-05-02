import LoadingSkeleton from '../Loading/LoadingSkeleton'
import RoomSimpleSkeleton from '../Room/RoomSimple/RoomSimpleSkeleton'

const UserLatestRoomsSkeleton = () => {
  const rooms = Array.from({ length: 4 }, (_, index) => (

    <div key={index} className='w-full md:w-calc-half-minus-30'>
      <RoomSimpleSkeleton key={index} />
    </div>

  ))
  return (
    <div className='flex flex-wrap  items-center mt40'>
      <div className='sm:w-1/3 pr-4 pl-4 w-full'>
        <h6 className='fz17 dark:text-white mb30 w-full'>
          <LoadingSkeleton className='w-full h-6' />
        </h6>
      </div>
      <div className='sm:w-2/3 pr-4 pl-4' />
      <div className='lg:w-full pr-4 pl-4'>
        <div className='tab-content' id='pills-tabContent'>
          <div className='tab-pane block active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab'>
            <div className='flex flex-wrap gap-x-[30px] gap-y-0'>

              {rooms}

            </div>
          </div>
        </div>
        <LoadingSkeleton className='w-full pb30 h-[86px]' innerClasses='rounded-xl' />
        <LoadingSkeleton className='w-full h-px' />
      </div>
    </div>
  )
}

export default UserLatestRoomsSkeleton
