import * as React from "react";
import Button from "../../../components/button";
import ButtonGroup from "../../../components/button/buttonGroup";

const ButtonDemo1 = () => {
    return (
        <>
            <div style={{height: "50px", borderColor: "red", borderStyle: "solid", backgroundColor: "#e3ecd9"}}>
                <Button
                    disabled={false}
                    ghost={true}
                    kind={"success"}
                    size={"small"}
                    icon={"wechat"}
                >
                    小小
                </Button>
                <Button loading kind={"primary"}>中中</Button>
                <Button size={"large"} icon={"twitter"} kind={"primary"} disabled position={"right"}>大大</Button>

                <Button kind={"success"}>成功</Button>
                <Button kind={"warning"}>警告</Button>
                {/*<Button kind={'dashed'}>失败</Button>*/}
                <Button>默认</Button>
                <Button ghost>鬼鬼</Button>
                <Button kind={"danger"}>大的</Button>
            </div>

            <div style={{height: "50px", borderColor: "red", borderStyle: "solid", backgroundColor: "#e3ecd9"}}>
                <Button kind={"primary"} className={"success"}>按钮</Button>
                <Button kind={"primary"} ghost>按钮</Button>
                <Button kind={"success"}>按钮</Button>
                <Button kind={"success"} ghost>按钮</Button>
                <Button kind={"warning"}>按钮</Button>
                <Button kind={"warning"} ghost>按钮</Button>
                <Button kind={"danger"}>按钮</Button>
                <Button kind={"danger"} ghost>按钮</Button>
                <Button kind={"dashed"}>按钮</Button>
                <Button kind={"dashed"} ghost>按钮</Button>
                <Button kind={"default"}>按钮</Button>
                <Button kind={"default"} ghost>按钮</Button>
            </div>
            <ButtonGroup>
                <Button kind={"danger"}>按钮</Button>
                <Button kind={"danger"}>按钮</Button>
                <Button kind={"dashed"}>按钮</Button>
                <Button kind={"dashed"} >按钮</Button>
                <Button kind={"default"}>按钮</Button>
                <Button kind={"default"} >按钮</Button>
            </ButtonGroup>
        </>
    );
};
export default ButtonDemo1;