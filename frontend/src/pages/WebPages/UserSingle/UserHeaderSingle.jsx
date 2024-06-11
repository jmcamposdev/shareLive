import CircleOrange from '../../../assets/img/users/circleOrange.png'
import Bounce1 from '../../../assets/img/users/bounce.png'
import Bounce1Dark from '../../../assets/img/users/bounceDark.png'
import Bounce2 from '../../../assets/img/users/bounce2.png'
import Bounce2Dark from '../../../assets/img/users/bounce2Dark.png'
import CircleOrangeDark from '../../../assets/img/users/circleOrangeDark.png'
import UserReviewsStats from '../../../components/common/SingleUser/UserReviewsStats'
import UserSocials from '../../../components/common/SingleUser/UserSocials'
import { getAvatarImage } from '../../../utils/user.utils'

const UserHeaderSingle = ({ user }) => {
  return (
    <div className='dark:bg-[#181a20] cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 relative mx20-lg'>
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap  items-center'>
          <div className='xl:w-3/5 pr-4 pl-4'>
            <div className='agent-single sm:flex items-center'>
              <div className='single-img mb30-sm'>
                <img alt='agents' loading='lazy' width='172' height='172' decoding='async' data-nimg='1' className='text-transparent rounded-full object-cover z-20 relative w-[172px] aspect-square' src={getAvatarImage(user.avatar)} />
              </div>
              <div className='single-contant ml30 ml0-xs'>
                <h2 className='title dark:text-white mb-2'>{`${user.firstName} ${user.lastName}`}</h2>
                {/* <p className='fz15'>Renter in <b>`${user.zone}`</b></p> */}
                <div className='agent-meta mb15 md:flex items-center'>
                  <UserReviewsStats className='pe-2' reviews={user.reviews} />
                  {user.phone ? (<Link to={`tel:${user.phone}`} className='text fz15 pe-2 ps-2  dark:text-white'><i className='flaticon-call pe-1' />{user.phone}</Link>) : ''}
                  {/* bdrl1 bdrr1 */}
                  {user.mobilePhone ? (<Link to={`tel:${user.mobilePhone}`} className='text fz15 ps-2 dark:text-white'><i className='flaticon-smartphone pe-1' />{user.mobilePhone}</Link>) : ''}
                </div>
                <UserSocials user={user} />
              </div>
            </div>
            <div className='img-box-11 relative hidden xl:block'>
              <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent dark:hidden' src={CircleOrange} />
              <img alt='agents' loading='lazy' width='120' height='120' decoding='async' data-nimg='1' className='img-1 spin-right text-transparent hidden dark:block !z-10' src={CircleOrangeDark} />
              <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent dark:hidden' src={Bounce2} />
              <img alt='agents' loading='lazy' width='41' height='11' decoding='async' data-nimg='1' className='img-2 bounce-x text-transparent hidden dark:block' src={Bounce2Dark} />
              <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent dark:hidden' src={Bounce1} />
              <img alt='agents' loading='lazy' width='57' height='49' decoding='async' data-nimg='1' className='img-3 bounce-y text-transparent hidden dark:block' src={Bounce1Dark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHeaderSingle
