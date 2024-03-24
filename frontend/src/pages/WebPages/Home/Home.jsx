import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
import FunFact from '../../../components/Home/FunFact/FunFact'
import PopularCities from '../../../components/Home/PopularCities/PopularCities'
import Statistics from '../../../components/Home/Statistics/Statistics'
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
    </WebLayout>
  )
}
export default Home
