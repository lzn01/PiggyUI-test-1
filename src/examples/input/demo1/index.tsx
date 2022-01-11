import * as React from "react";
import Input from "../../../components/input/index/Input";
import Icon from "../../../components/icon";

const InputDemo1 = () => {

    return (
        <>
            <Input disabled suffix={<Icon name={"loading"}/>}/>
            <Input addonBefore="Http://" addonAfter=".com" placeholder="yoursite"/>
            <Input prefix={<Icon name={"wechat"}/>} placeholder="username"/>
            <Input/>
        </>
    );
};
export default InputDemo1;