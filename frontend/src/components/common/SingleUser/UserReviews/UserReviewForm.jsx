import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Selector from '../../Inputs/Selector'
import { useAuth } from '../../../../context/AuthContext'
import { useUserSingle } from '../../../../context/UserSingleContext'
import useAlertToast from '../../../../hooks/useToast'
import { Link } from 'react-router-dom'

const RATING_OPTIONS = [
  { value: 1, label: '1 Star' },
  { value: 2, label: '2 Stars' },
  { value: 3, label: '3 Stars' },
  { value: 4, label: '4 Stars' },
  { value: 5, label: '5 Stars' }
]

const UserReviewForm = () => {
  const { toast } = useAlertToast()
  const { user } = useAuth()
  const { createReview, updateReview, youAlreadyReviewed, yourReview } = useUserSingle()
  const formikInitialValues = {
    rating: yourReview ? RATING_OPTIONS.find(option => option.value === yourReview.reviewRate) : RATING_OPTIONS[0],
    review: yourReview ? yourReview.reviewContent : ''
  }

  const validationSchema = Yup.object().shape({
    rating: Yup.object().shape({
      label: Yup.string().required('Rating is required'),
      value: Yup.number().required('Rating is required')
    }),
    review: Yup.string().required('Review is required')
  })

  const onSubmit = async (values) => {
    if (youAlreadyReviewed) {
      const updatedReview = {
        ...yourReview,
        reviewRate: values.rating.value,
        reviewContent: values.review
      }
      try {
        await updateReview(updatedReview)
        toast.showSuccess('Review updated successfully')
      } catch (error) {
        console.error('Error updating review:', error)
        toast.showError(error.message)
      }
    } else {
      const newReview = {
        ownerId: user._id,
        reviewRate: values.rating.value,
        reviewContent: values.review
      }
      await createReview(newReview)
    }
  }

  return (
    <div className='bsp_reveiw_wrt'>
      <h6 className='fz17 dark:text-white'>
        {youAlreadyReviewed ? 'Update your review' : 'Leave A Review'}
      </h6>
      {!user
        ? (
          <>
            <p className='fz14 dark:text-white'>
              You need to be logged in to leave a review
            </p>
            <Link className='ud-btn btn-white2' to='/login'>
              Log In / Register
              <i className='fal fa-arrow-right-long' />
            </Link>
          </>
          )
        : (
          <>
            <Formik
              initialValues={formikInitialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, handleChange }) => (
                <Form className='comments_form mt30'>
                  <div className='flex flex-wrap '>
                    <div className='w-full'>
                      <Selector
                        label='Rating'
                        id='rating'
                        inputName='rating'
                        options={RATING_OPTIONS}
                        optionValue='value'
                        optionName='label'
                        value={values.rating}
                        handleChange={handleChange}
                      />
                      <ErrorMessage name='rating' component='div' className='text-red-500' />
                    </div>

                    <div className='w-full'>
                      <div className='mb-4'>
                        <label className='fw600 ff-heading mb-2 dark:text-white '>
                          Review
                        </label>
                        <Field
                          as='textarea'
                          id='review'
                          name='review'
                          className='pt15 dark:!bg-midnight dark:!border-gray-100/40'
                          placeholder='Write a Review'
                          required=''
                        />
                        <ErrorMessage name='review' component='div' className='text-red-500' />
                      </div>
                      <button type='submit' className='ud-btn btn-white2'>
                        {youAlreadyReviewed ? 'Update Review' : 'Submit Review'}
                        <i className='fal fa-arrow-right-long' />
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </>
          )}

    </div>
  )
}

export default UserReviewForm
