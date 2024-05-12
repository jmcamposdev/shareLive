import spinnerSvg from '../../../../assets/vectors/spinner.svg'

const FormikSubmitBtn = ({ label, isSubmitting }) => {
  return (
    <button
      type='submit'
      className={`ud-btn bg-gray-900 text-white hover:bg-gray-900 dark:border-[#dddddd26] ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
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

export default FormikSubmitBtn
