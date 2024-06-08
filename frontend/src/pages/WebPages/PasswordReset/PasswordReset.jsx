import WebLayout from '../../../layout/WebLayout'
import { PasswordResetProvider, usePasswordReset } from '../../../context/PasswordResetContext'

const PasswordResetContent = () => {
  const { renderStep } = usePasswordReset()

  return (
    <WebLayout>
      <section className='our-compare h-screen pt120 pb120 relative dark:bg-lightmidnight'>
        <div className='container mx-auto sm:px-4 h-full flex justify-center items-center'>
          <div className='flex flex-wrap justify-center flex-1 aos-init aos-animate' data-aos='fade-left' data-aos-delay='300'>
            <div className='w-full lg:w-1/2 pr-4 pl-4'>
              <div className='dark:bg-midnight log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12'>
                {renderStep()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  )
}

const PasswordReset = () => {
  return (
    <PasswordResetProvider>
      <PasswordResetContent />
    </PasswordResetProvider>
  )
}

export default PasswordReset
