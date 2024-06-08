import { useMessages } from '../../../../context/MessagesContext'

const SearchUserMsg = () => {
  const { handleSearchContacts } = useMessages()
  return (
    <div className='user-search mb30'>
      <div className='chat_user_search border dark:!border-borderColor/20'>
        <form className='d-flex align-items-center dark:!border-borderColor/20'>
          <button
            className='btn !bg-[#f7f7f7] opacity-100 dark:!bg-midnight'
            type='submit'
            disabled
          >
            <span className='flaticon-search dark:text-borderColor/40' />
          </button>
          <input
            className='form-control !outline-none dark:!bg-midnight dark:placeholder:text-borderColor/40 dark:text-white'
            type='search'
            placeholder='Search'
            aria-label='Search'
            required
            onChange={handleSearchContacts}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchUserMsg
