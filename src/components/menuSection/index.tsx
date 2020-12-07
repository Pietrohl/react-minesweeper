import React from 'react';
import { useState } from 'react';
import { Container, MenuButton } from './styles';


type MenuItemData = {
    onClick: any,
    name: string,
}

type MenuItemProps = {
    children: React.ReactNode,
    name: string,
    onClick: any,
}

type MenuSectionProps = {
    name: string,
    itemList: MenuItemData[]
}

const MenuItem = (props: MenuItemProps) => {
    const { onClick, name, children } = props;
    //custom game
    // const [cusRows, setcusRows] = useState<number>(0);
    // const [cusColumns, setCusColumns] = useState<number>(0);
    // const [cusBombs, setCusBombs] = useState<number>(0);


    if (name === 'divider') {
        return <hr style={{ borderTop: '1px solid', width: '100%' }} />
    }

    return (
        <MenuButton onClick={onClick}>
            {children}
        </MenuButton>
    )
}


const MenuSection: React.FC<MenuSectionProps> = (props: MenuSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { name, itemList } = props


    const menu = () => {

        if (isOpen)
            return (
                <div className='menu'>
                    {itemList.map((item, i) => (
                        <MenuItem key={i} name={item.name} onClick={item.onClick}>
                            {item.name}
                        </MenuItem>)
                    )}
                </div>
            )

    }




    return (
        <Container isOpen={isOpen} >
            <div onClick={() => setIsOpen(!isOpen)} className='main-button'>
                {name}
            </div>
            {menu()}
        </Container >
    )
}

export default MenuSection;