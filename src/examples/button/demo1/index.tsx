import * as React from "react";
import Button from "../../../components/button";

const ButtonDemo1 = () => {
    return (
        <>
            <div style={{height:'50px',borderColor:"red",borderStyle:'solid'}}>
                <Button
                    disabled={false}
                    ghost={true}
                    kind={'success'}
                    size={'small'}
                    icon={'wechat'}
                >
                    小小
                </Button>
                <Button loading>中中</Button>
                <Button size={"large"} icon={'twitter'}>大大</Button>
            </div>

        </>
    );
};
export default ButtonDemo1;