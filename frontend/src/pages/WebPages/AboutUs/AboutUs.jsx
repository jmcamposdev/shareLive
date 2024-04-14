import PageIntro from '../../../components/common/PageIntroGrey/PageIntroGrey'
import IntroImg from '../../../assets/img/aboutUs/introImg.jpg'
import AboutIntro from '../../../components/about/AboutIntro/AboutIntro'
import FaqIntro from '../../../components/about/FaqIntro/FaqIntro'
import Faq from '../../../components/about/Faq/Faq'
import InstagramIntro from '../../../components/about/InstagramIntro/InstagramIntro'
import InstagramGallery from '../../../components/about/InstagramGallery/InstagramGallery'
import WebLayout from '../../../layout/WebLayout'

function AboutUs () {
  return (
    <WebLayout>
      <PageIntro title='About Us' description='Discover our history and mission in ShareLive' backgroundImage={IntroImg} />
      <AboutIntro />
      <FaqIntro />
      <Faq />
      <InstagramIntro />
      <InstagramGallery />
    </WebLayout>

  )
}
export default AboutUs
