import React from 'react';
import { ThemeProvider } from 'styled-components';
import Board from '../board';
import Header from '../header';
import Menu from '../menu';
import GlobalStyle from '../../styles/global'
import ToggleSwitch from '../toggleSwitch';
import useToggleTheme from '../../hooks/useToggleTheme';
import { GameContextProvider } from '../../context/gameContext';


function App() {
  const { theme } = useToggleTheme()

  return (
    <GameContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header>
          <ToggleSwitch name={'themeSwitch'} />
        </Header>
        <Menu />  
        <Board/>
      </ThemeProvider>
    </GameContextProvider>
  );
}




export default App;
