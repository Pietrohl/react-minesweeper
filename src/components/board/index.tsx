
import React from 'react';
import Cell from '../cell';

import { Container as BoardBody } from './styles';

let array: number[] = [];

for (let i = 0; i < 20; i++) {
    array[i] = i;

}


const Board: React.FC = () => {



    return (
        <>
            <div className='board-header'>

                <h1>Board</h1>
            </div>
            <BoardBody>
                {array.map(element => <Cell />)}
            </BoardBody>


        </>


    )
}

export default Board;