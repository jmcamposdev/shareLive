import React from 'react'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'
import TitleBoxDashboard from '../../../common/Dashboard/TitleBoxDashboard/TitleBoxDashboard'
import useRecentActivities from '../../../../hooks/useRecentActivities'

const RecentActivities = () => {
  const { loading, activities } = useRecentActivities(15)
  return (
    <BoxDashboard className='xl:!mb-0 h-[610px]'>
      <TitleBoxDashboard title='Recent Activities' />
      <div className='recent-activities-list overflow-y-scroll h-[88%] pr-2'>

        {!loading && activities.map((activity, index) => (
          <div
            key={index}
            className='recent-activity d-sm-flex align-items-center mb20'
          >
            <span className={`icon me-3 ${activity.icon} dark:text-white flex-shrink-0 dark:bg-orangePrimary/10`} />
            <p className='text mb-0 flex-grow-1 dark:text-white'>
              {activity.text}
            </p>
          </div>
        ))}
      </div>
    </BoxDashboard>
  )
}

export default RecentActivities
