import LoadingSkeleton from '../Loading/LoadingSkeleton'

const ContactFormSingleSkeleton = () => {
  return (
    <div className='agent-single-form home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white relative dark:bg-midnight dark:border-borderColor/10  '>
      <h4 className='form-title mb25 dark:text-white'>
        <LoadingSkeleton className='h-6 w-32' />
      </h4>
      <form className='form-style1'>
        <div className='flex flex-wrap '>
          <div className='w-full'>
            <LoadingSkeleton className='mb20 w-full h-[55px]' innerClasses='rounded-md' />
          </div>
          <div className='w-full'>
            <LoadingSkeleton className='mb20 w-full h-[55px]' innerClasses='rounded-md' />
          </div>
          <div className='w-full'>
            <LoadingSkeleton className='mb20 w-full h-[55px]' innerClasses='rounded-md' />
          </div>
          <div className='w-full'>
            <LoadingSkeleton className='mb20 w-full h-[162px]' innerClasses='rounded-md' />
          </div>
          <div className='w-full'>
            <LoadingSkeleton className='mb20 w-full h-[55px]' innerClasses='rounded-xl' />
          </div>
          <div className='w-full'>
            <LoadingSkeleton className='mb20 w-full h-[55px]' innerClasses='rounded-xl' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactFormSingleSkeleton
