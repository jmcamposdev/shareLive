import { Field } from 'formik'
import { useState, useRef, useEffect } from 'react'

const Selector = ({
  id,
  inputName,
  inputType,
  label,
  labelClassName,
  options,
  optionValue,
  optionName,
  value,
  handleChange,
  onChange
}) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const selectorRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsSelectorOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleOpenCloseSelector = () => {
    setIsSelectorOpen(!isSelectorOpen)
  }

  const handleSelectorChange = (e) => {
    handleOpenCloseSelector()
    const optionSelected = e.target.getAttribute('data-value')
    const option = options.find((option) => String(option[optionValue]) === optionSelected)
    if (onChange) {
      onChange(option)
      console.log(option)
    }
    if (handleChange) {
      handleChange({ target: { name: inputName, value: option } })
    }
  }

  return (
    <div ref={selectorRef} className='mb-4'>
      <label className={`fw600 ff-heading mb-2 dark:text-white ${labelClassName}`}>{label}</label>
      <div className='dark:!border-gray-100/40 dark:!bg-midnight rounded-lg dark:text-white relative block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 form-control'>
        <div
          onClick={handleOpenCloseSelector}
          className='dark:text-white rounded-lg !border-0 dark:bg-midnight absolute w-full h-full top-0 left-0 flex justify-between items-center py-2 px-4 pr-6 '
        >
          <p className='m-0 p-0 text-slate-500 dark:text-white '>
            {value[optionName]}
          </p>
          <div className='w-[37px] h-full flex justify-between items-center'>
            <div className='h-full border-l border-slate-300'>
              &nbsp;
            </div>
            <div className={`fa-solid fa-chevron-down transition-all duration-300 ${isSelectorOpen ? 'transform rotate-180' : ''}`} />
          </div>
        </div>
        <ul
          className={`border border-slate-500 block m-0 p-0 w-full absolute left-0 top-[110%] rounded-lg overflow-auto  bg-white dark:!bg-midnight dark:!border-gray-100/40 transition-all duration-300 z-10 ${
            isSelectorOpen ? 'opacity-100 max-h-[150px]' : 'opacity-0 max-h-[0px]'
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              data-value={option[optionValue]}
              onClick={handleSelectorChange}
              className={`${
                option[optionValue] === value[optionValue]
                  ? 'bg-orangePrimary/40 dark:bg-orangeSecondary'
                  : 'bg-white dark:bg-midnight'
              } hover:bg-orangePrimary/20 hover:dark:bg-lightmidnight cursor-pointer w-full py-3 px-4 text-gray-800 dark:text-white transition-all duration-300`}
            >
              {option[optionName]}
            </li>
          ))}
        </ul>
      </div>
      {handleChange && (
        <Field
          id={id}
          name={inputName}
          className='absolute w-0 h-0'
          type={inputType ?? 'text'}
        />
      )}
      {onChange && (
        <input
          id={id}
          name={inputName}
          className='absolute w-0 h-0'
          type={inputType ?? 'text'}
          defaultValue={value[optionValue]}
        />
      )}
    </div>
  )
}

export default Selector
