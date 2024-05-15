import socialUserFormModel from './socialUserFormModel'

const {
  formField: {
    facebook,
    twitter,
    linkedin,
    instagram
  }
} = socialUserFormModel

export const socialUserInitialValues = (user) => {
  return {
    [facebook.name]: user?.socials?.facebook || '',
    [twitter.name]: user?.socials?.twitter || '',
    [linkedin.name]: user?.socials?.linkedin || '',
    [instagram.name]: user?.socials?.instagram || ''
  }
}
