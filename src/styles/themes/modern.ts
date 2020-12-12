import { MODERN } from '../../constants/theme'
import bg from '../../assets/image/bg.png'
import { shade, lighten } from 'polished'
export default {
  title: MODERN,

  colors: {
    primary: '#2B7A78',
    secondary: `#FEFFFF url(${bg}) repeat center top`,
    tertiary: '#17252A',
    background: '#3AAFA9',
    hover: lighten(0.15, '#3AAFA9')
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
    primary: '#DEF2F1',
    secondary: '#17252A',
    border: '1px solid #a7a7a7',
    borderRevealed: '1px solid #DEFEF1',
    borderRadius: '4px',
    size: '40px',
    margin: '2px',
    textAlign: 'center',
    lineHeight: '40px'
  },
  display: {
    width: '20px',
    height: '40px',
    color: '#DEF2F1',
    backlight: '#000000',
    lineHeight: '40px',
    fontFamily: 'Digital-Tech',
    fontSize: '35px',
    borderColor: '#DEF2F1'
  }
}
