import * as React from "react";
import Input from "../../../components/input/index/Input";
import Icon from "../../../components/icon";
import Search from "../../../components/input/index/Search";

const InputDemo1 = () => {
    const onSearch = (e: any) => {
        console.log(e);
    };
    return (
        <>
            <Input disabled suffix={<Icon name={"loading"}/>}/>
            <Input addonBefore="Http://" addonAfter=".com" placeholder="yoursite"/>
            <Input prefix={<Icon name={"wechat"}/>} placeholder="username"/>
            <Input/>
            <Search enterButton/>
            <Search onSearch={onSearch}/>
            <Search
                enterButton={"搜索"}
                style={{background: "#de3"}}
                onSearch={onSearch}
                onPressEnter={onSearch}
            />
        </>
    );
};
export default InputDemo1;