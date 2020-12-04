import React from 'react';
import useTheme from '../../hooks/useTheme';
import Logo from '../../assets/img/image.svg';
import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  const { colors } = useTheme();
  return <Container>
    {children}
  </Container>
}

export default Header;