const TitleDashboard = ({ title, subtitle }) => {
  return (
    <div className='dashboard_title_area pb40'>
      <h2 className='dark:text-white'>{title}</h2>
      <p className='text dark:text-white'>{subtitle}</p>
    </div>
  )
}

export default TitleDashboard
