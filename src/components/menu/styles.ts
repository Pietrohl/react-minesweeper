import styled from 'styled-components'
import { CLASSIC } from '../../constants/theme'

export const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  & .top {
    font-size: ${props => props.theme.fonts.menu};
  }

  ${props =>
    props.theme.title === CLASSIC
      ? `
  line-height: 15px;
  align-items: center;
  & .top {
    color: white;
    font-weight: bold;
    font-size: smaller;
    padding: 3px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 22%,
      rgba(0, 212, 255, 0.8) 100%
      );
    & img {
      height: 15px;
      margin-right: 5px;
    }
  }
  & .main-menu {
    display: flex;
    flex-flow: row;
  }
    `
      : `
      padding: 20px;
      `}
`
