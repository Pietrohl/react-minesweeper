import React, { useState, useLayoutEffect } from 'react'

import { Display as Container, Digit } from './styles'

type DisplayProps = {
  num: number
}

type DisplayState = {
  units: number
  tens: number | string
  cents: number | string
}

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  const { num } = props
  const [digits, setDigits] = useState<DisplayState>({
    units: 0,
    tens: 0,
    cents: 0
  })
  useLayoutEffect(() => {
    let cents
    let tens
    if (num < 0) {
      if (num < -9) {
        cents = '-'
        tens = Math.min(9, Math.floor(Math.abs(num / 10)))
        setDigits({
          ...digits,
          cents: '-',
          tens: tens,
          units: Math.min(9, Math.abs(num + tens * 10))
        })
      } else {
        setDigits({
          ...digits,
          cents: 0,
          tens: '-',
          units: Math.abs(num)
        })
      }
    } else {
      cents = Math.floor(num / 100)
      tens = Math.floor((num - cents * 100) / 10)

      setDigits({
        cents: cents,
        tens: tens,
        units: Math.abs(num - tens * 10 - cents * 100)
      })
    }
  }, [num])

  return (
    <Container>
      <div>
        <Digit>8</Digit>
        {digits.cents !== 0 && digits.cents}
      </div>
      <div>
        <Digit>8</Digit>
        {(digits.tens !== 0 || num > 9) && digits.tens}
      </div>
      <div>
        <Digit>8</Digit>
        {digits.units}
      </div>
    </Container>
  )
}

export default Display
