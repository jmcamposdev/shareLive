const PageIntro = ({ title, description, backgroundImage }) => {
  return (
    <div className='min-h-[650px] relative flex justify-center items-end border-slate-950'>
      <div className='h-[420px] top-0 w-full absolute bg-midnight' />
      <div className='h-[230px] absolute bottom-0 w-full bg-f7f7f7' />
      <div
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        className='bg-center bg-cover bg-no-repeat h-[400px] min-h-[400px] w-[1600px] mx-3 shrink rounded-xl mb-24 z-10 flex justify-center items-center flex-column'
      >
        <h2 className='hero-title' data-aos='fade-up' data-aos-delay='150'>{title}</h2>
        <p className='hero-text fz15' data-aos='fade-up' data-aos-delay='250'>{description}</p>
      </div>
    </div>
  )
}

export default PageIntro
