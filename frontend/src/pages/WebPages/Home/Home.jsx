import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
import RoomsNearYou from '../../../components/RoomsNearYou/RoomsNearYou'
import WebLayout from '../../../layout/WebLayout'

function Home () {
  return (
    <WebLayout>
      <HomeHero />
      <RoomsNearYou />
      <div style={{ height: '100vh' }} />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </WebLayout>
  )
}
export default Home
