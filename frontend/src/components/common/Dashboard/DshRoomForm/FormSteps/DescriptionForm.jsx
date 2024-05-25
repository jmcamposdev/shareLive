import { useFormikContext } from 'formik'
import FormikControl from '../../../Formik/Inputs/FormikControl'
import Selector from '../../../Inputs/Selector'

const DescriptionForm = (props) => {
  const { values, handleChange } = useFormikContext() // Obtener handleChange de Formik
  const {
    formField: {
      title,
      excerpt,
      description,
      price,
      propertyStatus
    }
  } = props

  return (
    <div className='py-8'>
      <h5 className='pb-8 mb-0 dark:text-white'>Room Description</h5>
      <div className='flex flex-col gap-5'>
        <FormikControl
          control='input'
          type='text'
          id={title.name}
          name={title.name}
          label={title.label}
          placeholder={title.placeholder}
        />
        <FormikControl
          control='input'
          type='text'
          id={excerpt.name}
          name={excerpt.name}
          label={excerpt.label}
          placeholder={excerpt.placeholder}
        />
        <FormikControl
          control='textarea'
          type='text'
          id={description.name}
          name={description.name}
          label={description.label}
          placeholder={description.placeholder}
          rows='10'
        />
        <div className='flex gap-5'>
          <FormikControl
            control='input'
            type='number'
            id={price.name}
            name={price.name}
            label={price.label}
            placeholder={price.placeholder}
          />
          <Selector
            label={propertyStatus.label}
            id={propertyStatus.name}
            inputName={propertyStatus.name}
            options={propertyStatus.options}
            optionValue={propertyStatus.optionValue}
            optionName={propertyStatus.optionName}
            value={values[propertyStatus.name]}
            onChange={(option) => handleChange({ target: { name: propertyStatus.name, value: option[propertyStatus.optionValue] } })}
            containerClassName='w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default DescriptionForm
