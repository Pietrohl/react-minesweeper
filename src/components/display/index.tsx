import React from 'react';
import { useState } from 'react'
import { useLayoutEffect } from 'react';
import { Display as Container, Digit } from './styles';

type DisplayProps = {
  num: number;
}

type DisplayState = {
  units: number,
  tens: number,
  cents: any
}

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  const { num } = props
  const [digits, setDigits] = useState<DisplayState>({
    units: 0,
    tens: 0,
    cents: 0
  })

  useLayoutEffect(() => {
    let cents;
    let tens;

    if (num < 0) {
      cents = '-'
      tens = Math.ceil((num) / 10)

      setDigits({
        ...digits,
        cents: cents,
        tens: tens,
        units: Math.abs(num - tens * 10)

      })


    } else {
      cents = Math.floor(num / 100)
      tens = Math.floor((num - cents * 100) / 10)

      setDigits({
        ...digits,
        units: cents,
        tens: tens,
        cents: Math.abs(num - tens * 10 - cents * 100)
      })
    }




  }, [num])




  return (
    <Container >
      <div>
        <Digit>
          8
      </Digit>
        {digits.cents !== 0 && digits.cents}
      </div>
      <div>
        <Digit>
          8
      </Digit>
        {digits.tens !== 0 && digits.tens}
      </div>
      <div>
        <Digit>
          8
      </Digit>
        {num > 0 && digits.units}
      </div>
    </Container>
  );
}

export default Display;