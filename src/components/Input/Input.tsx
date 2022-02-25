import * as React from "react";
import {useState} from "react";
import {Search, Textarea} from "./index";
import classes from "../../common/methods/classes";
import "./styles/index.scss";
import type {SearchProps} from "./Search";
import type {TextareaProps} from "./Textarea";
import type {FC, ChangeEventHandler, KeyboardEventHandler, InputHTMLAttributes, ReactNode} from "react";

export interface baseInputProps extends InputHTMLAttributes<HTMLInputElement> {
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

interface InputInterface extends FC<InputProps> {
    Search: FC<SearchProps>;
    Textarea: FC<TextareaProps>;
}

const componentName = "input";

const Input: InputInterface =
    ({
         addonAfter,
         addonBefore,
         className,
         defaultValue = "",
         disabled = false,
         onChange,
         onPressEnter,
         prefix,
         suffix,
         value,
         ...rest
     }) => {
        const [inputValue, setInputValue] = useState(defaultValue);

        const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
            if (onChange) {
                onChange(e);
            }
            setInputValue(e.target.value);
        };

        const pressEnterHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
            // review
            if (onPressEnter && e.key === "Enter") {
                onPressEnter(e);
            }
        };

        return (
            <label className={classes(componentName, "container", [className], {
                    "addon-after": !!addonAfter,
                    "addon-before": !!addonBefore,
                    disabled,
                    prefix: !!prefix,
                    suffix: !!suffix
                }
            )}
            >
                {
                    addonBefore &&
                    <div className={"addon-before-container"}>
                        {
                            typeof addonBefore === "string"
                                ? <span className={"addon-before-span"}>{addonBefore}</span>
                                : addonBefore
                        }
                    </div>
                }

                {
                    prefix &&
                    <div className={"prefix-container"}>
                        {
                            typeof prefix === "string"
                                ? <span className={"prefix-span"}>{prefix}</span>
                                : prefix
                        }
                    </div>
                }

                <input
                    className={classes(componentName, "")}
                    disabled={disabled}
                    onChange={changeHandler}
                    onKeyPress={pressEnterHandler}
                    type={"text"}
                    value={inputValue}
                    {...rest}
                />

                {
                    suffix &&
                    <div className={"suffix-container"}>
                        {
                            typeof suffix === "string"
                                ? <span className={"suffix-span"}>{suffix}</span>
                                : suffix
                        }
                    </div>
                }

                {
                    addonAfter &&
                    <div className={"addon-after-container"}>
                        {
                            typeof addonAfter === "string"
                                ? <span className={"addon-after-span"}>{addonAfter}</span>
                                : addonAfter
                        }
                    </div>
                }
            </label>
        );
    };
Input.Search = Search;
Input.Textarea = Textarea;
export default Input;