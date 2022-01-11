import {InputHTMLAttributes, KeyboardEventHandler, ReactNode} from "react";

interface Size {
    rows: number | string;
    cols: number | string;
}

interface baseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    defaultValue?: string;
    onPressEnter?: KeyboardEventHandler; // 按下回车的回调
    value?: string;
}

export interface InputProps extends Omit<baseInputProps, "prefix"> {
    addonAfter?: ReactNode; // 后置标签
    addonBefore?: ReactNode; // 前置标签
    prefix?: ReactNode; // 输入框前缀
    suffix?: ReactNode; // 输入框后缀
}

export interface SearchProps extends baseInputProps {
    enterButton?: ReactNode;
    onSearch?: (value: string) => void;
}

export interface TextareaProps extends baseInputProps {
    autosize?: boolean;
    size?: Size;
}