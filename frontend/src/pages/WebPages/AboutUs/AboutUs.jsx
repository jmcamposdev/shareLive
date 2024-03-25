import Header from '../../../components/Header/Header'
import PageIntro from '../../../components/common/PageIntro/PageIntro'
import IntroImg from '../../../assets/img/aboutUs/introImg.jpg'
import AboutIntro from '../../../components/about/AboutIntro/AboutIntro'
import FaqIntro from '../../../components/about/FaqIntro/FaqIntro'

function AboutUs () {
  return (
    <div>
      <Header />
      <PageIntro title='About Us' description='Discover our history and mission in ShareLive' backgroundImage={IntroImg} />
      <AboutIntro />
      <FaqIntro />
      <h1>About Us</h1>
    </div>
  )
}
export default AboutUs
