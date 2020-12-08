import React from 'react'
import useGame from '../../hooks/useGame'
import MenuSection from '../menuSection'

import { Container } from './styles'

function Menu(): JSX.Element {
  const { init, state } = useGame()
  const { level } = state
  // custom game
  // const [cusRows, setcusRows] = useState<number>(0);
  // const [cusColumns, setCusColumns] = useState<number>(0);
  // const [cusBombs, setCusBombs] = useState<number>(0);

  return (
    <Container>
      <div className="top">Minesweeper</div>

      <MenuSection
        name="Game"
        itemList={[
          {
            onClick: () => init(level),
            name: 'new'
          },
          {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick: () => {},
            name: 'divider'
          },
          {
            onClick: () => init({ rows: 9, columns: 9, bombs: 10 }),
            name: 'Begginer'
          },
          {
            onClick: () => init({ rows: 15, columns: 13, bombs: 40 }),
            name: 'Intermediary'
          },
          {
            onClick: () => init({ rows: 30, columns: 16, bombs: 99 }),
            name: 'Expert'
          }
        ]}
      ></MenuSection>
    </Container>
  )
}

export default Menu
