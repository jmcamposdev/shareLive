import { ErrorMessage, Form, Formik } from 'formik'
import basicUserFormModel from './FormModel/basicUserFormModel'
import { basicUserInitialValues } from './FormModel/basicUserFormInitialValues'
import basicUserValidationSchema from './FormModel/basicUserValidationSchema'
import FormikControl from '../../../Formik/Inputs/FormikControl'
import { useState } from 'react'
import TextError from '../../../Formik/Inputs/TextError'
import FormikSubmitBtn from '../../../Formik/Buttons/FormikSubmitBtn'
import BoxDashboard from '../../BoxDashboard/BoxDashboard'
import { useAuth } from '../../../../../context/AuthContext'

const {
  formId, formField: {
    avatar,
    username,
    email,
    phone,
    firstName,
    lastName,
    mobilePhone,
    description,
    isAdministrator
  }
} = basicUserFormModel

const DshBasicUserForm = ({ userToEdit, onSubmit }) => {
  const { user } = useAuth()
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const isSameUser = user._id === userToEdit._id

  const handleAvatarSelection = (event, handleFormikChange) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedAvatar(file)
      handleFormikChange({ target: { name: avatar.name, value: file } })
    }
  }

  const handleAvatarDeletion = (handleFormikChange) => {
    setSelectedAvatar(null)
    handleFormikChange({ target: { name: avatar.name, value: import.meta.env.VITE_DEFAULT_AVATAR_URL } })
  }

  return (
    <Formik
      initialValues={basicUserInitialValues(userToEdit)}
      validationSchema={basicUserValidationSchema(userToEdit)}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, handleChange }) => (
        <BoxDashboard>
          <Form id={formId}>
            <div className='w-full flex justify-between'>
              <div className='profile-box position-relative d-md-flex align-items-end mb50'>
                <div className='profile-img position-relative overflow-hidden bdrs12 mb20-sm'>
                  <img
                    className='w-52 bdrs12'
                    src={selectedAvatar ? URL.createObjectURL(selectedAvatar) : values[avatar.name]}
                    alt='Selected Avatar'
                  />
                  <button
                    onClick={() => handleAvatarDeletion(handleChange)}
                    className='tag-del'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title=''
                    data-bs-original-title='Delete Image'
                    aria-label='Delete Item'
                    type='button'
                  >
                    <span className='fas fa-trash-can' />
                  </button>
                </div>
                <div className='profile-content ml30 ml0-sm'>
                  <button
                    className='ud-btn btn-white2 mb30 dark:text-white'
                    onClick={() => document.getElementById('avatar-input').click()}
                    type='button'
                  >
                    Upload Profile Files<i className='fal fa-arrow-right-long' />
                  </button>
                  <input
                    id='avatar-input'
                    type='file'
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={(e) => handleAvatarSelection(e, handleChange)}
                  />
                  <p className='text dark:text-white'>Photos must be JPEG or PNG format and at least 2048x768</p>
                </div>
                <TextError>
                  <ErrorMessage name={avatar.name} />
                </TextError>
              </div>
              {!isSameUser && (
                <div className=''>
                  <FormikControl
                    control='checkbox'
                    id={isAdministrator.name}
                    name={isAdministrator.name}
                    label={isAdministrator.label}
                  />
                </div>
              )}
            </div>
            <div className='flex flex-wrap gap-5 '>
              <div className='flex-1 xl:basis-[31%] sm:basis-[48%] basis-full'>
                <FormikControl
                  control='input'
                  type='text'
                  id={username.name}
                  name={username.name}
                  label={username.label}
                  placeholder={username.placeholder}
                />
              </div>
              <div className='flex-1 xl:basis-[31%] sm:basis-[48%] basis-full'>
                <FormikControl
                  control='input'
                  type='text'
                  id={email.name}
                  name={email.name}
                  label={email.label}
                  placeholder={email.placeholder}
                />
              </div>
              <div className='flex-1 xl:basis-[31%] sm:basis-[48%] basis-full'>
                <FormikControl
                  control='input'
                  type='number'
                  id={phone.name}
                  name={phone.name}
                  label={phone.label}
                  placeholder={phone.placeholder}
                />
              </div>
              <div className='flex-1 xl:basis-[31%] sm:basis-[48%] basis-full'>
                <FormikControl
                  control='input'
                  type='text'
                  id={firstName.name}
                  name={firstName.name}
                  label={firstName.label}
                  placeholder={firstName.placeholder}
                />
              </div>
              <div className='flex-1 xl:basis-[31%] sm:basis-[48%] basis-full'>
                <FormikControl
                  control='input'
                  type='text'
                  id={lastName.name}
                  name={lastName.name}
                  label={lastName.label}
                  placeholder={lastName.placeholder}
                />
              </div>
              <div className='flex-1 xl:basis-[31%] sm:basis-[48%] basis-full'>
                <FormikControl
                  control='input'
                  type='number'
                  id={mobilePhone.name}
                  name={mobilePhone.name}
                  label={mobilePhone.label}
                  placeholder={mobilePhone.placeholder}
                />
              </div>
              <div className='w-full md:w-full'>
                <FormikControl
                  control='textarea'
                  type='text'
                  id={description.name}
                  name={description.name}
                  label={description.label}
                  placeholder={description.placeholder}
                  rows='10'
                  className='mb10 !dark:bg-midnight'
                />
              </div>
              <div className='w-full md:w-full sm:px-4 px-0'>
                <div className='text-end'>
                  <FormikSubmitBtn label='Update Profile' isSubmitting={isSubmitting} />
                </div>
              </div>
            </div>
          </Form>
        </BoxDashboard>

      )}

    </Formik>
  )
}

export default DshBasicUserForm
