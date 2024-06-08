import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { usePasswordReset } from '../../../context/PasswordResetContext'
import LogoDark from '../../../assets/logos/logo-dark.png'
import LogoWhite from '../../../assets/logos/logo-white.png'
import FormikSubmitBtn from '../../../components/common/Formik/Buttons/FormikSubmitBtn'

const OPTInput = () => {
  const { email, verifyOPT, OPTError } = usePasswordReset()
  const inputRefs = useRef([])

  const initialValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: ''
  }

  const validationSchema = Yup.object({
    code1: Yup.number().required('Required'),
    code2: Yup.number().required('Required'),
    code3: Yup.number().required('Required'),
    code4: Yup.number().required('Required')
  })

  const handleInputChange = (e, index, handleChange) => {
    const { value } = e.target
    // Validate that is a number if not return
    if (value !== '' && !Number(value) && value !== '0') {
      return
    }
    handleChange(e)
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  const onSubmit = async ({ code1, code2, code3, code4 }) => {
    const reciveOPT = parseInt(code1 + code2 + code3 + code4)
    if (verifyOPT(reciveOPT)) {
      console.log('Verification successful')
    } else {
      console.log('Verification failed')
    }
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
        <h2 className='dark:text-white'>Email Verification</h2>
      </div>
      <div className='flex flex-row text-sm font-medium text-gray-400'>
        <p>We have sent a code to your email {email}</p>
      </div>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, isSubmitting, errors, touched }) => (
            <Form>
              <div className='flex flex-col space-y-16'>
                <div className='flex flex-row items-center justify-between mx-auto w-full max-w-xs'>
                  {[1, 2, 3, 4].map((num, index) => (
                    <div key={num} className='w-16 h-16'>
                      <Field
                        innerRef={function (el) { inputRefs.current[index] = el }}
                        maxLength='1'
                        className='w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#eb6753]'
                        type='text'
                        name={`code${num}`}
                        onChange={(e) => handleInputChange(e, index, handleChange)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    </div>
                  ))}
                </div>
                {OPTError && <div className='text-red-500 text-sm text-center !mt-3'>{OPTError}</div>}
                {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
                  <div className='text-red-500 text-sm text-center !mt-3'>Please fill all fields</div>
                )}
                <div className='flex flex-col space-y-5'>
                  <div>
                    <FormikSubmitBtn
                      label='Verify Account'
                      isSubmitting={isSubmitting}
                      className='w-full'
                      isOrange
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default OPTInput
