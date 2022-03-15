import * as React from "react";
import Button from "../../../components/Button";

const ButtonDemo1 = () => {
    return (
        <>
            <div style={{height: "50px", backgroundColor: "#a6be8b"}}>
                <Button type={"primary"} className={"success"}>按钮</Button>
                <Button type={"primary"} ghost>按钮</Button>
                <Button type={"success"}>按钮</Button>
                <Button type={"success"} ghost>按钮</Button>
                <Button type={"warning"}>按钮</Button>
                <Button type={"warning"} ghost>按钮</Button>
                <Button type={"danger"}>按钮</Button>
                <Button type={"danger"} ghost>按钮</Button>
                <Button type={"dashed"}>按钮</Button>
                <Button type={"dashed"} ghost>按钮</Button>
                <Button type={"default"}>按钮</Button>
                <Button type={"default"} ghost>按钮</Button>
            </div>
            <Button.Group>
                <Button type={"dashed"}>按钮</Button>
                <Button type={"default"}>按钮</Button>
                <Button type={"default"}>按钮</Button>
            </Button.Group>
        </>
    );
};
export default ButtonDemo1;