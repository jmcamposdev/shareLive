import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
import WebLayout from '../../../layout/WebLayout'

function Home () {
  return (
    <WebLayout>
      <HomeHero />
      <div style={{ height: '100vh' }} />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </WebLayout>
  )
}
export default Home
