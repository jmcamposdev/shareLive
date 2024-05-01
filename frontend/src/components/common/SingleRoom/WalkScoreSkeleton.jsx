import LoadingSkeleton from '../Loading/LoadingSkeleton'

const WalkScoreSkeleton = () => {
  const n = 3
  return (

    [...Array(n)].map((e, i) =>
      <div key={i} className='walkscore d-sm-flex align-items-center mb20 w-fit sm:w-full'>
        <LoadingSkeleton className='mb10-sm mx-auto sm:mx-[15px] w-[70px] h-[70px]' />
        <div className='details text-center sm:!text-left'>
          <div className='dark-color fw600 mb-2 dark:text-white w-24'>
            <LoadingSkeleton className='w-full h-[18px]' />
          </div>
          <div className=' mx-auto sm:mx-0 text mb-0 dark:text-white w-14'>
            <LoadingSkeleton className='w-full h-[18px]' />
          </div>
        </div>
      </div>
    )
  )
}

export default WalkScoreSkeleton
