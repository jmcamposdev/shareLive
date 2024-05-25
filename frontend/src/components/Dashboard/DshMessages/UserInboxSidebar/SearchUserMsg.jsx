import { useMessages } from '../../../../context/MessagesContext'

const SearchUserMsg = () => {
  const { handleSearchContacts } = useMessages()
  return (
    <div className='user-search mb30'>
      <div className='chat_user_search'>
        <form className='d-flex align-items-center'>
          <button className='btn !bg-[#f7f7f7] opacity-100' type='submit' disabled>
            <span className='flaticon-search' />
          </button>
          <input
            className='form-control !outline-none'
            type='search'
            placeholder='Serach'
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
