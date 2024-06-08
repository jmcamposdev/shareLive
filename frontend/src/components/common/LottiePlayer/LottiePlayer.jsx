import Lottie from 'react-lottie'

const NotFoundLottie = ({ mssg, lottie }) => {
  return (
    <div className='mx-auto md:max-w-96'>
      <h6 className='mx-auto dark:text-white'>{mssg}</h6>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: lottie,
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
