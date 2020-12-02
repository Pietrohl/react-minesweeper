import React, { useState } from 'react'

import { Container } from './styles';



export interface CellDataProps {
    isRevealed: boolean;
    isMine: boolean;
    isFlag: boolean;
    neighbour: number;

}

interface CellPrps {
    data: CellDataProps
    onClick: any;
    cMenu: any;
}

const Cell: React.FC<CellPrps> = (props: CellPrps) => {
    const { data, onClick, cMenu } = props
    const { isMine, isRevealed, isFlag, neighbour } = data

    const getValue = () => {
        if (!isRevealed) {
            return isFlag ? "🚩" : null;
        } else if (isMine) {
            return "💣";
        } else if (neighbour === 0) {
            return null;
        }
        return neighbour
    }

    return (
        <>
            <Container
                onClick={onClick}
                onContextMenu={cMenu}>
                {getValue()}
        </Container>

        </>
    );
}

export default Cell;

