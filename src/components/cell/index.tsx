import React, { useState } from 'react'
import { Container } from './styles';
import { Flag, Bomb, Neighbour} from '../icons'

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
    const [bgColor, setbgColor] = useState();

    const getValue = () => {
        if (!isRevealed) {
            return isFlag ? <Flag /> : null;
        } else if (isMine) {
            return <Bomb />;
        }
        return <Neighbour num={neighbour} />
    }


    return (
        <>
            <Container revealed={isRevealed}
                flag={isFlag}
                onClick={onClick}
                onContextMenu={cMenu}>
                {getValue()}
            </Container>

        </>
    );
}

export default Cell;
