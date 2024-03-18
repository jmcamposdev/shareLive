import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function WebLayout ({ children }) {
  return (
    <div>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* All Content */}
      <main>
        {children}
      </main>
      {/* End All Content */}

      {/* Start Our Footer */}
      <section className='footer-style1 at-home2 pb-0'>
        <Footer />
      </section>
      {/* End Our Footer */}
    </div>
  )
}

export default WebLayout
