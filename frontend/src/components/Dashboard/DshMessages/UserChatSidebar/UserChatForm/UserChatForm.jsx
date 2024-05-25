import { Formik, Form } from 'formik'
import FormikControl from '../../../../common/Formik/Inputs/FormikControl'
import spinnerSvg from '../../../../../assets/vectors/spinner.svg'

const UserChatForm = ({ onSubmit }) => {
  return (
    <div className='mi_text mt-3'>
      <div className='message_input'>
        <Formik
          className='flex'
          initialValues={{ message: '' }}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='flex justify-center items-center'>
              <FormikControl
                control='input'
                type='text'
                name='message'
                placeholder='Type a Message'
                required
              />
              <button
                className='w-12 h-12 rounded-full bg-orangePrimary text-white ml-2 p-2 mb-1 hover:bg-orangePrimaryLightHover'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? (
                    <img src={spinnerSvg} alt='spinner' className='inline w-[16px] h-[28px]' /> // Add spinnerSvg
                    )
                  : (
                    <i className='fas fa-arrow-right' />
                    )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default UserChatForm
