import styled from 'styled-components'

interface CellProps {
  revealed: boolean
  flag: boolean
}

export const Container = styled.div<CellProps>`
  ${props =>
    `background: ${
      props.revealed ? props.theme.cell.primary : props.theme.cell.secondary
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
