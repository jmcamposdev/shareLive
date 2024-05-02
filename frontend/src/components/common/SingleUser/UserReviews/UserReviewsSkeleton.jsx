import UserReviewsStatsSkeleton from '../UserReviewStatsSkeleton'
import UserReviewsListSkeleton from './UserReviewsListSkeleton'
import UserReviewFormSkeleton from './UserReviewFormSkeleton'
import LoadingSkeleton from '../../Loading/LoadingSkeleton'

const UserReviewsSkeleton = () => {
  return (
    <div className='flex flex-wrap '>
      <div className='lg:w-full pr-4 pl-4'>
        <div className='product_single_content mb50'>
          <div className='mbp_pagination_comments'>
            <div className='flex flex-wrap '>
              <div className='w-full pr-4 pl-4'>
                <div className='total_review flex justify-between mb20 mt60 items-start flex-col sm:flex-row sm:items-center'>
                  <h6 className='fz17 mb15 dark:text-white'>
                    <UserReviewsStatsSkeleton />
                  </h6>
                  <div className='page_control_shorting flex items-center justify-center sm:justify-end'>
                    <div className='pcs_dropdown mb15 flex items-center gap-2'>
                      <span className='min-w-[60px]'>
                        <LoadingSkeleton className='h-5 w-[60px] mr-2.5' />
                      </span>
                      <LoadingSkeleton className='w-[180px] h-[53px]' innerClasses='rounded-md' />
                    </div>
                  </div>
                </div>
              </div>
              {/* REVIEWS */}
              <UserReviewsListSkeleton />
              {/* END REVIEWS */}
            </div>
          </div>
        </div>
        <UserReviewFormSkeleton />
      </div>
    </div>
  )
}

export default UserReviewsSkeleton
