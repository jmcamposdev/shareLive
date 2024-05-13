import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import UserReviewsStats from '../../../components/common/SingleUser/UserReviewsStats'
import DashboardLayout from '../../../layout/DashboardLayout'
import BoxDashboard from '../../../components/common/Dashboard/BoxDashboard/BoxDashboard'
import { useEffect, useState } from 'react'
import { USER_REVIEWS_ORDER, USER_REVIEWS_ORDER_LABEL } from '../../../components/common/SingleUser/UserReviews/UserReviews.constant'
import Selector from '../../../components/common/Inputs/Selector'
import useUserReviews from '../../../hooks/useUserReviews'
import { PaginationProvider } from '../../../context/PaginationContext'
import Pagination from '../../../components/common/pagination/Pagintacion'
import DshReviewsPagination from './DshReviewsPagination'

const DshReviews = () => {
  const user = useAuthUser()
  const [order, setOrder] = useState({ value: USER_REVIEWS_ORDER.NEWEST, label: USER_REVIEWS_ORDER_LABEL.NEWEST })
  const { reviews, updateReview, deleteReview, loading } = useUserReviews(user?._id)
  const [orderReviews, setOrderReviews] = useState([])

  const orderReviewsFn = () => {
    const reviewsCopy = [...reviews]
    const orderedReviews = reviewsCopy.sort((a, b) => {
      switch (order.value) {
        case USER_REVIEWS_ORDER.NEWEST:
          return new Date(b.createdAt) - new Date(a.createdAt)
        case USER_REVIEWS_ORDER.OLDEST:
          return new Date(a.createdAt) - new Date(b.createdAt)
        case USER_REVIEWS_ORDER.HIGHEST_RATING:
          return b.reviewRate - a.reviewRate
        case USER_REVIEWS_ORDER.LOWEST_RATING:
          return a.reviewRate - b.reviewRate
        default:
          return new Date(a.createdAt) - new Date(b.createdAt)
      }
    })

    setOrderReviews(orderedReviews)
  }

  useEffect(() => {
    orderReviewsFn()
  }, [order, reviews])

  useEffect(() => {
    orderReviewsFn()
  }, [])

  return (
    <DashboardLayout>
      <TitleDashboard title='Reviews' subtitle='Here you can see all the reviews' />
      <BoxDashboard>
        <div className='flex justify-between items-center mb30'>
          <UserReviewsStats reviews={orderReviews} iconClassName='fz12 pe-2 !text-black' loading={loading} />
          <Selector
            id='sort-by'
            inputName='sort-by'
            inputType='select'
            label=''
            labelClassName='min-w-[200px]'
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
        <PaginationProvider
          presetData={orderReviews}
          defaultItemsPerPage={4}
          elementIdToScroll='reviewsContent'
          elementType='reviews'
        >
          <DshReviewsPagination
            loading={loading}
            onUpdateReview={updateReview}
            onDeleteReview={deleteReview}
          />
          <Pagination />
        </PaginationProvider>
      </BoxDashboard>
    </DashboardLayout>
  )
}

export default DshReviews
