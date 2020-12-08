import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.secondary};
  font-size: smaller;

  & .main-button {
    padding: 4px;
    margin-top: 2px;
    width: min-content;
    ${props =>
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
    `}
  }

  & .menu {
    background: ${props => props.theme.colors.secondary};
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

export const MenuButton = styled.div`
  text-align: left;
  border: none;
  background: ${props => props.theme.colors.secondary};
  font-size: smaller;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 24px;
  width: 100%;
  &:hover {
    background: blue;
  }
`
