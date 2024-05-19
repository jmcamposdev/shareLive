import { ErrorMessage, useField } from 'formik'
import TextError from '../TextError'
import './checkbox.css'

const CheckBox = (props) => {
  const { name, label, className, ...rest } = props
  const [field, meta] = useField(name)

  const handleOnChange = (e) => {
    field.onChange({ target: { name: field.name, value: e.target.checked } })
  }

  return (
    <div className='flex justify-center items-center gap-5 min-h-9'>
      <label
        htmlFor={name}
        className='fw600 ff-heading m-0 dark:text-white '
      >
        {label}
      </label>
      <div className='button r mt-auto' id='button-3'>
        <input
          type='checkbox'
          className='checkbox'
          onChange={handleOnChange}
          checked={field.value}
          {...rest}
        />
        <div className='knobs' />
        <div className='layer' />
      </div>
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

export default CheckBox
