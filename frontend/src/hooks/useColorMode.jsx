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
  }, [colorMode])

  const favicon = document.getElementById('favicon')
  const faviconPath = colorMode === 'light' ? 'favicon.ico' : 'faviconDark.ico'
  favicon.href = faviconPath

  return [colorMode, setColorMode]
}

export default useColorMode
