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
    <div>
      <div className='button r' id='button-3'>
        <input type='checkbox' className='checkbox' onChange={handleOnChange} {...rest} />
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
