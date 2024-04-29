import LoadingSkeleton from '../Loading/LoadingSkeleton'

const OverViewSkeleton = () => {
  const n = 6
  return (
    [...Array(n)].map((e, i) =>
      <div key={i} className='col-sm-6 col-lg-4 w-full sm:w-1/2 '>
        <div className='overview-element mb25-xs d-flex align-items-center mb25'>
          <LoadingSkeleton className='h-[50px] w-[50px]' innerClasses='rounded-xl' />
          <div className='ml15'>
            <LoadingSkeleton className='h-[18px] w-[70px]' />
            <LoadingSkeleton className='h-[15px] w-20 mt-2' />
          </div>
        </div>
      </div>
    )
  )
}

export default OverViewSkeleton
