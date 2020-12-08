import styled from 'styled-components'
import { lighten } from 'polished'
import { MODERN } from '../../constants/theme'

interface CellProps {
  number: number
  revealed: boolean
  flag: boolean
}

export const Container = styled.div<CellProps>`
  ${props =>
    `background: ${
      props.revealed
        ? props.theme.cell.primary
        : props.theme.title === MODERN && props.number % 2 === 0
        ? lighten(0.25, `${props.theme.cell.secondary}`)
        : props.theme.cell.secondary
    };
                border: ${
                  props.revealed || props.flag
                    ? props.theme.cell.borderRevealed
                    : props.theme.cell.border
                };
                border-radius: ${props.theme.cell.borderRadius};
                width:  ${props.theme.cell.size};
                height: ${props.theme.cell.size};
                margin: ${props.theme.cell.margin};
                text-align: ${props.theme.cell.textAlign};
                line-height: ${props.theme.cell.lineHeight};
        
        `}
`
