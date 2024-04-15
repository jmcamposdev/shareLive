const Chevron = () => {
  function goTop () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div onClick={goTop} className='scrollToHome hover:cursor-pointer dark:border-white dark:hover:border-midnight dark:hover:bg-white dark:hover:border-transparent group'><i className='fas fa-angle-up dark:text-white dark:group-hover:text-midnight' /></div>
  )
}

export default Chevron
