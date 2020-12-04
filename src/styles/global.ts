import { createGlobalStyle } from 'styled-components'

import myFontURL from '../assets/fonts/digital-7.regular.ttf';


export default createGlobalStyle` 

@font-face {
    font-family: "Digital-7";
    src: url(${myFontURL});
  }


 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
    -webkit-font-smoothing: antialiased;
     background: ${props => props.theme.colors.background};
     font-size: 14px;
     color: #333;
     font-family: sans-serif;
 }

 .display {
    font-family: "Digital-7";
 }

`;

