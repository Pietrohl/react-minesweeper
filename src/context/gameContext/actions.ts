import { Level } from './index'

export enum GameActionTypes {
  Init,
  onStart,
  onWin,
  onMine
}

export type GameActions =
  | {
      type: GameActionTypes.Init
      payload: Level
    }
  | {
      type: GameActionTypes.onStart
    }
  | {
      type: GameActionTypes.onMine
    }
  | {
      type: GameActionTypes.onWin
    }
