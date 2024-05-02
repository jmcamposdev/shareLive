import WebLayout from '../../../layout/WebLayout'
import DescriptionSingleSkeleton from '../../../components/common/descriptionSingle/DescriptionSingleSkeleton'
import { useParams } from 'react-router-dom'
import { useUserSingle } from '../../../context/UserSingleContext'
import UserHeaderSingleSkeleton from './UserHeaderSingleSkeleton'
import UserReviewsSkeleton from '../../../components/common/SingleUser/UserReviews/UserReviewsSkeleton'
import UserSidebarSkeleton from '../../../components/common/SingleUser/UserSidebarSkeleton'
import UserLatestRoomsSkeleton from '../../../components/common/SingleUser/UserLastestRoomsSkeleton'

const UserSingleSkeleton = () => {
  return (
    <WebLayout>
      <section className='agent-single pt-[150px] dark:bg-lightmidnight realtive'>
        <UserHeaderSingleSkeleton />

        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap  wow fadeInUp' data-aos-delay='300'>
            <div className='lg:w-2/3 pr-4 pl-4 pr40 pr20-lg'>
              <DescriptionSingleSkeleton />
              {/* <ReadMore id='text' text={user.description} amountOfWords={35} /> */}
              <UserLatestRoomsSkeleton />
              <UserReviewsSkeleton />
            </div>
            <div className='lg:w-1/3 pr-4 pl-4'>
              <UserSidebarSkeleton />
            </div>
          </div>
        </div>
      </section>

    </WebLayout>
  )
}

export default UserSingleSkeleton
