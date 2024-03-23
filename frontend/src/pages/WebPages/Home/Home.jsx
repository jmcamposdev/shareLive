import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
import Statistics from '../../../components/Home/Statistics/Statistics'
import RoomsNearYou from '../../../components/RoomsNearYou/RoomsNearYou'
import WebLayout from '../../../layout/WebLayout'

function Home () {
  return (
    <WebLayout>
      <HomeHero />
      <RoomsNearYou />
      <Statistics />
    </WebLayout>
  )
}
export default Home
