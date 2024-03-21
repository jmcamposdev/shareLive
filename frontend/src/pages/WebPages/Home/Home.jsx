import HomeHero from '../../../components/Heros/HomeHero/HomeHero'
import WebLayout from '../../../layout/WebLayout'
import PageIntro from '../../../components/common/PageIntro/PageIntro'

function Home () {
  return (
    <WebLayout>
      <HomeHero />
      <PageIntro />
      <div style={{ height: '100vh' }} />
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </WebLayout>
  )
}
export default Home
