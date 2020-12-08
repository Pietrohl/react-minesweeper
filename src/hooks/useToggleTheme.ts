import { useContext } from 'react'
import { ThemeContext, ThemeContextData } from '../context/toggleTheme'

function useToggleTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  return context
}

export default useToggleTheme
