import { useMemo } from 'react'
import TopStateBlockSkeleton from './TopStateBlockSkeleton'

const TopStateBlock = ({ totalRooms, totalViews, totalReviews, totalFavorites, loading }) => {
  const statisticsData = useMemo(() => [
    {
      text: 'All Properties',
      title: totalRooms,
      icon: 'flaticon-home'
    },
    {
      text: 'Total Views',
      title: totalViews,
      icon: 'flaticon-search-chart'
    },
    {
      text: 'Total Visitor Reviews',
      title: totalReviews,
      icon: 'flaticon-review'
    },
    {
      text: 'Total Favorites',
      title: totalFavorites,
      icon: 'flaticon-like'
    }
  ], [totalRooms, totalViews, totalReviews, totalFavorites])
  return (
    <>
      {loading
        ? <TopStateBlockSkeleton />
        : (
          <div className='flex flex-wrap '>
            {statisticsData.map((data, index) => (
              <div key={index} className='xl:w-1/4 lg:w-1/2 w-full pr-4 pl-4 col-xxl-3'>
                <div className='flex justify-between statistics_funfact dark:bg-midnight'>
                  <div className='details'>
                    <div className='text fz25 dark:text-white'>{data.text}</div>
                    <div className='title dark:text-white'>{data.title}</div>
                  </div>
                  <div className='icon text-center dark:bg-lightmidnight flex justify-center items-center'>
                    <i className={`flex dark:text-white ${data.icon}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
    </>
  )
}

export default TopStateBlock
