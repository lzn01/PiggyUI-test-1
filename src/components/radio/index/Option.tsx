import * as React from "react";
import type {CSSProperties, FC} from "react";
import "../index.scss";

interface OptionProps {
    checkedValue?: any;
    className?: string;
    disabled?: boolean;
    onClick?: (checkedValue: any, e: React.MouseEvent) => any;
    radioStyle?: "radio" | "button";
    style?: CSSProperties;
    value?: any;
    vertical?: boolean;
}

const componentName = "option";

const Option: FC<OptionProps> = () => {
    return (
        <></>
    );
};
export default Option;