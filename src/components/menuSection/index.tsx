import React from 'react';
import { useState } from 'react';

import { Container, MenuButton } from './styles';


type MenuItemData = {
    onClick: any,
    name: string,
}

type MenuItemProps = {
    children: React.ReactNode,
    onClick: any,
}



type MenuSectionProps = { 
    name: string, 
    itemList: MenuItemData[] 
}



const MenuItem = (props :MenuItemProps) => {
    const {onClick, children} = props;    



    return (
        <MenuButton onClick={onClick}>
        {children}            
        </MenuButton>
    )


}


const MenuSection: React.FC<MenuSectionProps> = (props: MenuSectionProps) => {
    const [ isOpen, setIsOpen] = useState<boolean>(false)
    const {name, itemList} = props

    return (
            <Container onClick={()=>setIsOpen(!isOpen)}>
                <div>
                    {name}
                </div>
                {itemList.map(item => (
                    <MenuItem  onClick={item.onClick}>
                        {item.name}
                    </MenuItem>)
                )}


            </Container>
    )
}

export default MenuSection;