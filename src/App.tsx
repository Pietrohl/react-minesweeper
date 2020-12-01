import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Board from './components/board';
import Header from './components/header';
import Menu from './components/menu/menu';
import modern from './styles/themes/modern';
import GlobalStyle from './styles/global'
import ToggleSwitch from './components/toggleSwitch';

function App() {
  const [menu, setMenu] = useState(true)


  return (
    <>
      <ToggleSwitch Name={'teste'} />
      <ThemeProvider theme={modern}>
        <GlobalStyle />
        <Header />
        {menu ? <Menu menu={menu} setMenu={setMenu} /> : <Board />}
      </ThemeProvider>
    </>
  );
}




export default App;
