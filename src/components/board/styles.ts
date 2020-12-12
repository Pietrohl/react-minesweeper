import styled from 'styled-components'
import { CLASSIC } from '../../constants/theme'

interface BoardBodyProps {
  columns: string
}

export const BoardBody = styled.div<BoardBodyProps>`
  grid-template-columns: repeat(${props => props.columns}, auto);
  display: grid;
  width: min-content;
  ${props => `
        border-width: ${props.theme.border.width};
        border-style: ${props.theme.border.style};
        border-image: ${props.theme.border.image};
        border-color: ${props.theme.border.color};

    `}
`

export const Container = styled.div`
  width: fit-content;
  padding: 8px;
  ${props => `
    background: ${props.theme.colors.secondary};
    border: ${props.theme.title === CLASSIC && 'outset'}; 
    border-radius: ${props.theme.border.radius};
    `}
`
