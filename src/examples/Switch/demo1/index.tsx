import * as React from "react";
import {useState} from "react";
import Switch from "../../../components/Switch";
import Button from "../../../components/Button";

const SwitchDemo1 = () => {
    const [checked, setChecked] = useState(false);
    const onChange = (value: boolean) => {
        console.log(value);
    };
    const onClick = () => {
        setChecked(!checked);
    };
    const onChange2 = (value: boolean) => {
        setChecked(!checked);
    };
    return (
        <>
            <Switch defaultChecked={true} onChange={onChange}/>
            <Switch checked={checked} size={"small"} onChange={onChange}/>
            <Button onClick={onClick}>开关</Button>
            <Switch disabled defaultChecked={true}/>
            <Switch checked={checked} onChange={onChange2}/>
        </>
    );
};
export default SwitchDemo1;