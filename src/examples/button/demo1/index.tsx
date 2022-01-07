import * as React from "react";
import Button from "../../../components/button/index/Button";
import ButtonGroup from "../../../components/button/index/ButtonGroup";

const ButtonDemo1 = () => {
    return (
        <>
            <div style={{height: "50px", backgroundColor: "#a6be8b"}}>
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
                <Button kind={"dashed"} >按钮</Button>
                <Button kind={"default"}>按钮</Button>
                <Button kind={"default"} >按钮</Button>
            </ButtonGroup>
        </>
    );
};
export default ButtonDemo1;