const TitleDashboard = ({ title, subtitle }) => {
  return (
    <div className='dashboard_title_area pb40'>
      <h2>{title}</h2>
      <p className='text'>{subtitle}</p>
    </div>
  )
}

export default TitleDashboard
