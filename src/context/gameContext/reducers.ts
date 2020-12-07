import { PlayingState, GameContextData } from './index';
import { GameActionTypes, GameActions } from './actions'

export const reducer = (state: GameContextData , action: GameActions) => {

    switch (action.type) {
        case (GameActionTypes.Init):
            console.log(action)
            return {
                ...state,
                level: action.payload,
                playingState: PlayingState.Iddle,
            };
        case (GameActionTypes.onStart):
            return {
                ...state,
                playingState: PlayingState.Playing,
            };
        case (GameActionTypes.onWin):
            return {
                ...state,
                playingState: PlayingState.Won
            };
        case (GameActionTypes.onMine):
            return {
                ...state,
                playingState: PlayingState.Lost
            }
        default:
            return state;
    }
}
