import React, { useState } from 'react';
import { PlayingState } from '../../context/gameContext';
import useGame from '../../hooks/useGame';
import Display from '../display';
import { SmileActive, SmileFace, SmileFaceOpen, SmileFaceLost, SmileFaceWon } from '../icons';
import { Container, Button, ButtonContainer } from './styles';

interface BoardHeaderProps {
    mouseHold: any,
}

const BoardHeader: React.FC<BoardHeaderProps> = (props: BoardHeaderProps) => {
    const { mouseHold } = props;
    const { level, flags, endTime, startTime, playingState, setPlayingState } = useGame()
    const { bombs } = level;
    const [MouseDown, setMouseDown] = useState<boolean>(false)

    const getIcon = () => {

        if (MouseDown)
            return <SmileActive />

        if (playingState === PlayingState.Won)
            return <SmileFaceWon />

        if (playingState === PlayingState.Lost)
            return <SmileFaceLost />


        return mouseHold ? <SmileFaceOpen /> : <SmileFace />
    }

  



    return (
        <Container >
            <Display num={bombs - flags} />
            <ButtonContainer>
                <Button onClick={() => setPlayingState(0)} onMouseDown={() => setMouseDown(true)} onMouseUp={() => [ setMouseDown(false)]}>
                    {getIcon()}
                </Button>
            </ButtonContainer>
            <Display num={endTime - startTime} />
        </Container>
    )
}

export default BoardHeader;