const statisticsData = [
  {
    text: 'All Properties',
    title: '583',
    icon: 'flaticon-home'
  },
  {
    text: 'Total Views',
    title: '192',
    icon: 'flaticon-search-chart'
  },
  {
    text: 'Total Visitor Reviews',
    title: '438',
    icon: 'flaticon-review'
  },
  {
    text: 'Total Favorites',
    title: '67',
    icon: 'flaticon-like'
  }
]

const TopStateBlock = () => {
  return (
    <div className='flex flex-wrap '>
      {statisticsData.map((data, index) => (
        <div key={index} className='xl:w-1/4 md:w-1/2 w-full pr-4 pl-4 col-xxl-3'>
          <div className='flex justify-between statistics_funfact'>
            <div className='details'>
              <div className='text fz25'>{data.text}</div>
              <div className='title'>{data.title}</div>
            </div>
            <div className='icon text-center'>
              <i className={data.icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopStateBlock
