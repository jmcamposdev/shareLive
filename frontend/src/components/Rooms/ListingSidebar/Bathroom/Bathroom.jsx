const Bathroom = () => {
  const options = [
    { id: 'bathany', label: 'any', defaultChecked: true, value: 0 },
    { id: 'bathoneplus', label: '1+', value: 1 },
    { id: 'bathtwoplus', label: '2+', value: 2 },
    { id: 'baththreeplus', label: '3+', value: 3 },
    { id: 'bathfourplus', label: '4+', value: 4 },
    { id: 'bathfiveplus', label: '5+', value: 5 }
  ]

  return (
    <>
      {options.map((option) => (
        <div className='selection' key={option.id}>
          <input
            id={option.id}
            type='radio'
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </>
  )
}

export default Bathroom
