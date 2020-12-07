import { GiUnlitBomb } from 'react-icons/gi'
import { AiFillFlag } from 'react-icons/ai'
import { IconContext } from 'react-icons';
import useTheme from '../../hooks/useTheme';
import { MODERN } from '../../constants/theme';
import { BOMBSVG, FACESVG, FLAGSVG, NUMSVG } from '../../constants/icons'
import { Container as NumContainer } from './styles'
import { FaRegFrownOpen, FaRegSmile, FaRegDizzy } from 'react-icons/fa';
import { BiCool} from 'react-icons/bi';
import React from 'react'


export const Flag = () => {
    const { title } = useTheme();

    if (title !== MODERN) {
        return <img src={FLAGSVG} alt='flag' />
    }
    return (
        <IconContext.Provider value={{ color: 'red', size: '80%' }}>
            <AiFillFlag />
        </IconContext.Provider>
    )
}

export const Bomb: React.FC = () => {
    const { title } = useTheme();


    if (title === MODERN)
        return (
            <IconContext.Provider value={{ size: '75%' }}>
                <GiUnlitBomb />
            </IconContext.Provider>
        )

    return <img src={BOMBSVG[0]} alt='mine'/>
}

type NeighbourProps = {
    num: number
}

export const Neighbour: React.FC<NeighbourProps> = (props: NeighbourProps) => {
    const { num } = props;
    const { title, numColors } = useTheme();
    let color = numColors[num]
    let cellNum = NUMSVG[num]

    return (
        <>
            {title === MODERN ? <NumContainer color={color}>{num !== 0 && num}</NumContainer> : <img src={cellNum} alt={`number-${num}`} />}
        </>
    )
}

export const SmileFaceWon = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '90%' }}>
            <BiCool />
        </IconContext.Provider>
    )

    return <img src={FACESVG[4]} alt='cool-face'/>
}

export const SmileFaceLost = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegDizzy />
        </IconContext.Provider>
    )

    return <img src={FACESVG[3]} alt='lost-face' />
}

export const SmileFaceOpen = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegFrownOpen />
        </IconContext.Provider>
    )

    return <img src={FACESVG[2]} alt='susspension-face'/>
}

export const SmileActive = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegSmile />
        </IconContext.Provider>
    )

    return <img src={FACESVG[1]} alt='smile-face'/>
}



export const SmileFace = () => {
    const { title } = useTheme();

    if (title === MODERN) return (
        <IconContext.Provider value={{ size: '75%' }}>
            <FaRegSmile />
        </IconContext.Provider>
    )

    return <img src={FACESVG[0]} alt='smile-face'/>
}
