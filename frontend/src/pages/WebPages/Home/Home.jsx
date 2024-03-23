import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
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
    </WebLayout>
  )
}
export default Home
