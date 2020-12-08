import styled from 'styled-components'

export const Display = styled.div`
  ${props =>
    `    font-family: ${props.theme.display.fontFamily};
    color: ${props.theme.display.color};
    font-size: ${props.theme.display.fontSize};
    line-height: ${props.theme.display.lineHeight};
    height: ${props.theme.display.height};
    border-color: ${props.theme.display.borderColor};
`}
  text-align: right;
  display: flex;
  background: #000000;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  & > div {
    position: relative;
    width: ${props => props.theme.display.width};
  }
`

export const Digit = styled.div`
  background: ${props => props.theme.display.backlight};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 0;
`
