import * as React from "react";
import Radio from "../../../components/radio/index/Radio";
import Option from "../../../components/radio/index/Option";

const RadioDemo1 = () => {
    return (
        <>
            <Radio defaultValue="apple" radioStyle={'button'}>
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