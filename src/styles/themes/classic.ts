import { CLASSIC } from "../../constants/theme";
import bg from '../../assets/image/bg_red.png';


export default {
    title: CLASSIC,

    colors: {
        primary: '#c0c0c0',
        secondary: '#BDBDBD',
        background: '#008080'
    },
    fonts: {
        digital: "Digital-7"
    },
    numColors: ['', 'blue', 'green', 'red', 'darkblue', 'maroon','turquoise', 'black', 'gray'],
    border: {
        width: '2px',
        style: 'solid',
        image: 'initial',
        color: '#808080 #FFFFFF #FFFFFF #808080',
        radius: ''
    },
    cell: {
        primary: '#c0c0c0',
        secondary: '#BDBDBD',
        border: 'outset',
        borderRevealed: 'none',
        borderRadius: '',
        size: '16px',
        margin: '',
        textAlign:'',
        lineHeight:''
    },
    display: {
        width: '11.8px',
        height: '22px', 
        color: 'red',
        backlight: `#000000 url(${bg}) repeat center top`,
        lineHeight: '20px',
        fontFamily: 'Digital-7',
        fontSize: '25px',
        borderColor: '#808080 #FFFFFF #FFFFFF #808080',
        
    }
}