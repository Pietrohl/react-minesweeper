import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  border-radius: ${props => props.theme.border.radius};
  margin: 10px;
  background: ${props => props.theme.colors.primary};
  padding: 2px;
`
