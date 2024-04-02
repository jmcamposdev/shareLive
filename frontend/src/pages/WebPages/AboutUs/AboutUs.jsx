import Header from '../../../components/Header/Header'
import PageIntro from '../../../components/common/PageIntroGrey/PageIntroGrey'
import IntroImg from '../../../assets/img/aboutUs/introImg.jpg'
import AboutIntro from '../../../components/about/AboutIntro/AboutIntro'
import FaqIntro from '../../../components/about/FaqIntro/FaqIntro'
import Faq from '../../../components/about/Faq/Faq'
import Footer from '../../../components/Footer/Footer'

function AboutUs () {
  return (
    <>
      <Header />
      <PageIntro title='About Us' description='Discover our history and mission in ShareLive' backgroundImage={IntroImg} />
      <AboutIntro />
      <FaqIntro />
      <Faq />
      <Footer />
    </>
  )
}
export default AboutUs
