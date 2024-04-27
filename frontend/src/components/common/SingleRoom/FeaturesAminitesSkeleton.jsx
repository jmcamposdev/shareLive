import LoadingSkeleton from '../Loading/LoadingSkeleton'

const FeaturesAminitesSkeleton = () => {
  /* return (

  ) */
  const n = 3
  return (
    [...Array(n)].map((e, i) =>
      <div key={i} className='col-sm-6 col-md-4 w-full sm:w-1/2 md:w-1/3 mt-2'>
        <div className='pd-list'>
          <LoadingSkeleton className='w-24 h-[18px] mb-2' />
          <LoadingSkeleton className='w-24 h-[18px]' />
        </div>
      </div>)
  )
}

export default FeaturesAminitesSkeleton
