import React, { useState, createContext, useReducer, useLayoutEffect } from "react";
import { GameActionTypes } from "./actions";
import { reducer as gameReducer } from './reducers'


export enum PlayingState {
    Iddle,
    Playing,
    Won,
    Lost,
}

export type Level = { rows: number, columns: number, bombs: number }

export interface GameContextData {
    level: Level,
    playingState: PlayingState,
}

const GameContext = createContext<any>({} as GameContextData);

const GameContextProvider: React.FC = ({ children }) => {

    const initialState = {
        level: { rows: 9, columns: 9, bombs: 10  },
        playingState: PlayingState.Iddle,
    }

    const [state, dispatch] = useReducer(gameReducer, initialState)
    const [flags, setFlags] = useState<number>(0)
    const [startTime, setStartTime] = useState<number>(0)
    const [endTime, setEndTime] = useState<number>(0)

    // Init
    const init = (level: Level) => {
        onStart()
        dispatch({
            type: GameActionTypes.Init,
            payload: level
        })
        setFlags(0)
    }

    // onStart
    const onStart = () => {
        dispatch({
            type: GameActionTypes.onStart
        })
    }

    // onWin
    const onWin = () => {
        dispatch({
            type: GameActionTypes.onWin
        })
    }

    // onMine
    const onMine = () => {
        dispatch({
            type: GameActionTypes.onMine
        })
    }


    useLayoutEffect(() => {

        if (state?.playingState === PlayingState.Playing) {
            const timer = setInterval(timerStart, 1000);
            return () => clearInterval(timer)
        }

        if (state?.playingState === PlayingState.Iddle) {
            setStartTime(0)
            setEndTime(0)
        }

    }, [state?.playingState, startTime, endTime])

    const timerStart = () => {
        let start = startTime;
        let end = Math.floor(Date.now() / 1000) + 1;

        if (start === 0) {
            start = Math.floor(Date.now() / 1000);
        }

        setEndTime(end);
        setStartTime(start);
    }

    return (
        <GameContext.Provider value={{
            state: state,
            init,
            onStart,
            onMine,
            onWin,
            flags,
            setFlags,
            startTime,
            endTime
        }}>{children}</GameContext.Provider>
    )
}



export { GameContext, GameContextProvider };