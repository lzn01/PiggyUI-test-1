import * as React from "react";
import Input, {Search} from "../../../components/Input";
import Icon from "../../../components/Icon";

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