import * as React from "react";
import {useState} from "react";
import type {FC, ChangeEventHandler, KeyboardEventHandler} from "react";
import type {InputProps} from "../../../types/input";
import "../index.scss";
import classes from "../../../common/methods/classes";

const componentName = "input";

const Input: FC<InputProps> =
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
export default Input;