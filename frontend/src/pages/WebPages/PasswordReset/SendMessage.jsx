import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LogoWhite from '../../../assets/logos/logo-white.png'
import { Form, Formik } from 'formik'
import FormikControl from '../../../components/common/Formik/Inputs/FormikControl'
import { usePasswordReset } from '../../../context/PasswordResetContext'
import FormikSubmitBtn from '../../../components/common/Formik/Buttons/FormikSubmitBtn'

const SendMessage = () => {
  const { sendMessage } = usePasswordReset()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required')
  })

  const onSubmit = async ({ email }) => {
    await sendMessage(email)
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
        <h2 className='dark:text-white'>Verify your email</h2>
      </div>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='form-style1'>
            <div className='mb25'>
              <FormikControl
                control='input'
                type='text'
                id='email'
                name='email'
                label='Email'
                placeholder='Enter Email'
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

SendMessage.propTypes = {
  nextStep: PropTypes.func
}

export default SendMessage
