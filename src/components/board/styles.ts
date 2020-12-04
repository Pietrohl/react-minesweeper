import styled from 'styled-components';
import { CLASSIC } from '../../constants/theme';

interface BoardBodyProps {
    rows: string
}

export const BoardBody = styled.div<BoardBodyProps>`
    grid-template-columns: repeat(${props => props.rows}, auto);
    display: grid;
    width: min-content;
    ${props => props.theme.title === CLASSIC ? `
        border-width: 2px;
        border-style: solid;
        border-image: initial;
        border-color: #808080 #FFFFFF #FFFFFF #808080;
    ` : ''}
`;


export const Container = styled.div`
    width: fit-content; 
    ${props => props.theme.title === CLASSIC ? `
        padding: 8px;
        background: #BDBDBD;
        border: outset;
        margin: 10px;
    `: ''}
`;
