import React, { ChangeEvent, useState } from 'react';
import useGame from '../../hooks/useGame';
import MenuSection from '../menuSection';
import Selector from '../selector';

// import { Container } from './styles';

function Menu() {


    return (
        <>
            <MenuSection name='Game' itemList={[{
                onClick: {},
                name: 'new'
            },
            {
                onClick: {},
                name: 'divider'
            },
            {
                onClick: {},
                name: 'Begginer'
            },
            {
                onClick: {},
                name: 'Expert'
            },
            {
                onClick: {},
                name: 'Intermediary'
            },
            {
                onClick: {},
                name: 'Custom'
            },

            ]}></MenuSection>
        </>
    );
}

export default Menu;



