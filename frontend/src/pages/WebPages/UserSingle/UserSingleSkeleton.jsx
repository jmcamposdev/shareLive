import WebLayout from '../../../layout/WebLayout'
import DescriptionSingle from '../../../components/common/descriptionSingle/DescriptionSingle'
import { useParams } from 'react-router-dom'
import { useUserSingle } from '../../../context/UserSingleContext'
import UserHeaderSingleSkeleton from './UserHeaderSingleSkeleton'
import UserLatestRooms from '../../../components/common/SingleUser/UserLastestRooms'
import UserReviews from '../../../components/common/SingleUser/UserReviews/UserReviews'
import UserSidebar from '../../../components/common/SingleUser/UserSidebar'

const UserSingleSkeleton = () => {
  return (
    <WebLayout>
      <section className='agent-single pt-[150px] dark:bg-lightmidnight realtive'>
        <UserHeaderSingleSkeleton />

        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap  wow fadeInUp' data-aos-delay='300'>
            <div className='lg:w-2/3 pr-4 pl-4 pr40 pr20-lg'>
              {/* <DescriptionSingle title='About Me' description={user.description} /> */}
              {/* <ReadMore id='text' text={user.description} amountOfWords={35} /> */}
              {/* <UserLatestRooms userName={user.name} rooms={userRooms} numToDisplay={ROOMS_TO_DISPLAY} />
              <UserReviews userSingle={user} /> */}
            </div>
            <div className='lg:w-1/3 pr-4 pl-4'>
              {/* <UserSidebar user={user} /> */}
            </div>
          </div>
        </div>
      </section>

    </WebLayout>
  )
}

export default UserSingleSkeleton
