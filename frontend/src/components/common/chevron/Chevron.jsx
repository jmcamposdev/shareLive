const Chevron = () => {
  function goTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div onClick={goTop} className='scrollToHome hover:cursor-pointer'><i className='fas fa-angle-up' /></div>
  )
}

export default Chevron
