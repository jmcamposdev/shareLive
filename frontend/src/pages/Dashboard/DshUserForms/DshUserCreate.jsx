import { ErrorMessage, Form, Formik } from 'formik'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import DashboardLayout from '../../../layout/DashboardLayout'
import createUserFormModel from './FormModelCreate/createUserFormModel'
import createUserFormInitialValues from './FormModelCreate/createUserFormInitialValues'
import createUserValidationSchema from './FormModelCreate/createUserValidationSchema'
import BoxDashboard from '../../../components/common/Dashboard/BoxDashboard/BoxDashboard'
import FormikControl from '../../../components/common/Formik/Inputs/FormikControl'
import FormikSubmitBtn from '../../../components/common/Formik/Buttons/FormikSubmitBtn'
import TextError from '../../../components/common/Formik/Inputs/TextError'
import { useState } from 'react'
import UserService from '../../../services/UserService'
import useAlertToast from '../../../hooks/useToast'
import { useNavigate } from 'react-router-dom'

const {
  avatar,
  username,
  email,
  phone,
  firstName,
  lastName,
  mobilePhone,
  description,
  facebook,
  twitter,
  linkedin,
  instagram,
  password,
  confirmPassword,
  isAdministrator
} = createUserFormModel

const DEFAULT_AVATAR = import.meta.env.VITE_DEFAULT_AVATAR_URL

const DshUserCreate = () => {
  const { toast } = useAlertToast()
  const navigate = useNavigate()
  const [selectedAvatar, setSelectedAvatar] = useState()

  const handleAvatarSelection = (event, handleFormikChange) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedAvatar(file)
      handleFormikChange({ target: { name: avatar.name, value: file } })
    }
  }

  const handleAvatarDeletion = (handleFormikChange) => {
    setSelectedAvatar(null)
    handleFormikChange({ target: { name: avatar.name, value: DEFAULT_AVATAR } })
  }

  const onSubmit = async (newUserData, actions) => {
    actions.setSubmitting(true)
    try {
      const newUser = {
        ...newUserData,
        avatar: DEFAULT_AVATAR,
        socials: {
          facebook: newUserData.facebook || '',
          twitter: newUserData.twitter || '',
          linkedin: newUserData.linkedin || '',
          instagram: newUserData.instagram || ''
        }
      }
      const user = await UserService.createUser(newUser)

      if (selectedAvatar) {
        await UserService.uploadAvatar(user._id, selectedAvatar)
      }

      actions.resetForm()
      actions.setSubmitting(false)
      navigate('/dashboard/users')
      toast.showSuccess('User created successfully!')
    } catch (error) {
      actions.setSubmitting(false)
      toast.showError(error.message)
    }
  }

  return (
    <DashboardLayout>
      <TitleDashboard title='Create User' subtitle='Create a new user' />
      <Formik
        initialValues={createUserFormInitialValues}
        validationSchema={createUserValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, isSubmitting, handleChange }) => (
          <Form className='flex flex-col gap-5'>
            {/* BASIC DATA */}
            <BoxDashboard>
              <div className='col-xl-7'>
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
                    className='mb10'
                  />
                </div>

              </div>
            </BoxDashboard>
            {/* END BASIC DATA */}

            {/* SOCIAL DATA */}
            <BoxDashboard>
              <h4 className='title fz17 mb30 dark:text-white'>Social Media</h4>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-5 sm:flex-row flex-col'>
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
                <div className='flex gap-5 sm:flex-row flex-col'>
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
              </div>
            </BoxDashboard>
            {/* END SOCIAL DATA */}

            {/* PASSWORD DATA */}
            <BoxDashboard>
              <h4 className='title fz17 mb30 dark:text-white'>New Password</h4>
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
            </BoxDashboard>
            {/* END PASSWORD DATA */}
            <BoxDashboard>
              <div className='flex gap-5 sm:flex-row flex-col justify-between items-center'>
                <div className='flex gap-10'>
                  <h4 className='title fz17 m-0 dark:text-white'>Administrator</h4>
                  <FormikControl
                    control='checkbox'
                    id={isAdministrator.name}
                    name={isAdministrator.name}
                    label={isAdministrator.label}
                  />
                </div>
                <div className='text-end'>
                  <FormikSubmitBtn label='Create User' isSubmitting={isSubmitting} />
                </div>
              </div>
            </BoxDashboard>
          </Form>
        )}
      </Formik>
    </DashboardLayout>
  )
}

export default DshUserCreate
