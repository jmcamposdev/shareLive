import PropTypes from 'prop-types'
import spinnerSvg from '../../../../assets/vectors/spinner.svg'

const FormikSubmitBtn = ({ label, isSubmitting, isDanger = false, className }) => {
  return (
    <button
      type='submit'
      className={`
      ud-btn bg-gray-900 text-white hover:bg-gray-900 dark:border-[#dddddd26] 
      ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}
      ${isDanger && 'bg-red-500 before:bg-[#c93939] hover:bg-red-500'}
      ${className}`}
      disabled={isSubmitting}
    >
      {label}
      {isSubmitting
        ? (
          <img src={spinnerSvg} alt='spinner' className='inline w-[16px] ml-[10px] h-[28px]' /> // Add spinnerSvg
          )
        : (
          <i className='fal fa-arrow-right-long' />
          )}
    </button>
  )
}

FormikSubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isDanger: PropTypes.bool
}

export default FormikSubmitBtn
