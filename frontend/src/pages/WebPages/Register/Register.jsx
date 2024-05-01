import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import WebLayout from '../../../layout/WebLayout'
import LogoWhite from '../../../assets/logos/logo-white.png'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LoginImg from '../../../assets/vectors/register.svg'
import useAlertToast from '../../../hooks/useToast'
import AuthService from '../../../services/authService'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

const Register = () => {
  const navigate = useNavigate()
  const { setToken, updateUserData } = useAuth()
  const { toast } = useAlertToast()

  // Validation schema for the form
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*,.])[a-zA-Z\d!@#$%^&*,.]{8,}$/,
        'Password must be at least 8 characters long and include lowercase letters, uppercase letters, numbers, and special characters'
      ),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const onSubmit = async (values) => {
    const { username, email, password } = values

    try {
      const res = await AuthService.signUp(username, email, password)
      setToken(res.token)
      updateUserData(res.user)
      toast.showSuccess('Registered successfully')
      navigate('/dashboard')
    } catch (error) {
      toast.showError(error.message)
    }
  }

  // Use state to handle the state of the remember me checkbox
  const [isChecked, setIsChecked] = useState(false)

  // function to change the state of the checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked) // Inverts the actual state
  }

  return (
    <WebLayout>
      <section className='our-compare pt120 pb120 relative dark:bg-lightmidnight'>
        <img
          alt='logo'
          data-aos='fade-right'
          data-aos-delay='300'
          loading='lazy'
          width='1012'
          height='519'
          decoding='async'
          data-nimg='1'
          className='login-bg-icon contain aos-init aos-animate text-transparent pb-7'
          src={LoginImg}
        />
        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap  aos-init aos-animate' data-aos='fade-left' data-aos-delay='300'>
            <div className='w-full lg:w-1/2 pr-4 pl-4'>
              <div className='dark:bg-midnight log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12'>
                <div className='text-center mb40 flex flex-col justify-center items-center'>
                  <a href='/'>
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
                  </a>
                  <h2 className='dark:text-white'>Create Account</h2>
                </div>
                <Formik
                  initialValues={{ username: '', email: '', password: '', rePassword: '' }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form className='form-style1'>
                    <div className='mb25'>
                      <label htmlFor='username' className='form-label fw600 dark-color dark:text-white'>Username</label>
                      <Field
                        autoComplete='username'
                        name='username'
                        id='username'
                        className='form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded dark:bg-lightmidnight'
                        placeholder='Enter Username'
                        required=''
                        type='text'
                      />
                      <ErrorMessage name='username' component='div' className='text-red-500' />
                    </div>
                    <div className='mb25'>
                      <label htmlFor='email' className='form-label fw600 dark-color dark:text-white'>Email</label>
                      <Field
                        autoComplete='email'
                        name='email'
                        id='email'
                        className='form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded dark:bg-lightmidnight'
                        placeholder='Enter Email'
                        required=''
                        type='email'
                      />
                      <ErrorMessage name='email' component='div' className='text-red-500' />
                    </div>
                    <div className='mb25'>
                      <label htmlFor='password' className='form-label fw600 dark-color dark:text-white'>Password</label>
                      <Field
                        autoComplete='new-password'
                        name='password'
                        id='password'
                        className='dark:bg-lightmidnight form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                        placeholder='Enter Password'
                        required=''
                        type='password'
                      />
                      <ErrorMessage name='password' component='div' className='text-red-500' />
                    </div>
                    <div className='mb15'>
                      <label htmlFor='rePassword' className='form-label fw600 dark-color dark:text-white'>Re-Enter Password</label>
                      <Field
                        autoComplete='new-password'
                        name='rePassword'
                        id='rePassword'
                        className='dark:bg-lightmidnight form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
                        placeholder='Re-Enter Password'
                        required=''
                        type='password'
                      />
                      <ErrorMessage name='rePassword' component='div' className='text-red-500' />
                    </div>
                    <div className='checkbox-style1 block sm:flex items-center justify-between mb10'>
                      {/* Coloca onChange directamente en el input */}
                      <label className='custom_checkbox fz14 ff-heading dark:text-white'>I agree to the <a className='fz14 ff-heading dark:text-white font-bold' href='#'>Terms & Conditions</a>
                        <input id='checkbox' type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                        <span className='checkmark dark:border-white' />
                      </label>

                    </div>
                    <div className='d-grid mb20'>
                      <button className='ud-btn btn-thm dark:text-white' type='submit'>
                        Create Account <i className='fal fa-arrow-right-long' />
                      </button>
                    </div>
                    <div className='hr_content h-[33px] relative mb20'>
                      <hr className='absolute top-[45%] w-full dark:text-white' />
                      <span className='hr_top_text dark:text-white dark:bg-midnight'>OR</span>
                    </div>
                    <div className='d-grid mb10'>
                      <button className='ud-btn btn-white' type='button'>
                        <i className='fab fa-google' /> Continue Google
                      </button>
                    </div>
                    <div className='d-grid mb10'>
                      <button className='ud-btn btn-fb' type='button'>
                        <i className='fab fa-facebook-f' /> Continue Facebook
                      </button>
                    </div>
                    <div className='d-grid mb20'>
                      <button className='ud-btn btn-apple bg-black' type='button'>
                        <i className='fab fa-apple' /> Continue Apple
                      </button>
                    </div>
                    <p className='dark:text-white dark-color text-center mb0 mt10'>Already Have an Account? <Link className='dark:text-white dark-color fw600' to='/login'>Login</Link></p>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  )
}

export default Register
