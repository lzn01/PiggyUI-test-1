import * as React from "react";
import Spin from "../../../components/spin";
import {useState} from "react";
import Button from "../../../components/button/index/Button";
import "./index.scss";

const SpinDemo1 = () => {
    const [spinning, setSpinning] = useState(false);
    return (
        <>
            <div style={{width: "500px", height: "500px"}}>
                <Spin/>
                <Spin tip={"loading"}/>
                {/*<Button onClick={() => setSpinning(!spinning)}>按钮</Button>*/}
                <Spin spinning={spinning}/>
            </div>
            <div className={"container"}>
                <Spin
                    spinning={spinning}
                    tip="loading..."
                    size={30}
                >
                    <div style={{padding: "20px"}}>
                        Further details about the context of this element.
                    </div>
                </Spin>
                <Button
                    onClick={() => setSpinning(!spinning)}
                    type="primary"
                    style={{marginTop: "20px"}}
                >
                    Toggle
                </Button>
            </div>
        </>
    );
};
export default SpinDemo1;