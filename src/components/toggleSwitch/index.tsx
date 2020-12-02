import React from 'react';
import useTheme from '../../hooks/useTheme';
import { CLASSIC } from '../../constants/theme';
import useToggleTheme from '../../hooks/useToggleTheme';

import {Container, Input, Label, SpanInner, SpanSwitch } from './styles';

interface ToggleSwitchProps {
    name: string
}


const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
    const {title} = useTheme();
    const {toggleTheme} = useToggleTheme()


    return (
        <Container>
            <Input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={props.name}
                id={props.name}
                onChange={toggleTheme}
                checked= {title === CLASSIC}
            />
            <Label className="toggle-switch-label" htmlFor={props.name}>
                <SpanInner className="toggle-switch-inner" />
                <SpanSwitch className="toggle-switch-switch" />
            </Label>
        </Container>
    )
}

export default ToggleSwitch;