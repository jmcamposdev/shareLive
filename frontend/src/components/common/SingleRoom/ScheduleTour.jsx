import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import React, { useMemo } from 'react'
import FormikControl from '../Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../Formik/Buttons/FormikSubmitBtn'
import { useAuth } from '../../../context/AuthContext'
import UserService from '../../../services/UserService'
import MessageService from '../../../services/MessageService'
import { useNavigate } from 'react-router-dom'

const ScheduleTour = ({ contactUser }) => {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()
  const initialValues = useMemo(() => {
    return {
      time: '',
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  }, [])

  const validationSchema = Yup.object({
    time: Yup.string().required('Time is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const onSubmit = async (values, actions) => {
    actions.setSubmitting(true)
    // Send the message
    try {
      if (!user || user._id === contactUser._id) return
      // Verify if the user is already a contact
      if (!user.contactList.includes(contactUser._id)) {
        const newUser = await UserService.addContact(user._id, contactUser._id)
        updateUser(newUser)
      }
      const message = `I would like to schedule a tour for ${values.time} with ${values.name}. My phone number is ${values.phone} and my email is ${values.email}. ${values.message}`
      await MessageService.createMessage(message, user._id, contactUser._id)
      navigate('/dashboard/messages')
    } catch (error) {
      console.error('Error sending message:', error.message)
    }
    actions.resetForm()
  }

  return (
    <div className='ps-navtab'>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          role='tabpanel'
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='flex flex-col gap-5'>
                <FormikControl
                  control='input'
                  type='text'
                  id='time'
                  name='time'
                  label='Time'
                  placeholder='Time'
                />
                <FormikControl
                  control='input'
                  type='text'
                  id='name'
                  name='name'
                  label='Name'
                  placeholder='Name'
                />
                <FormikControl
                  control='input'
                  type='text'
                  id='phone'
                  name='phone'
                  label='Phone'
                  placeholder='Phone'
                />
                <FormikControl
                  control='input'
                  type='email'
                  id='email'
                  name='email'
                  label='Email'
                  placeholder='Email'
                />
                <FormikControl
                  control='textarea'
                  type='text'
                  id='message'
                  name='message'
                  label='Message'
                  placeholder='Enter Your Messages'
                  rows='10'
                />
                <FormikSubmitBtn
                  label='Submit a Tour Request'
                  isSubmitting={isSubmitting}
                  className='w-full'
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTour
