import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Board from '../board';
import Header from '../header';
import Menu from '../menu/menu';
import GlobalStyle from '../../styles/global'
import ToggleSwitch from '../toggleSwitch';
import useToggleTheme from '../../hooks/useToggleTheme';


function App() {
  const [menu, setMenu] = useState(false)
  const { theme } = useToggleTheme()

  return (
      <ThemeProvider theme={theme}>
        {/* <ToggleSwitch name={'teste'} /> */}
        <GlobalStyle />
        <Header />
        {menu ? <Menu menu={menu} setMenu={setMenu} /> : <Board rows={9} columns={9} bombs={10}/>}
      </ThemeProvider>
  );
}




export default App;
