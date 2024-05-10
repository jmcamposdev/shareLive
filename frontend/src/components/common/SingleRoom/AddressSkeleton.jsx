import LoadingSkeleton from '../Loading/LoadingSkeleton'

const AddressSkeleton = () => {
  const n = 2
  const n2 = 3
  return (
    <>
      {[...Array(n)].map((e, i) =>
        <div key={i} className='col-md-6 col-xl-4 flex-1'>
          <div className='d-flex justify-content-between'>
            <div className='pd-list'>
              {[...Array(n2)].map((j, k) =>
                <div key={k} className='fw600 mb10 ff-heading dark-color dark:text-white'><LoadingSkeleton className='h-[18px] w-[100px]' /></div>
              )}
            </div>
            <div className='pd-list'>
              {[...Array(n2)].map((j, k) =>
                <div key={k} className='text mb10 dark:text-white'><LoadingSkeleton className='h-[18px] w-[80px]' /></div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className='w-full'>
        <LoadingSkeleton className='w-full h-[250px] mt-[30px]' innerClasses='!rounded-2xl' />
      </div>
    </>
  )
}

export default AddressSkeleton
