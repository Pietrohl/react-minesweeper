import { useContext } from 'react'
import { GameContext } from '../context/gameContext'

function useGame(): GameContext {
  const context = useContext(GameContext)
  return context
}

export default useGame
