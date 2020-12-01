import { type } from 'os';
import React, { ChangeEvent, useState } from 'react';
import Selector from '../selector';

// import { Container } from './styles';





function Menu(props: { menu: boolean; setMenu: any;}) {
    const {setMenu } = props;
    const [diff, setDiff] = useState('selecionar');


    return (
        <>
            <h1>
                MineSweeper
            </h1>
            <h2>
                {diff}
            </h2>
            <h3>
                Select the difficulty:
            </h3>
            <Selector diff={diff} setDiff={setDiff} />
            <button onClick={()=> setMenu(false)}>
                         play
            </button>
        </>
    );
}

export default Menu;