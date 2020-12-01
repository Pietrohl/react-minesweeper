
import React, { SyntheticEvent } from 'react';
import { Label, Input } from './styles';



function Selector(props: { diff: string; setDiff: any }) {

    const { diff, setDiff } = props;

    const handleChange= (value: string | number): void => {
        setDiff(value)
    }

    
    return (
        <div >
            <Input type="radio" onChange={(e)=>handleChange(e.target.value)} name="difficulty" value="begginer" id="begginer" checked={diff === "begginer"} />
            <Label htmlFor='begginer'>Iniciante</Label>
            <Input type="radio" onChange={(e)=>handleChange(e.target.value)}  name="difficulty" value="intermediate" id="intermediate" />
            <Label htmlFor='intermediate'>Intermediario</Label>
            <Input type="radio" onChange={(e)=>handleChange(e.target.value)}  name="difficulty" value="expert" id="expert" />
            <Label htmlFor='expert'>Expert</Label>
            <Input type="radio" onChange={(e)=>handleChange(e.target.value)}  name="difficulty" value="custom" id="custom" />
            <Label htmlFor='custom'>customizado</Label>
        </div>
    );

}
export default Selector;