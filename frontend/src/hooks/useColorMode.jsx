import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import LightFavicon from '../assets/logos/favicon.ico'
import DarkFavicon from '../assets/logos/faviconDark.ico'

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light')

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    colorMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className)
  }, [colorMode])

  useEffect(() => {
    if (!colorMode) return

    const favicon = document.getElementById('favicon')
    const faviconPath = colorMode === 'light' ? LightFavicon : DarkFavicon
    favicon.href = faviconPath
  }, [colorMode])

  return [colorMode, setColorMode]
}

export default useColorMode
