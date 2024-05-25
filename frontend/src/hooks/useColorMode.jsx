import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light')

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className)

    const favicon = document.getElementById('favicon')
    const faviconPath = colorMode === 'light' ? 'favicon.ico' : 'faviconDark.ico'
    favicon.href = faviconPath
  }, [colorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
