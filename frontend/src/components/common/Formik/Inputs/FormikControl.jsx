import PropTypes from 'prop-types'
import Input from './Input'
import CheckBox from './Checkbox/CheckBox'

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      rest.as = 'input'
      return <Input {...rest} />
    case 'textarea':
      rest.as = 'textarea'
      return <Input {...rest} />
    case 'checkbox':
      rest.type = 'checkbox'
      return <CheckBox {...rest} />
    default:
      return null
  }
}
FormikControl.propTypes = {
  control: PropTypes.string.isRequired
}
export default FormikControl
