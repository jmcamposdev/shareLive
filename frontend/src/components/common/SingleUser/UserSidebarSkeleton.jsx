import ContactFormSingle from '../contactFormSingle/ContactFormSingle'

const UserSidebarSkeleton = () => {
  return (
    <>
      <ContactFormSingle title='Contact Me' />
      <div className='agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30 dark:bg-midnight'>
        <div className='widget-wrapper mb-0'>
          <h6 className='title fz17 mb35 dark:text-white'>More Information</h6>

          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <h6 className='fz14 mb-0 dark:text-white'>Telephone</h6>
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <p className='text mb-0 fz14 dark:text-white'>+34 348 342 234</p>
            </div>
          </div>

          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <h6 className='fz14 mb-0 dark:text-white'>Mobile</h6>
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <p className='text mb-0 fz14 dark:text-white'>+34 657 383 432</p>
            </div>
          </div>

          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <h6 className='fz14 mb-0 dark:text-white'>Member since</h6>
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <p className='text mb-0 fz14 dark:text-white'>2024-05-12</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSidebarSkeleton
