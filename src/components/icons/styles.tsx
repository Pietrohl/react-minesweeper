import styled from 'styled-components'

export const Container = styled.div<{ color: string }>`
  font-size: x-large;
  font-weight: 700;
  color: ${props => props.color};
`
