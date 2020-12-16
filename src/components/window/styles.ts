import styled from 'styled-components'
import { MODERN } from '../../constants/theme'

export const Container = styled.div<{ loading: boolean }>`
  ${props => props.loading && 'visibility:hidden;'}
  ${props =>
    props.theme.title === MODERN
      ? ` 
  display: flex;
  flex-flow: row-reverse;
  `
      : ''}
  width: fit-content;
  border-radius: ${props => props.theme.border.radius};
  margin: 10px;
  background: ${props => props.theme.colors.primary};
  padding: 2px;
`
