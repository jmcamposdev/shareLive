import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../common/Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../../common/Formik/Buttons/FormikSubmitBtn'
import { useMemo } from 'react'
import useAlertToast from '../../../hooks/useToast'

const FormContact = () => {
  const { toast } = useAlertToast()
  const initialValues = useMemo(() => ({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }), [])

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const onSubmit = (values, actions) => {
    actions.setSubmitting(false)
    actions.resetForm()
    toast.showSuccess('Message sent successfully!')
  }

  return (
    <div className=' dark:bg-lightmidnight'>
      <section className='p-0'>
        <iframe
          className='home8-map contact-page dark:invert-[100%] dark:hue-rotate-180'
          loading='lazy'
          src='https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near'
          title='London Eye, London, United Kingdom'
          aria-label='London Eye, London, United Kingdom'
        />
      </section>
      <section>
        <div className='container mx-auto sm:px-4 '>
          <div className='flex flex-wrap items-end'>
            <div className='lg:w-2/5 pr-4 pl-4 relative'>
              <div className='home8-contact-form default-box-shadow1 rounded-[12px] border-[1px] border-solid border-[#DDDDDD] p-[30px] bg-white dark:!bg-midnight dark:!border-[#181A20] z-20 relative'>
                <h4 className='form-title mb-[25px] dark:text-white'>
                  Have questions? Get in touch!
                </h4>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form className='relative'>
                    <div className='flex flex-wrap'>
                      <div className='w-full pr-4 pl-4 flex-[0_0_auto] flex flex-col gap-2'>
                        <FormikControl
                          control='input'
                          type='text'
                          id='firstName'
                          name='firstName'
                          label='First Name'
                          placeholder='Your First Name'
                        />
                        <FormikControl
                          control='input'
                          type='text'
                          id='lastName'
                          name='lastName'
                          label='Last Name'
                          placeholder='Your Last Name'
                        />
                        <FormikControl
                          control='input'
                          type='email'
                          id='email'
                          name='email'
                          label='Email'
                          placeholder='Your Email'
                        />
                        <FormikControl
                          control='textarea'
                          type='text'
                          id='message'
                          name='message'
                          label='Message'
                          placeholder='There are many variations of passages.'
                          rows='5'
                        />
                        <FormikSubmitBtn
                          label='Submit'
                          isSubmitting={false}
                          className='w-full'
                          isOrange
                        />
                      </div>
                    </div>
                  </Form>
                </Formik>

              </div>
            </div>

            <div className='lg:w-2/5 pr-4 pl-4 lg:ml-[16.66666667%] mt-[3rem] '>
              <h2 className='mb-[30px] capitalize dark:text-white'>
                We’d love to hear <br className='hidden lg:block' />
                from you.
              </h2>
              <p className='text dark:text-white'>
                We are here to answer any question you may have. As the leader in our sector
                we can help you with any question you may have.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormContact
