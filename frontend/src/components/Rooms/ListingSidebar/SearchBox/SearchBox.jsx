const SearchBox = () => {
  return (
    <div className='search_area'>
      <input
        type='text'
        className='form-control dark:bg-lightmidnight dark:border-borderColor/20 dark:placeholder:text-slate-300 dark:text-white dark:outline-white'
        placeholder='What are you looking for?'
      />
      <label>
        <span className='flaticon-search dark:text-white' />
      </label>
    </div>
  )
}

export default SearchBox
