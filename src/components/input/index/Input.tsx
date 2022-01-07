import * as React from "react";
import "../index.scss";
import type {FC, InputHTMLAttributes, ReactNode} from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
    addonAfter?: ReactNode; // 带标签的 input，设置后置标签
    addonBefore?: ReactNode; // 带标签的 input，设置前置标签
    defaultValue?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    value?: string;
}

// const componentName = "input";

const Input: FC<InputProps> =
    ({}) => {
        return (
            <label>

            </label>
        );
    };
export default Input;