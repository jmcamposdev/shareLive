import React from 'react'
import PropTypes from 'prop-types'

const PageIntro = ({ title, description, backgroundImage }) => {
  return (
    <div className='min-h-[650px] relative flex justify-center items-end border-slate-950 dark:bg-midnight'>
      <div className='h-[420px] top-0 w-full absolute bg-midnight' />
      <div className='h-[230px] absolute bottom-0 w-full bg-inherit dark:bg-midnight' />
      <div
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        className='bg-center bg-cover bg-no-repeat h-[400px] min-h-[400px] w-[1600px] mx-3 shrink rounded-xl mb-24 z-[5] flex justify-center items-center flex-column'
      >
        <h2 className='text-fff text-[46px] font-bold hero-title text-center' data-aos='fade-up' data-aos-delay='150'>{title}</h2>
        <p className='text-fff hero-text fz15 font-normal text-center' data-aos='fade-up' data-aos-delay='250'>{description}</p>
      </div>
    </div>
  )
}

PageIntro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
}

export default PageIntro
