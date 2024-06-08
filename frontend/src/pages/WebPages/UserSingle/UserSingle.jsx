import WebLayout from '../../../layout/WebLayout'
import DescriptionSingle from '../../../components/common/descriptionSingle/DescriptionSingle'
import { useParams } from 'react-router-dom'
import { useUserSingle } from '../../../context/UserSingleContext'
import UserHeaderSingle from './UserHeaderSingle'
import UserLatestRooms from '../../../components/common/SingleUser/UserLastestRooms'
import UserReviews from '../../../components/common/SingleUser/UserReviews/UserReviews'
import UserSidebar from '../../../components/common/SingleUser/UserSidebar'
import UserSingleSkeleton from './UserSingleSkeleton'

const ROOMS_TO_DISPLAY = 4

const UserSingle = () => {
  const { id } = useParams()
  const { user, userRooms, loading } = useUserSingle(id)

  return (
    <>
      {
      loading
        ? <UserSingleSkeleton />
        : (
          <WebLayout>
            <section className='agent-single pt-[150px] dark:bg-lightmidnight realtive'>
              <UserHeaderSingle user={user} />

              <div className='container mx-auto sm:px-4'>
                <div className='flex flex-wrap  wow fadeInUp' data-aos-delay='300'>
                  <div className='w-full lg:w-2/3 pr-4 pl-4 pr40 pr20-lg'>
                    <DescriptionSingle title='About Me' description={user.description} />
                    {/* <ReadMore id='text' text={user.description} amountOfWords={35} /> */}
                    <UserLatestRooms userName={user.name} rooms={userRooms} numToDisplay={ROOMS_TO_DISPLAY} />
                    <UserReviews userSingle={user} />
                  </div>
                  <div className='w-full lg:w-1/3 pr-4 pl-4'>
                    <UserSidebar user={user} />
                  </div>
                </div>
              </div>
            </section>
          </WebLayout>
          )
    }
    </>

  )
}

export default UserSingle
