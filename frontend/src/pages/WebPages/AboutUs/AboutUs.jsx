import Header from '../../../components/Header/Header'
import PageIntro from '../../../components/common/PageIntro/PageIntro'
import IntroImg from '../../../assets/img/aboutUs/introImg.jpg'
import AboutIntro from '../../../components/about/AboutIntro/AboutIntro'
import FaqIntro from '../../../components/about/FaqIntro/FaqIntro'
import Faq from '../../../components/about/Faq/Faq'

function AboutUs () {
  return (
    <div>
      <Header />
      <PageIntro title='About Us' description='Discover our history and mission in ShareLive' backgroundImage={IntroImg} />
      <AboutIntro />
      <FaqIntro />
      <Faq />
      <h1>About Us</h1>
    </div>
  )
}
export default AboutUs
