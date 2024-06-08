import PropTypes from 'prop-types'
import RoomSimple from '../../common/Room/RoomSimple/RoomSimple'
import RoomDetailed from '../../common/Room/RoomDetailed/RoomDetailed'
import { PaginationContext } from '../../../context/PaginationContext'
import { useContext } from 'react'
import { RoomSearchContext } from '../../../context/RoomSearchContext'
import ErrorImg from '../../../assets/vectors/404img.svg'
import ErrorImgDark from '../../../assets/vectors/404imgDark.svg'
import LottiePlayer from '../../common/LottiePlayer/LottiePlayer'
import NotFound from '../../../assets/lotties/notFound.json'
import Lottie from 'react-lottie'

const RoomListings = ({ rooms, isGridView }) => {
  const { loading } = useContext(RoomSearchContext)
  const { pageData, itemsPerPage } = useContext(PaginationContext)
  const roomsData = pageData || rooms

  const renderLoading = () => {
    if (!loading) return null

    if (isGridView) {
      return (
        <>
          {
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <RoomSimple key={index} loading />
            ))
          }
        </>
      )
    }

    return (
      <>
        {
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <RoomDetailed key={index} loading />
          ))
        }
      </>
    )
  }

  return (
    <>
      {roomsData.length === 0 && !loading && (
        <>
          <h4 className='text-center !mb-8 !mt-4 dark:text-white'>No rooms found</h4>
          <Lottie
            className='mx-auto w-4/5'
            options={{
              loop: true,
              autoplay: true,
              animationData: NotFound,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            width='100%'
            height='50%'
          />
        </>
      )}
      <div className={`row ${isGridView ? 'grid grid-cols-1 md:grid-cols-2' : ''}`}>
        {renderLoading()}
        {
          roomsData.map((room) => (
            isGridView ? <RoomSimple key={room._id} room={room} /> : <RoomDetailed key={room._id} room={room} />
          ))
        }
      </div>
    </>
  )
}

RoomListings.propTypes = {
  rooms: PropTypes.array,
  isGridView: PropTypes.bool.isRequired
}

export default RoomListings
