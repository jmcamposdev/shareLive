import { format } from 'date-fns'

const UserChatBoxContent = ({ messages, senderUser, receiverUser, scrollRef, loading }) => {
  return (
    <div className='inbox_chatting_box min-h-[500px] xl:min-h-px'>
      {loading
        ? (
          <div className='chatting_content flex justify-center items-center h-full'>
            <p className='text-center text-gray-500'>Loading messages...</p>
          </div>
          )
        : (
          <ul className='chatting_content'>
            {messages.map((message, index) => {
              const formattedTime = format(new Date(message.createdAt), 'hh:mm a').toLowerCase()

              return (
                <li
                  ref={scrollRef}
                  key={message._id}
                  className={`!mb-0 w-fit max-w-[45%] ${message.fromSelf ? 'reply self-end !m-0' : 'sent float-start'}`}
                >
                  <div className='message-content position-relative !max-w-full'>
                    <p className={`m-0 position-relative !max-w-full !px-8 dark:!text-white ${message.fromSelf ? 'dark:!bg-[#2E2225]' : 'dark:!bg-[#222e25]'}`}>
                      {message.message}
                      <small className={`!text-[10px] time-label position-absolute bottom-1 dark:text-white ${message.fromSelf ? 'left-2' : 'right-2'}`}>
                        {formattedTime}
                      </small>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
          )}
    </div>
  )
}

export default UserChatBoxContent
