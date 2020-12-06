import React, { useState, createContext, useLayoutEffect } from "react";

export enum PlayingState {
    Iddle,
    Playing,
    Won,
    Lost,
}

export type Level = { rows: number, columns: number, bombs: number }

interface GameContextData {
    level: Level,
    playingState: PlayingState,
    setPlayingState: any,
    flags: number,
    setFlags: any,
    startTime: number,
    setStartTime: any,
    endTime: number,
    setEndTime: any
}






const GameContext = createContext<GameContextData>({} as GameContextData);


const GameContextProvider: React.FC = ({ children }) => {
    const [playingState, setPlayingState] = useState<PlayingState>(PlayingState.Iddle)
    const [flags, setFlags] = useState<number>(0)
    const [startTime, setStartTime] = useState<number>(0)
    const [endTime, setEndTime] = useState<number>(0)
    const [level, setLevel] = useState<{ rows: number, columns: number, bombs: number }>({ rows: 9, columns: 9, bombs: 10 })

    useLayoutEffect(() => {

        if (playingState === PlayingState.Playing) {
            const timer = setInterval(timerStart, 1000);
            return () => clearInterval(timer)
        }

        if (playingState === PlayingState.Iddle) {
            setStartTime(0)
            setEndTime(0)
        }

    }, [playingState, startTime, endTime])






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
        <GameContext.Provider value={{ level, playingState, setPlayingState, flags, setFlags, startTime, setStartTime, endTime, setEndTime }}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameContextProvider };