import * as Yup from 'yup'
import socialUserFormModel from './socialUserFormModel'

const {
  formField: {
    facebook,
    twitter,
    linkedin,
    instagram
  }
} = socialUserFormModel

export default
Yup.object().shape({
  [facebook.name]: Yup.string(),
  [twitter.name]: Yup.string(),
  [linkedin.name]: Yup.string(),
  [instagram.name]: Yup.string()
})
