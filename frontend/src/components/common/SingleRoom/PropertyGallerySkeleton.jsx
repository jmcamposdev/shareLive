import LoadingImg from '../Loading/LoadingImg'

const PropertyGallerySkeleton = () => {
  return (
    <div className='flex gap-3 lg:h-[600px] w-full'>
      <div className='w-2/3 h-full'>
        <LoadingImg />
      </div>

      <div className='w-1/3 h-full gap-3 flex-column'>
        <div className='w-full h-1/2'>
          <LoadingImg classes='h-full' />
        </div>
        <div className='w-full h-1/2'>
          <LoadingImg />
        </div>
      </div>
    </div>
  )
}

export default PropertyGallerySkeleton
