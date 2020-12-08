import { useContext } from 'react'
import { DefaultTheme } from 'styled-components'
import { ThemeContext } from '../context/toggleTheme'

const useTheme = (): DefaultTheme => {
  const { theme } = useContext(ThemeContext)
  return theme
}

export default useTheme
