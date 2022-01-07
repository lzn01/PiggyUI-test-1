import * as React from "react";
import Input from "../../../components/input/index/Input";
import {ChangeEventHandler} from "react";

const InputDemo1 = () => {
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const {value} = e.target;
        console.log(value);
    };
    return (
        <>
            <Input onChange={onChange}/>
        </>
    );
};
export default InputDemo1;