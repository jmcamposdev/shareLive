import { Form, Formik } from 'formik'
import BoxDashboard from '../../BoxDashboard/BoxDashboard'
import socialUserFormModel from './FormModel/socialUserFormModel'
import { socialUserInitialValues } from './FormModel/socialUserFormInitialValues'
import socialUserValidationSchema from './FormModel/socialUserValidationSchema'
import FormikControl from '../../../Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../../../Formik/Buttons/FormikSubmitBtn'

const {
  formId, formField: { facebook, twitter, linkedin, instagram }
} = socialUserFormModel

const DshSocialUserForm = ({ user, onSubmit }) => {
  return (
    <BoxDashboard>
      <h4 className='title fz17 mb30 dark:text-white'>Social Media</h4>
      <Formik
        initialValues={socialUserInitialValues(user)}
        validationSchema={socialUserValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className='flex flex-col gap-5'
            id={formId}
          >
            <div className='flex gap-5'>
              <FormikControl
                control='input'
                type='text'
                id={facebook.name}
                name={facebook.name}
                label={facebook.label}
                placeholder={facebook.placeholder}
              />
              <FormikControl
                control='input'
                type='text'
                id={instagram.name}
                name={instagram.name}
                label={instagram.label}
                placeholder={instagram.placeholder}
              />
            </div>
            <div className='flex gap-5'>
              <FormikControl
                control='input'
                type='text'
                id={twitter.name}
                name={twitter.name}
                label={twitter.label}
                placeholder={twitter.placeholder}
              />
              <FormikControl
                control='input'
                type='text'
                id={linkedin.name}
                name={linkedin.name}
                label={linkedin.label}
                placeholder={linkedin.placeholder}
              />
            </div>
            <div className='text-end'>
              <FormikSubmitBtn label='Update Socials' isSubmitting={isSubmitting} />
            </div>
          </Form>
        )}

      </Formik>
    </BoxDashboard>
  )
}

export default DshSocialUserForm
