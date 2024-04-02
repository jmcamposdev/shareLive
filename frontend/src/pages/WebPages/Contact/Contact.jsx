import PageIntroGrey from '../../../components/common/PageIntroGrey/PageIntroGrey'
import WebLayout from '../../../layout/WebLayout'
import FormContact from '../../../components/Contact/FormContact/FormContact'
import OurOffice from '../../../components/Contact/OurOffice/OurOffice'
import NeedHelpBox from '../../../components/common/needHelpBox/NeedHelpBox'

import vector from '../../../assets/vectors/verticalMesh.svg'

const title = 'Contact'
const description = 'Contact us and let us help you find your next student home!'
const backgroundImage = '/src/assets/img/contact/ContactHeader.png'

function Contact () {
  return (
    <div>
      <WebLayout>
        <PageIntroGrey title={title} description={description} backgroundImage={backgroundImage} />

        {/* Start Our Contact Form */}
        <FormContact />
        {/* End Our Contact Form */}

        <img className='absolute top-[1450px] scale-x-[-1] dark:z-[1]' src={vector} />

        {/* Start Visit Our Office */}
        <OurOffice />
        {/* End Visit Our Office */}

        {/* Our CTA */}
        <NeedHelpBox />
        {/* Our CTA */}

      </WebLayout>
    </div>
  )
}
export default Contact
