import { GiUnlitBomb } from 'react-icons/gi'
import { AiFillFlag } from 'react-icons/ai'
import { IconContext } from 'react-icons';
import useTheme from '../../hooks/useTheme';
import { MODERN } from '../../constants/theme';
import { BOMBSVG, FACESVG, FLAGSVG, NUMSVG } from '../../constants/icons'
import { Container as NumContainer } from './styles'
import { FaRegFrownOpen, FaRegSmile } from 'react-icons/fa';
import React from 'react'


export const Flag = () => {
    const { title, colors } = useTheme();

    if (title !== MODERN) {
        return <img src={FLAGSVG} />
    }
    return (
        <IconContext.Provider value={{ color: 'red', size: '80%' }}>
            <AiFillFlag />
        </IconContext.Provider>
    )
}

export const Bomb: React.FC = () => {
    const { title, colors } = useTheme();


    if (title === MODERN)
        return (
            <IconContext.Provider value={{ size: '75%' }}>
                <GiUnlitBomb />
            </IconContext.Provider>
        )

    return <img src={BOMBSVG[0]} />
}

type NeighbourProps = {
    num: number
}

export const Neighbour: React.FC<NeighbourProps> = (props: NeighbourProps) => {
    const { num } = props;
    const { title, colors, numColors } = useTheme();
    let color = numColors[num]
    let cellNum = NUMSVG[num]

    return (
        <>
            {title === MODERN ? <NumContainer color={color}>{num !== 0 && num}</NumContainer> : <img src={cellNum} />}
        </>
    )
}

export const SmileFaceWon = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegFrownOpen />
        </IconContext.Provider>
    )

    return <img src={FACESVG[4]} />
}

export const SmileFaceLost = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegFrownOpen />
        </IconContext.Provider>
    )

    return <img src={FACESVG[3]} />
}

export const SmileFaceOpen = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegFrownOpen />
        </IconContext.Provider>
    )

    return <img src={FACESVG[2]} />
}

export const SmileActive = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegSmile />
        </IconContext.Provider>
    )

    return <img src={FACESVG[1]} />
}



export const SmileFace = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegSmile />
        </IconContext.Provider>
    )

    return <img src={FACESVG[0]} />
}
