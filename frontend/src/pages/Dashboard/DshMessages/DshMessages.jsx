import UserChatSidebar from '../../../components/Dashboard/DshMessages/UserChatSidebar/UserChatSidebar'
import UserInboxSidebar from '../../../components/Dashboard/DshMessages/UserInboxSidebar/UserInboxSidebar'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import MessagesProvider from '../../../context/MessagesContext'
import DashboardLayout from '../../../layout/DashboardLayout'

const DshMessages = () => {
  return (
    <MessagesProvider>
      <DashboardLayout>
        <TitleDashboard title='Messages' subtitle='Here you can see all your messages' />
        <div className='flex gap-5 xl:flex-row flex-col'>
          <UserInboxSidebar className='xl:w-1/3 w-full !mb-0 xl:!mb-[30px]' />
          <UserChatSidebar className='xl:w-2/3 w-full' />
        </div>
      </DashboardLayout>
    </MessagesProvider>
  )
}

export default DshMessages
