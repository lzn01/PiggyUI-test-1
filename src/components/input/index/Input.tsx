import * as React from "react";
import {useState} from "react";
import type {FC, ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler, ReactNode} from "react";
import "../index.scss";
import classes from "../../../common/methods/classes";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
    addonAfter?: ReactNode; // 后置标签
    addonBefore?: ReactNode; // 前置标签
    defaultValue?: string;
    onPressEnter?: KeyboardEventHandler; // 按下回车的回调
    prefix?: ReactNode; // 输入框前缀
    suffix?: ReactNode; // 输入框后缀
    value?: string;
}

const componentName = "input";

const Input: FC<InputProps> =
    ({
         addonAfter,
         addonBefore,
         className,
         defaultValue,
         disabled = false,
         onChange,
         onPressEnter,
         prefix,
         suffix,
         value,
         ...rest
     }) => {
        const [inputValue, setInputValue] = useState(defaultValue ?? "");

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
                    <div className={classes(componentName, "addon-before-container")}>
                        {
                            typeof addonBefore === "string" ?
                                <span className={classes(componentName, "addon-before-span")}>
                                    {addonBefore}
                                </span> : addonBefore
                        }
                    </div>
                }

                {
                    prefix &&
                    <div className={classes(componentName, "prefix-container")}>
                        {
                            typeof prefix === "string" ?
                                <span className={classes(componentName, "prefix-span")}>
                                    {prefix}
                                </span> : prefix
                        }
                    </div>
                }

                <input
                    className={classes(componentName, "")}
                    onChange={changeHandler}
                    onKeyPress={pressEnterHandler}
                    type={"text"}
                    value={inputValue}
                    {...rest}
                />

                {
                    suffix &&
                    <div className={classes(componentName, "suffix-container")}>
                        {
                            typeof suffix === "string" ?
                                <span className={classes(componentName, "suffix-span")}>
                                    {suffix}
                                </span> : suffix
                        }
                    </div>
                }

                {
                    addonAfter &&
                    <div className={classes(componentName, "addon-after")}>
                        {
                            typeof addonAfter === "string" ?
                                <span className={classes(componentName, "addon-after-span")}>
                                    {addonAfter}
                                </span> : addonAfter
                        }
                    </div>
                }
            </label>
        );
    };
export default Input;