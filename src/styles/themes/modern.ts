import { MODERN } from '../../constants/theme'
import bg from '../../assets/image/bg.png'
import { shade } from 'polished'
export default {
  title: MODERN,

  colors: {
    primary: '#0000ff',
    secondary: `#f7f7f7 url(${bg}) repeat center top`,
    background: '#a7a7a7',
    hover: shade(0.25, '#a7a7a7')
  },
  fonts: {
    digital: 'Digital-Tech',
    menu: 'large',
    button: 'large'
  },
  numColors: [
    '',
    'blue',
    'darkgreen',
    'red',
    'darkblue',
    'maroon',
    'turquoise',
    'black',
    'darkgray'
  ],
  border: {
    width: '',
    style: '',
    image: '',
    color: '',
    radius: '15px 0 0 15px'
  },
  cell: {
    primary: '#d6d6e7',
    secondary: '#0000ff',
    border: '1px solid #a7a7a7',
    borderRevealed: '1px solid #0000ff',
    borderRadius: '4px',
    size: '40px',
    margin: '2px',
    textAlign: 'center',
    lineHeight: '40px'
  },
  display: {
    width: '20px',
    height: '40px',
    color: 'blue',
    backlight: '#000000',
    lineHeight: '40px',
    fontFamily: 'Digital-Tech',
    fontSize: '35px',
    borderColor: 'blue'
  }
}
