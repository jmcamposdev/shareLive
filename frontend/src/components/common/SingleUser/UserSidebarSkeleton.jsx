import LoadingSkeleton from '../Loading/LoadingSkeleton'
import ContactFormSingleSkeleton from '../contactFormSingle/ContactFormSingleSkeleton'

const UserSidebarSkeleton = () => {
  return (
    <>
      <ContactFormSingleSkeleton />
      <div className='agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30 dark:bg-midnight'>
        <div className='widget-wrapper mb-0'>
          <LoadingSkeleton className='h-5 w-36 ' />
          <div className='h-[35px]' />
          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <LoadingSkeleton className='h-4 w-20' />
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <LoadingSkeleton className='h-4 w-28' />
            </div>
          </div>
          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <LoadingSkeleton className='h-4 w-16' />
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <LoadingSkeleton className='h-4 w-28' />
            </div>
          </div>
          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <LoadingSkeleton className='h-4 w-24' />
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <LoadingSkeleton className='h-4 w-20' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSidebarSkeleton
