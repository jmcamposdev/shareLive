import { useState, useEffect } from 'react'

function useIsPhone () {
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 1400)

  const updateWindowState = () => {
    setIsPhone(window.innerWidth <= 1400)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowState)
  }, [])

  return isPhone
}

export default useIsPhone
