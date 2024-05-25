import PropTypes from 'prop-types'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'
import SearchUserMsg from './SearchUserMsg'
import UserChatList from './UserChatList/UserChatList'

const UserInboxSidebar = ({ className }) => {
  return (
    <BoxDashboard className={className}>
      <div className='overflow-hidden relative'>
        <div className='inline-block w-full'>
          <SearchUserMsg />
          <UserChatList />
        </div>
      </div>
    </BoxDashboard>
  )
}

PropTypes.UserInboxSidebar = {
  className: PropTypes.string
}

export default UserInboxSidebar
