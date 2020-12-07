import React from 'react';

import { Container } from './styles';

const Window: React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Window;