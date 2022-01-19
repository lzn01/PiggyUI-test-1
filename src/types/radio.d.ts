import {CSSProperties, MouseEvent} from "react";

interface BaseProps {
    radioStyle?: "radio" | "button";
    value?: any;
    vertical?: boolean;
}

export interface RadioProps extends BaseProps {
    className?: string;
    defaultValue?: any;
    onChange?: (checkedValue: any, e: MouseEvent) => void;
    style?: CSSProperties;
}

export interface OptionProps extends BaseProps {
    checkedValue?: any;
    disabled?: boolean;
    onClick?: (checkedValue: any, e: MouseEvent) => void;
}