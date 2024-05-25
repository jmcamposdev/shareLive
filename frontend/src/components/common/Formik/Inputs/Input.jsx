import { ErrorMessage, Field, useField } from 'formik'
import PropTypes from 'prop-types'
import TextError from './TextError'

const Input = (props) => {
  const { name, label, className, ...rest } = props
  const [field, meta] = useField(name)

  return (
    <div className='w-full'>
      {label && <label htmlFor={name} className='fw600 ff-heading mb-2 dark:text-white '>{label}</label>}
      <Field
        {...field}
        {...rest}
        className={`form-control block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded ${className || ''} ${meta.touched && meta.error ? '!border-red-500' : ''}`}
      />
      {meta.touched && meta.error
        ? (
          <TextError>
            <ErrorMessage name={name} />
          </TextError>
          )
        : null}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Input
