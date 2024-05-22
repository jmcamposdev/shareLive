import { useFormikContext } from 'formik'
import DropZone from '../../../Formik/Inputs/DropZone'

const MediaForm = (props) => {
  const { values, handleChange } = useFormikContext() // Obtener handleChange de Formik
  const {
    formField: {
      images
    }
  } = props

  return (
    <div className='py-8'>
      <h5 className='pb-8 mb-0 dark:text-white'>Room Images</h5>
      <DropZone
        value={values[images.name]}
        name={images.name}
        onChange={(files) => handleChange({ target: { name: images.name, value: files } })}
      />
    </div>
  )
}

export default MediaForm
