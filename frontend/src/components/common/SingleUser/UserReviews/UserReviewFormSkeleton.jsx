import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const UserReviewForm = () => {
  return (
    <div className='bsp_reveiw_wrt'>
      <h6 className='fz17 dark:text-white'>
        <LoadingSkeleton className='h-6 w-36' />
      </h6>
      <form className='comments_form mt30'>
        <div className='flex flex-wrap '>
          <div className='w-full'>
            <div className='mb-4'>
              <label className='fw600 ff-heading mb-2 dark:text-white undefined'>
                <LoadingSkeleton className='h-4 w-14' />
              </label>
              <LoadingSkeleton className='w-full h-[55px]' innerClasses='rounded-md' />
              <input name='rating' id='rating' type='text' className='absolute w-0 h-0' value='[object Object]' />
            </div>
          </div>

          <div className='w-full'>
            <div className='mb-4'>
              <label className='fw600 ff-heading mb-2 dark:text-white '>
                <LoadingSkeleton className='h-4 w-14' />
              </label>
              <LoadingSkeleton className='w-full h-28' innerClasses='rounded-md' />
            </div>
            <LoadingSkeleton className='w-[197px] h-[55px]' innerClasses='rounded-xl' />
          </div>
        </div>
      </form>

    </div>
  )
}

export default UserReviewForm
