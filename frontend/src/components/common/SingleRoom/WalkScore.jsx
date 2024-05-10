import { useEffect, useState } from 'react'
import WalkScoreService from '../../../services/WalkScoreService'

const WalkScore = ({ address, city, state, postalCode, latitude, longitude }) => {
  const [score, setScore] = useState({ walk: 0, transit: 0, bike: 0 })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchWalkScore = async () => {
      try {
        if (!latitude || !longitude) return
        const response = await WalkScoreService.getWalkScore(latitude, longitude)
        setScore(response)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching walk score:', error)
      }
    }

    fetchWalkScore()
  }
  , [address, city, state])

  const renderScore = (score) => {
    if (loading) {
      return 'Loading...'
    }

    if (isNaN(score)) {
      return 'No score available'
    }

    return `${score} / 100`
  }

  return (
    <>
      <div className='col-md-12 flex flex-col sm:block justify-center items-center'>
        <h4 className='fw400 mb20 dark:text-white'>
          {address}, {postalCode} - {city} {state}
        </h4>
        <div className='walkscore d-sm-flex align-items-center mb20 w-fit sm:w-full'>
          <span className='icon mb10-sm flaticon-walking mx-auto sm:mx-[15px]' />
          <div className='details text-center sm:!text-left'>
            <p className='dark-color fw600 mb-2 dark:text-white'>Walk Score</p>
            <p className='text mb-0 dark:text-white'>{renderScore(score.walk)}</p>
          </div>
        </div>
        <div className='walkscore d-sm-flex align-items-center mb20 w-fit sm:w-full'>
          <span className='icon mx-auto sm:mx-[15px] mb10-sm flaticon-bus' />
          <div className='details text-center sm:!text-left'>
            <p className='dark-color fw600 mb-2 dark:text-white'>Transit Score</p>
            <p className='text mb-0 dark:text-white'>{renderScore(score.transit)}</p>
          </div>
        </div>
        <div className='walkscore d-sm-flex align-items-center w-fit sm:w-full'>
          <span className='icon mx-auto sm:mx-[15px] mb10-sm flaticon-bike' />
          <div className='details text-center sm:!text-left'>
            <p className='dark-color fw600 mb-2 dark:text-white'>Walk Score</p>
            <p className='text mb-0 dark:text-white'>{renderScore(score.bike)}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WalkScore
