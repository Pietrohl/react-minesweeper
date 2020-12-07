import React, { ChangeEvent, useState } from 'react';
import useGame from '../../hooks/useGame';
import MenuSection from '../menuSection';

// import { Container } from './styles';

function Menu() {
    const { init } = useGame()

    return (
        <>
            <MenuSection name='Game' itemList={[{
                onClick: () => { },
                name: 'new'
            },
            {
                onClick: ()=>{},
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
            },
            {
                onClick: () => { },
                name: 'Custom'
            },

            ]}></MenuSection>
        </>
    );
}

export default Menu;



