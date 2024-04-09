import React, { useEffect } from 'react'

const DebounceInput = ({ onDebouncedValueChange, value, className, inputName, placeholder, debounceTime = 300 }) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // Debounce the value change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDebouncedValueChange(inputValue) // Llamar a la función de retorno de llamada con el valor debounced
    }, debounceTime)
    return () => clearTimeout(timeoutId)
  }, [inputValue, onDebouncedValueChange])

  // Actualizar el valor del input si el valor cambia
  useEffect(() => {
    if (value !== inputValue) setInputValue(value)
  }, [value])

  return (
    <input
      className={className}
      name={inputName}
      placeholder={placeholder}
      type='text'
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}

export default DebounceInput
