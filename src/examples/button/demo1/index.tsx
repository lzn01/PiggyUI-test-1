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
                <Button loading kind={"primary"}>中中</Button>
                <Button size={"large"} icon={'twitter'} kind={'primary'} disabled>大大</Button>

                <Button kind={'success'}>成功</Button>
                <Button kind={'warning'}>警告</Button>
                {/*<Button kind={'dashed'}>失败</Button>*/}
                <Button>默认</Button>

            </div>

        </>
    );
};
export default ButtonDemo1;