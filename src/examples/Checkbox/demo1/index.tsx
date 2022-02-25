import * as React from "react";
import Checkbox from "../../../components/Checkbox";

const {Group} = Checkbox;
const CheckboxDemo1 = () => {
    const options = [
        {label: "Apple", value: "Apple"},
        {label: "Pear", value: "Pear"},
        {label: "Orange", value: "Orange"}
    ];
    return (
        <div style={{width: "100%"}}>
            <Checkbox disabled>啊啊啊啊</Checkbox>
            <Group
                options={options}
                title="SelectAll"
                onChange={(value: string[]) => console.log(value)}
                style={{flexDirection: "column"}}
            />
        </div>
    );
};
export default CheckboxDemo1;