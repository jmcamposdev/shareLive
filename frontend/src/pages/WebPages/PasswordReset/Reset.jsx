import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LogoWhite from '../../../assets/logos/logo-white.png'
import { Form, Formik } from 'formik'
import FormikControl from '../../../components/common/Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../../../components/common/Formik/Buttons/FormikSubmitBtn'
import { usePasswordReset } from '../../../context/PasswordResetContext'

const Reset = () => {
  const { resetPassword } = usePasswordReset()

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required').min(6, 'Password must be at least 6 characters')
  })

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    await resetPassword(values.password)
    actions.resetForm()
    actions.setSubmitting(false)
  }
  return (
    <>
      <div className='text-center mb30 flex flex-col justify-center items-center'>
        <Link to='/'>
          <img
            className='dark:hidden text-transparent mb25'
            alt='logo'
            loading='lazy'
            width='165'
            height='52'
            decoding='async'
            data-nimg='1'
            src={LogoDark}
          />
          <img
            className='dark:block hidden text-transparent mb25'
            alt='logo'
            loading='lazy'
            width='165'
            height='52'
            decoding='async'
            data-nimg='1'
            src={LogoWhite}
          />
        </Link>
        <h2 className='dark:text-white'>Change Password</h2>
      </div>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='form-style1'>
            <div className='mb25 flex flex-col gap-5'>
              <FormikControl
                control='input'
                type='password'
                id='password'
                name='password'
                label='Password'
                placeholder='Enter Password'
              />
              <FormikControl
                control='input'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                label='Confirm Password'
                placeholder='Enter Confirm Password'
              />
            </div>
            <div className='d-grid mb20'>
              <FormikSubmitBtn
                label='Send Email'
                isSubmitting={isSubmitting}
                className='w-full'
                isOrange
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Reset
