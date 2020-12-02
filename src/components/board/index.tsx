
import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import Cell, { CellDataProps } from '../cell';

import { Container as BoardBody } from './styles';

interface MapProp {
    rows: number;
    columns: number;
    bombs: number;
}

const Board: React.FC<MapProp> = (props: MapProp) => {
    
    const { rows, columns, bombs } = props;
    const initBoardData = renderBoardBody({ rows, columns, bombs });
    let [boardState, setBoardState] = useState(initBoardData)


  

    const renderBody = (board: CellDataProps[][]) => {
        return board.map((boardRow, i) => boardRow.map((data, j) => <Cell
            key={`${(i * rows) + j}`}
            data={{
                isRevealed: data.isRevealed,
                isMine: data.isMine,
                isFlag: data.isFlag,
                neighbour: data.neighbour
            }}
            onClick={() => handleCellClick(i, j)}
            cMenu={{}}
        />))
    }


    function handleCellClick(row: number, column: number): void {

        let newBoardState = [...boardState];
        newBoardState[row][column].isRevealed = true;
        setBoardState(newBoardState)


    }


    return (
        <>
            <div className='board-header'>
                <h1>Board</h1>
            </div>
            <BoardBody rows={`${rows}`}>
                {renderBody(boardState)}
            </BoardBody>


        </>


    )
}

const renderBoardBody = ({ rows, columns, bombs }: MapProp) => {
    let board: CellDataProps[][] = [];
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i][j] = {
                isRevealed: false,
                isMine: false,
                isFlag: false,
                neighbour: 0,
            }
        }
    }

    const incrementNeighbors = (row: number, column: number) => {
        for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
            for (let j = Math.max(0, column - 1); j <= Math.min(columns - 1, column + 1); j++) {

                if (row !== i || column !== j)
                    board[i][j].neighbour++;
            }
        }
    }

    const poulateMines = () => {
        for (let i = 0; i < bombs; i++) {
            const row = ~~(Math.random() * rows)
            const column = ~~(Math.random() * columns)

            if (board[row][column].isMine) {
                continue;
            }
            board[row][column].isMine = true;
            incrementNeighbors(row, column);
        }
    }
    poulateMines()

    return board;

}


export default Board;