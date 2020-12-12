import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string
      tertiary: string
      background: string
      hover: string
    }
    fonts: {
      digital: string
      menu: string
      button: string
    }
    numColors: string[]
    border: {
      width: string
      style: string
      image: string
      color: string
      radius: string
    }
    cell: {
      primary: string
      secondary: string
      border: string
      borderRevealed: string
      borderRadius: string
      size: string
      margin: string
      textAlign: string
      lineHeight: string
    }
    display: {
      width: string
      height: string
      color: string
      backlight: string
      lineHeight: string
      fontFamily: string
      fontSize: string
      borderColor: string
    }
  }
}
