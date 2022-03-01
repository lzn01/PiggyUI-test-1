import * as React from "react";
import Radio from "../../../components/Radio";

const {Option} = Radio;
const RadioDemo1 = () => {
    return (
        <>
            <Radio defaultValue="apple" radioStyle={"button"}>
                <Option value="apple">Apple</Option>
                <Option value="orange">Orange</Option>
                <Option value="pear">Pear</Option>
                <Option value="disabled" disabled={true}>
                    Disabled
                </Option>
            </Radio>
        </>
    );
};
export default RadioDemo1;