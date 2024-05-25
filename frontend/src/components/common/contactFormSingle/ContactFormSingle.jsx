import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import FormikControl from '../Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../Formik/Buttons/FormikSubmitBtn'
import MessageService from '../../../services/MessageService'
import { useNavigate } from 'react-router-dom'
import UserService from '../../../services/UserService'
import { useAuth } from '../../../context/AuthContext'

const ContactFormSingle = ({ title, contactUser }) => {
  const { user, updateUser } = useAuth()
  const navigate = useNavigate()
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
      await MessageService.createMessage(values.message, user._id, contactUser._id)
      navigate('/dashboard/messages')
    } catch (error) {
      console.error('Error sending message:', error.message)
    }
    actions.resetForm()
  }
  return (
    <div className='agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative dark:bg-midnight dark:border-slate-400/20  '>
      <h4 className='form-title mb25 dark:text-white'>{title}</h4>
      <Formik
        initialValues={{ message: '' }}
        validationSchema={Yup.object({
          message: Yup.string().required('Message is required')
        })}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-5'>
            <FormikControl
              control='textarea'
              type='text'
              id='message'
              name='message'
              placeholder='I am interested in this property. Please contact me.'
              rows='10'
            />
            <FormikSubmitBtn
              label='Send Message'
              isSubmitting={isSubmitting}
              className='w-full'
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactFormSingle
