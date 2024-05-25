import { useMessages } from '../../../../context/MessagesContext'
import BoxDashboard from '../../../common/Dashboard/BoxDashboard/BoxDashboard'
import UserChatBoxContent from './UserChatBoxContent/UserChatBoxContent'
import UserChatForm from './UserChatForm/UserChatForm'
import UserChatHeader from './UserChatHeader/UserChatHeader'

const UserChatSidebar = ({ className }) => {
  const { selectedContact, loading, user, createMessage, deleteConversation, messages, messagesLoading, scrollRef } = useMessages()

  const onCreateMessage = (values, actions) => {
    actions.setSubmitting(true)
    // Send the message
    try {
      createMessage(values.message, user._id, selectedContact._id)
    } catch (error) {
      console.error('Error sending message:', error.message)
    } finally {
      actions.setSubmitting(false)
      actions.resetForm()
    }
  }

  const onDeleteConversation = async (values, actions) => {
    actions.setSubmitting(true)
    try {
      await deleteConversation(selectedContact._id)
    } catch (error) {
      console.error('Error deleting conversation:', error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <BoxDashboard className={className}>
      {selectedContact
        ? (
          <>
            <UserChatHeader user={selectedContact} loading={loading} onDeleteUser={onDeleteConversation} />
            <UserChatBoxContent messages={messages} senderUser={user} receiverUser={selectedContact} scrollRef={scrollRef} loading={messagesLoading} />
            <UserChatForm onSubmit={onCreateMessage} />
          </>
          )
        : (
          <div className='flex items-center justify-center h-full'>
            <p className='text-gray-500'>Select a contact to start chatting</p>
          </div>
          )}
    </BoxDashboard>
  )
}

export default UserChatSidebar
