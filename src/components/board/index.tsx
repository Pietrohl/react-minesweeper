import React, { useEffect, useLayoutEffect, useState } from 'react';
import useGame from '../../hooks/useGame';
import BoardHeader from '../boardHeader';
import Cell from '../cell'
import { CellDataProps } from '../cell';
import { PlayingState } from '../../context/gameContext'
import { BoardBody, Container } from './styles';

interface MapProp {
    rows: number;
    columns: number;
    bombs: number;
}

const Board: React.FC = () => {
    const { state, setFlags, onStart, onWin, onMine } = useGame();
    const { level, playingState } = state;

    const { rows, columns, bombs } = level;
    const [mouseHold, setMouseHold] = useState(false)

    const initBoardState = {
        boardMap: setBoardBody({ rows, columns, bombs }),
        gameWon: false,
        mineArray: '0',
        hiddenArray: '1',
        flagsArray: '2',
    }

    let [boardState, setBoardState] = useState(initBoardState)


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
            cMenu={(e: MouseEvent) => handleContextMenu(e, i, j)}
        />))
    }

    function handleCellClick(row: number, column: number): void {

        let { boardMap } = boardState;
        let newBoardMap = boardMap;

        if (playingState === 0)
            onStart()

        if (newBoardMap[row][column].isMine) {
            onMine()
            setBoardState({
                ...boardState,
                boardMap: revealBoard(newBoardMap, rows, columns),
            })
            return;
        }

        newBoardMap = revealEmptyCells(row, column, newBoardMap, rows, columns)

        const [flags, flagsArray] = getFlags(newBoardMap)
        setFlags(flags)
        setBoardState({
            ...boardState,
            boardMap: newBoardMap,
            hiddenArray: getHidden(newBoardMap),
            flagsArray: flagsArray
        })
    }

    function handleContextMenu(e: MouseEvent, row: number, column: number): void {
        e.preventDefault();
        let { boardMap } = boardState;
        let newBoardMap = boardMap;

        if (newBoardMap[row][column].isRevealed) return;

        newBoardMap[row][column].isFlag = !newBoardMap[row][column].isFlag;

        const [flags, flagsArray] = getFlags(newBoardMap)
        setFlags(flags)
        setBoardState({
            ...boardState,
            boardMap: newBoardMap,
            mineArray: getMines(newBoardMap),
            hiddenArray: getHidden(newBoardMap),
            flagsArray: flagsArray
        })
    }

    useEffect(() => {
        const { hiddenArray, mineArray, flagsArray } = boardState;

        if (hiddenArray === mineArray)
            onWin()

        if (flagsArray === mineArray)
            onWin()

    }, [boardState])

    useLayoutEffect(() => {

        if (playingState === PlayingState.Iddle)
            setBoardState(initBoardState)

    }, [playingState, level])

    return (
        <Container>
            <div className='board-header' >
                <BoardHeader mouseHold={mouseHold} />
            </div>
            <BoardBody
                rows={`${rows}`}
                onMouseDown={() => { setMouseHold(true) }}
                onMouseUp={() => { setMouseHold(false) }}
            >
                {renderBody(boardState.boardMap)}
            </BoardBody>
        </Container>
    )
}

const setBoardBody = ({ rows, columns, bombs }: MapProp) => {
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


        let i = 0;
        while ( i < bombs) {
            const row = ~~(Math.random() * rows)
            const column = ~~(Math.random() * columns)

            if (board[row][column].isMine) {
                continue;
            }
            board[row][column].isMine = true;
            incrementNeighbors(row, column);
            i++
        }
    }
    poulateMines()

    return board;

}

const revealEmptyCells = (row: number, column: number, board: CellDataProps[][], rows: number, columns: number) => {

    board[row][column].isRevealed = true;
    board[row][column].isFlag = false;

    if (board[row][column].neighbour !== 0) return board;

    for (let i = Math.max(row - 1, 0); i <= Math.min(rows - 1, row + 1); i++) {
        for (let j = Math.max(column - 1, 0); j <= Math.min(columns - 1, column + 1); j++) {

            if (!board[i][j].isRevealed) {
                if (board[i][j].neighbour === 0)
                    board = revealEmptyCells(i, j, board, rows, columns);
                else {
                    board[row][column].isFlag = false;
                    board[i][j].isRevealed = true;
                }
            }
        }
    }
    return board;
}

const revealBoard = (board: CellDataProps[][], rows: number, columns: number) => {

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            board[i][j].isRevealed = true;
        }
    }
    return board;
}

const getHidden = (board: CellDataProps[][]) => {
    let hiddenArray: CellDataProps[] = [];

    board.forEach(boardrow => {
        boardrow.forEach(cellData => {
            if (!cellData.isRevealed) hiddenArray.push(cellData)
        })
    })
    return JSON.stringify(hiddenArray);
}

const getMines = (board: CellDataProps[][]) => {
    let mineArray: CellDataProps[] = [];

    board.forEach(boardrow => {
        boardrow.forEach(cellData => {
            if (cellData.isMine) mineArray.push(cellData)
        })
    })
    return JSON.stringify(mineArray);
}

const getFlags = (board: CellDataProps[][]): [number, string] => {
    let arr: CellDataProps[] = [];
    let flagNumber: number = 0;
    board.forEach(boardrow => {
        boardrow.forEach(cellData => {
            if (cellData.isFlag) arr.push(cellData) && flagNumber++
        })
    })
    let flagsArray = JSON.stringify(arr)
    return [flagNumber, flagsArray];
}




export default Board;


