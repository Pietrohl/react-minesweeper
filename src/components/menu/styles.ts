import styled from 'styled-components';
import icon from '../../assets/image/minesweeper-icon.png'

export const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  & .top {
    color: white;
    font-weight: bold;
    font-size: smaller;
    padding: 3px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 22%, rgba(0,212,255,0.8) 100%);
    &:before {
      background: url(${icon});
    }
  }

`;
