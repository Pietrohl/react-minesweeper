import styled from 'styled-components';
import { MODERN } from '../../constants/theme';

interface CellProps {
        revealed: boolean
        flag: boolean
}

export const Container = styled.div<CellProps>`
        ${props=> props.theme.title === MODERN? 
                `background: ${props.revealed? '#32a852' : '#ADE25D'};
                border: 1px solid ${props.revealed? '#32a852' : '#ADE25D'};
                border-radius: 4px;
                width: 40px ;
                height: 40px;
                margin: 2px;
                text-align: center;
                line-height: 40px;
        `: 
                `
                background:${props.revealed? '#c0c0c0' : '#BDBDBD'};
                width: 16px;
                height: 16px;
                border-style: ${props.revealed || props.flag ? 'none' : 'outset'};

        
        `}
`;
