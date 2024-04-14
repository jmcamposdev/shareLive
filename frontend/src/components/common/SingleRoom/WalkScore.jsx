import listings from '../../../data/roomsItems'
import React from 'react'

const WalkScore = ({ id }) => {
  const data = listings.find((elm) => elm.id === id) || listings[0]
  const scores = [
    {
      icon: 'flaticon-walking',
      type: 'Walk Score',
      score: '57',
      description: 'Somewhat Walkable'
    },
    {
      icon: 'flaticon-bus',
      type: 'Transit Score',
      score: '27',
      description: 'Some Transit'
    },
    {
      icon: 'flaticon-bike',
      type: 'Bike Score',
      score: '45',
      description: 'Somewhat Bikeable'
    }
  ]

  return (
    <>
      <div className='walkscore'>
        <h4 className='fw400 mb20'>{`${data.address}, ${data.city} - ${data.state}`}</h4>
        {scores.map((score, index) => (
          <div
            key={index}
            className='d-flex align-items-center mb20'
          >
            <span className={`icon mr15 mb10-sm ${score.icon}`} />
            <div className='details'>
              <p className='dark-color fw600 mb-2'>{score.type}</p>
              <p className='text mb-0'>{`${score.score} / 100 (${score.description})`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default WalkScore
