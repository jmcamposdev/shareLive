import Lottie from 'react-lottie'
import checkAnimation from '../../../../../assets/lotties/checkLottie.json'
import RoomDetailed from '../../../Room/RoomDetailed/RoomDetailed'
import { Link } from 'react-router-dom'

const FinishStep = ({ room, isEdit }) => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <h2>¡Room {isEdit ? 'updated' : 'created'} successfully!</h2>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          animationData: checkAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={200}
        width={200}
      />
      <div className=''>
        <RoomDetailed room={room} />
      </div>
      <div className='flex gap-5'>
        <Link
          to='/dashboard/rooms'
          type='button'
          className='ud-btn bg-gray-900 text-white hover:bg-gray-900'
        >
          <i className='fal fa-arrow-left-long !rotate-0 !ml-0 mr-2' />Back
        </Link>
        <Link
          to={`/rooms/${room._id || ''}`}
          className='ud-btn btn-thm w-fit'
        >
          View Room
          <i className='fal fa-arrow-right-long' />
        </Link>
      </div>
    </div>
  )
}

export default FinishStep
