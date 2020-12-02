import styled from 'styled-components';

interface ContainerProps {
    rows: string
}

export const Container = styled.div<ContainerProps>`
    grid-template-columns: repeat(${props => props.rows}, auto);
    display: grid;
    width: min-content;
`;
