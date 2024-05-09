import PropTypes from 'prop-types'

const Stepper = ({ steps, activeStep, stepsClick }) => {
  const renderStepLabe = (label, index) => {
    const isCurrentStep = index === activeStep
    return (
      <div
        key={label}
        onClick={() => stepsClick(index)}
        className={`px-4 step-label font-bold cursor-pointer ${isCurrentStep ? 'text-[#181A20]' : 'text-[#181A20]/50'}`}
      >
        {index + 1}. {label}
      </div>
    )
  }

  return (
    <div className='flex gap-4 border-b border-b-slate-300'>
      {steps.map(renderStepLabe)}
    </div>
  )
}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  stepsClick: PropTypes.func.isRequired
}

export default Stepper
