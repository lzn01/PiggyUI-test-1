import {InputHTMLAttributes, KeyboardEventHandler, ReactNode, TextareaHTMLAttributes} from "react";

interface Size {
    cols: number;
    rows: number;
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

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    autosize?: boolean;
    defaultValue?: string;
    onPressEnter?: KeyboardEventHandler;
    size?: Size;
    value?: string;
}