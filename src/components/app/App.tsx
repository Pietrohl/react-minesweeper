import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Board from '../board'
import Header from '../header'
import Menu from '../menu'
import GlobalStyle from '../../styles/global'
import ToggleSwitch from '../toggleSwitch'
import useToggleTheme from '../../hooks/useToggleTheme'
import { GameContextProvider } from '../../context/gameContext'
import Window from '../window'
import { Loader } from './styles'

const Loaderbar = () => (
  <Loader>
    <div className="loader-header">React_Minesweeper Setup</div>
    <div className="loader-body">
      Loading your Minesweeper...
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  </Loader>
)
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const { theme } = useToggleTheme()
  const [loading, setLoading] = useState(true)

  const notLoading = () => {
    console.log('board loading')
    setTimeout(() => setLoading(false), 2800)
    console.log('board loaded')
  }
  return (
    <GameContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header>
          <ToggleSwitch name={'themeSwitch'} />
        </Header>
        <Window notLoading={notLoading} loading={loading}>
          <Menu />
          <Board />
        </Window>
        {loading && <Loaderbar />}
      </ThemeProvider>
    </GameContextProvider>
  )
}

export default App
