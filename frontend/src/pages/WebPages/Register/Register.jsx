import { useState } from 'react'
import { Formik, Form } from 'formik'
import WebLayout from '../../../layout/WebLayout'
import LogoWhite from '../../../assets/logos/logo-white.png'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LoginImg from '../../../assets/vectors/register.svg'
import useAlertToast from '../../../hooks/useToast'
import AuthService from '../../../services/authService'
import { Link, useNavigate } from 'react-router-dom'
import FormikControl from '../../../components/common/Formik/Inputs/FormikControl'
import { registerInitialValues } from './FormModel/registerFormInitialValues'
import registerValidationSchema from './FormModel/registerValidationSchema'
import registerFormModel from './FormModel/registerFormModel'
import { useAuth } from '../../../context/AuthContext'

const {
  formId,
  formField: {
    username,
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  }
} = registerFormModel
const Register = () => {
  const { signInUser } = useAuth()
  const navigate = useNavigate()
  const { toast } = useAlertToast()

  const onSubmit = async (values) => {
    const { username, firstName, lastName, email, password } = values

    try {
      const res = await AuthService.signUp(username, firstName, lastName, email, password)
      signInUser(res.user, res.token)
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
            <div className='w-full lg:w-2/3 pr-4 pl-4'>
              <div className='dark:bg-midnight log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12'>
                <div className='text-center mb40 flex flex-col justify-center items-center'>
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
                  <h2 className='dark:text-white'>Create Account</h2>
                </div>
                <Formik
                  initialValues={registerInitialValues}
                  validationSchema={registerValidationSchema}
                  onSubmit={onSubmit}
                >
                  <Form id={formId} className='flex flex-col gap-5'>
                    <FormikControl
                      control='input'
                      type='text'
                      id={username.name}
                      name={username.name}
                      label={username.label}
                      placeholder={username.placeholder}
                    />
                    <div className='flex gap-5 sm:flex-row flex-col'>
                      <FormikControl
                        control='input'
                        type='text'
                        id={firstName.name}
                        name={firstName.name}
                        label={firstName.label}
                        placeholder={firstName.placeholder}
                      />
                      <FormikControl
                        control='input'
                        type='text'
                        id={lastName.name}
                        name={lastName.name}
                        label={lastName.label}
                        placeholder={lastName.placeholder}
                      />
                    </div>
                    <FormikControl
                      control='input'
                      type='text'
                      id={email.name}
                      name={email.name}
                      label={email.label}
                      placeholder={email.placeholder}
                    />
                    <div className='flex gap-5 sm:flex-row flex-col'>
                      <FormikControl
                        control='input'
                        type='password'
                        id={password.name}
                        name={password.name}
                        label={password.label}
                        placeholder={password.placeholder}
                      />
                      <FormikControl
                        control='input'
                        type='password'
                        id={confirmPassword.name}
                        name={confirmPassword.name}
                        label={confirmPassword.label}
                        placeholder={confirmPassword.placeholder}
                      />
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
                    <div>
                      <div className='hr_content h-[33px] relative mb20'>
                        <hr className='absolute top-[45%] w-full dark:text-white' />
                        <span className='hr_top_text dark:text-white dark:bg-midnight'>OR</span>
                      </div>
                      <p className='dark:text-white dark-color text-center mb0 mt10'>Already Have an Account? <Link className='dark:text-white dark-color fw600' to='/login'>Login</Link></p>
                    </div>
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
