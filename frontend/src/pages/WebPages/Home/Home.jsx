import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
import DreamRoom from '../../../components/Home/DreamRoom/DreamRoom'
import FunFact from '../../../components/Home/FunFact/FunFact'
import PopularCities from '../../../components/Home/PopularCities/PopularCities'
import Statistics from '../../../components/Home/Statistics/Statistics'
import Testimonials from '../../../components/Home/Testimonials/Testimonials'
import WhyChoose from '../../../components/Home/WhyChoose/WhyChoose'
import RoomsNearYou from '../../../components/RoomsNearYou/RoomsNearYou'
import WebLayout from '../../../layout/WebLayout'

function Home () {
  return (
    <WebLayout>
      <HomeHero />
      <RoomsNearYou />
      <Statistics />
      <PopularCities />
      <FunFact />
      <WhyChoose />
      <Testimonials />
      <DreamRoom />
    </WebLayout>
  )
}
export default Home
