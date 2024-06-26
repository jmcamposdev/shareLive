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
import FormikSubmitBtn from '../../Formik/Buttons/FormikSubmitBtn'
import FinishStep from './FormSteps/FinishStep'

const steps = ['Description', 'Media', 'Location', 'Details']
const { formId, formField } = roomFormModel

const DshRoomForm = ({ title, subtitle, onSubmit, initialValues, isEdit }) => {
  const formRef = useRef(null)
  const [room, setRoom] = useState(null)
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

  async function _handleSubmit (values, actions) {
    if (isLastStep) {
      const room = await onSubmit(values, actions)
      setRoom(room)
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
            <FinishStep room={room} isEdit={isEdit} />
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
                  <div className={`flex items-center ${activeStep !== 0 ? 'justify-between' : 'justify-end'}`}>
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
                    <FormikSubmitBtn
                      label={isLastStep ? (isEdit ? 'Update Room' : 'Create Room') : 'Next Step'}
                      isSubmitting={isSubmitting}
                    />
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
