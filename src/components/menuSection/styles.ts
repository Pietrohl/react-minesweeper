import styled from 'styled-components'
import { CLASSIC, MODERN } from '../../constants/theme'

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fonts.button};
  @keyframes expand {
    from {
      transform: scale(0);
      opacity: 0;
    }
  }

  ${props =>
    props.theme.title === CLASSIC
      ? `
  font-size: smaller;
  & .main-button {
    padding: 4px;
    margin-top: 2px;
    width: min-content;
    ${
      props.isOpen
        ? `
      border-color: ${props.theme.border.color};
      border-radius: ${props.theme.border.radius};
      border-style: ${props.theme.border.style};
      border-image: ${props.theme.border.image};
      border-width: 1px;        
      `
        : `       
      border: 1px solid rgba(0,0,0,0);
      &:hover {
        border: 1px outset;
      }
      `
    }
    }
    
    & .menu {
      background: ${props.theme.colors.secondary};
      box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.5);
      border: 1.5px outset;
      z-index: 1;
      display: flex;
      flex-flow: column;
      position: absolute;
      padding-bottom: 3px;
      align-items: baseline;
    }
    `
      : `
      margin-top: 10px;
      width: 200px;
      & .main-button {
        &:hover {
          background: ${props.theme.colors.hover}
        }
      }
      & .menu {
        & hr {
          animation: expand 0.5s ease-in-out;
        }
      }
      `}
`

export const MenuButton = styled.div`
  @keyframes slide {
    from {
      transform: translate3d(-20px, 0, -10px);
      opacity: 0;
    }
  }
  background: ${props => props.theme.colors.secondary};
  text-align: left;
  border: none;
  font-size: ${props => props.theme.fonts.button};
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 24px;
  width: 100%;
  ${props =>
    props.theme.title === MODERN ? 'animation: slide 0.5s ease-in-out' : ''};

  &:hover {
    background: ${props => props.theme.colors.hover};
  }
`
