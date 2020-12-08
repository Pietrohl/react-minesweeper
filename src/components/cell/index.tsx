import React from 'react'
import { Container } from './styles'
import { Flag, Bomb, Neighbour } from '../icons'

export interface CellDataProps {
  number: number
  isRevealed: boolean
  isMine: boolean
  isFlag: boolean
  neighbour: number
}

interface cellProps {
  data: CellDataProps
  onClick: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cMenu: any
}

const Cell: React.FC<cellProps> = (props: cellProps) => {
  const { data, onClick, cMenu } = props
  const { number, isMine, isRevealed, isFlag, neighbour } = data
  //   const [bgColor, setbgColor] = useState()

  const getValue = () => {
    if (!isRevealed) {
      return isFlag ? <Flag /> : null
    } else if (isMine) {
      return <Bomb />
    }
    return <Neighbour num={neighbour} />
  }

  return (
    <>
      <Container
        number={number}
        revealed={isRevealed}
        flag={isFlag}
        onClick={onClick}
        onContextMenu={cMenu}
      >
        {getValue()}
      </Container>
    </>
  )
}

export default Cell
