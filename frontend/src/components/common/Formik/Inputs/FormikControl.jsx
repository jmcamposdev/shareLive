import PropTypes from 'prop-types'
import Input from './Input'

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      rest.as = 'input'
      return <Input {...rest} />
    case 'textarea':
      rest.as = 'textarea'
      return <Input {...rest} />
    default:
      return null
  }
}
FormikControl.propTypes = {
  control: PropTypes.string.isRequired
}
export default FormikControl
