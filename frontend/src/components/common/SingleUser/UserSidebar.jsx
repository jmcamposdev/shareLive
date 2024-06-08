import ContactFormSingle from '../contactFormSingle/ContactFormSingle'

const UserSidebar = ({ user }) => {
  return (
    <>
      <ContactFormSingle title='Contact Me' contactUser={user} placeholder='Contact me if you are interested in initiating a conversation.' />
      <div className='agen-personal-info relative bgc-white default-box-shadow1 bdrs12 p30 mt30 dark:bg-midnight'>
        <div className='widget-wrapper mb-0'>
          <h6 className='title fz17 mb35 dark:text-white'>More Information</h6>
          {user.phone
            ? (
              <div className='list-news-style flex items-center justify-between mb10'>
                <div className='flex-shrink-0'>
                  <h6 className='fz14 mb-0 dark:text-white'>Telephone</h6>
                </div>
                <div className='news-content flex-shrink-1 ms-3 text-end'>
                  <p className='text mb-0 fz14 dark:text-white'>{user.phone}</p>
                </div>
              </div>
              )
            : ''}
          {user.mobilePhone
            ? (
              <div className='list-news-style flex items-center justify-between mb10'>
                <div className='flex-shrink-0'>
                  <h6 className='fz14 mb-0 dark:text-white'>Mobile</h6>
                </div>
                <div className='news-content flex-shrink-1 ms-3 text-end'>
                  <p className='text mb-0 fz14 dark:text-white'>{user.mobilePhone}</p>
                </div>
              </div>
              )
            : ''}
          <div className='list-news-style flex items-center justify-between mb10'>
            <div className='flex-shrink-0'>
              <h6 className='fz14 mb-0 dark:text-white'>Member since</h6>
            </div>
            <div className='news-content flex-shrink-1 ms-3 text-end'>
              <p className='text mb-0 fz14 dark:text-white'>{user.joinDate.substring(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSidebar
