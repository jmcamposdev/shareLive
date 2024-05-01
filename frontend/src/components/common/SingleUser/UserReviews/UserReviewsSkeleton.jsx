import { useState } from 'react'
import UserReviewsStatsSkeleton from '../UserReviewsStatsSkeleton'
import UserReviewForm from './UserReviewForm'
import UserReviewsList from './UserReviewsList'
import { USER_REVIEWS_ORDER, USER_REVIEWS_ORDER_LABEL } from './UserReviews.constant'
import { UserPropTypes } from '../../../../models/User.model'
import { useAuth } from '../../../../context/AuthContext'
import Selector from '../../Inputs/Selector'

const UserReviewsSkeleton = ({ userSingle }) => {
  const { user } = useAuth()
  const isSameUser = userSingle._id === user?._id
  const [order, setOrder] = useState(
    { value: USER_REVIEWS_ORDER.NEWEST, label: USER_REVIEWS_ORDER_LABEL.NEWEST }
  )
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
                      <span className='min-w-[60px]'>Sort by</span>
                      <Selector
                        id='sort-by'
                        inputName='sort-by'
                        inputType='select'
                        label=''
                        labelClassName='min-w-[180px]'
                        options={[
                          { value: USER_REVIEWS_ORDER.NEWEST, label: USER_REVIEWS_ORDER_LABEL.NEWEST },
                          { value: USER_REVIEWS_ORDER.OLDEST, label: USER_REVIEWS_ORDER_LABEL.OLDEST },
                          { value: USER_REVIEWS_ORDER.HIGHEST_RATING, label: USER_REVIEWS_ORDER_LABEL.HIGHEST_RATING },
                          { value: USER_REVIEWS_ORDER.LOWEST_RATING, label: USER_REVIEWS_ORDER_LABEL.LOWEST_RATING }
                        ]}
                        optionValue='value'
                        optionName='label'
                        value={order}
                        onChange={(option) => setOrder(option)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* REVIEWS */}
              <UserReviewsList userId={userSingle._id} reviews={userSingle.reviews} numtoDisplay={4} order={order.value} />
              {/* END REVIEWS */}
            </div>
          </div>
        </div>
        {!isSameUser && <UserReviewForm />}
      </div>
    </div>
  )
}

UserReviews.propTypes = {
  userSingle: UserPropTypes.isRequired
}

export default UserReviewsSkeleton
