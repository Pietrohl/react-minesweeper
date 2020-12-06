import { useContext } from 'react';
import {GameContext} from '../context/gameContext';

function useGame() {

    const context = useContext(GameContext);
    return context;
}

export default useGame;