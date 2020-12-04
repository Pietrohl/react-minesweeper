import React from 'react';
import Display from '../display';
import { SmileFace, SmileFaceOpen } from '../icons';
import { Container,Button, ButtonContainer } from './styles';

interface BoardHeaderProps {
    mouseHold: any
}

const BoardHeader: React.FC<BoardHeaderProps> = (props: BoardHeaderProps) => {
    const { mouseHold } = props;
    


    const getIcon = () => {

        return mouseHold ? <SmileFaceOpen/> : <SmileFace/>

    }


    return (
        <Container >
            <Display num={10}/>
            <ButtonContainer>
            <Button>
                {getIcon()}
            </Button>
            </ButtonContainer>
            <Display num={0}/>
        </Container>
    )
}

export default BoardHeader;