import React from 'react';

import {Container, Input, Label, SpanInner, SpanSwitch } from './styles';

interface ToggleSwitchProps {
    Name: string
}


const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: {Name: string}) => {
    return (
        <Container>
            <Input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={props.Name}
                id={props.Name}
            />
            <Label className="toggle-switch-label" htmlFor={props.Name}>
                <SpanInner className="toggle-switch-inner" />
                <SpanSwitch className="toggle-switch-switch" />
            </Label>
        </Container>
    )
}

export default ToggleSwitch;