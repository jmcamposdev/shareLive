const SearchBox = () => {
  return (
    <div className='search_area'>
      <input
        type='text'
        className='form-control'
        placeholder='What are you looking for?'
      />
      <label>
        <span className='flaticon-search' />
      </label>
    </div>
  )
}

export default SearchBox
