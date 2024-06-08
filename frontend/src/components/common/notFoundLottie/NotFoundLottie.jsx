import NotFound from '../../../assets/lotties/notFound.json'
import Lottie from 'react-lottie'

const NotFoundLottie = ({ mssg }) => {
  return (
    <div className='mx-auto md:max-w-96'>
      <h6 className='mx-auto'>{mssg}</h6>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: NotFound,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        width='100%'
      />
    </div>
  )
}

export default NotFoundLottie
