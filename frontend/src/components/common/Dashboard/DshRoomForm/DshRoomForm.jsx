import { useRef, useState } from 'react'
import DashboardLayout from '../../../../layout/DashboardLayout'
import TitleDashboard from '../TitleDashboard/TitleDashboard'
import roomValidationSchema from './FormModel/roomValidationSchema'
import BoxDashboard from '../BoxDashboard/BoxDashboard'
import Stepper from '../../Formik/StepsForm/Stepper'
import { Formik, Form } from 'formik'
import roomFormModel from './FormModel/roomFormModel'
import DescriptionForm from './FormSteps/DescriptionForm'
import MediaForm from './FormSteps/MediaForm'
import LocationForm from './FormSteps/LocationForm'
import DetailsForm from './FormSteps/DetailsForm'

const steps = ['Description', 'Media', 'Location', 'Details']
const { formId, formField } = roomFormModel

const DshRoomForm = ({ title, subtitle, onSubmit, initialValues, isEdit }) => {
  const formRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const currentValidationSchema = roomValidationSchema[activeStep]
  const isLastStep = activeStep === steps.length - 1

  function _renderStepContent (step) {
    switch (step) {
      case 0:
        return <DescriptionForm formField={formField} />
      case 1:
        return <MediaForm formField={formField} />
      case 2:
        return <LocationForm formField={formField} />
      case 3:
        return <DetailsForm formField={formField} />
      default:
        return <div>Not Found</div>
    }
  }

  function _handleSubmit (values, actions) {
    if (isLastStep) {
      onSubmit(values, actions)
      setActiveStep(activeStep + 1)
    } else {
      setActiveStep(activeStep + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  function _handleBack () {
    setActiveStep(activeStep - 1)
  }

  function handleStepClick (index) {
    // Validate form before changing step
    if (index < activeStep) {
      setActiveStep(index)
    } else {
      formRef.current.submitForm().then(() => {
        if (formRef.current.isValid) {
          setActiveStep(index)
        }
      })
    }
  }

  return (
    <DashboardLayout>
      <TitleDashboard title={title} subtitle={subtitle} />
      <BoxDashboard>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          stepsClick={handleStepClick}
        />
        {activeStep === steps.length
          ? (
            <h1>Finish you create your Room, please edit this finish view</h1>
            )
          : (
            <Formik
              innerRef={formRef}
              initialValues={initialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id={formId} className='relative'>
                  {_renderStepContent(activeStep)}
                  {/* NAVIGATION BUTTON NEXT & BACK */}
                  <div className='flex items-center justify-between'>
                    {activeStep !== 0 && (
                      <button
                        type='button'
                        onClick={_handleBack}
                        className='ud-btn bg-gray-900 text-white hover:bg-gray-900'
                      >
                        <i className='fal fa-arrow-left-long !rotate-0 !ml-0 mr-2' />
                        Back
                      </button>
                    )}
                    <button
                      disabled={isSubmitting}
                      type='submit'
                      className='ud-btn btn-thm dark:text-white ml-auto'
                    >
                      {isLastStep ? (isEdit ? 'Update Room' : 'Create Room') : 'Next Step'}
                      <i className='fal fa-arrow-right-long' />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            )}
      </BoxDashboard>
    </DashboardLayout>
  )
}

export default DshRoomForm
