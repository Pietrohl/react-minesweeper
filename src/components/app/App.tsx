import React from 'react'
import { ThemeProvider } from 'styled-components'
import Board from '../board'
import Header from '../header'
import Menu from '../menu'
import GlobalStyle from '../../styles/global'
import ToggleSwitch from '../toggleSwitch'
import useToggleTheme from '../../hooks/useToggleTheme'
import { GameContextProvider } from '../../context/gameContext'
import Window from '../window'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const { theme } = useToggleTheme()

  return (
    <GameContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header>
          <ToggleSwitch name={'themeSwitch'} />
        </Header>
        <Window>
          <Menu />
          <Board />
        </Window>
      </ThemeProvider>
    </GameContextProvider>
  )
}

export default App
