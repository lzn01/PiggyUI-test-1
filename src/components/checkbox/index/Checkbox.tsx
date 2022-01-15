import * as React from "react";
import "../index.scss";
import type {FC, MouseEvent} from "react";
import {useEffect, useState} from "react";
import classes from "../../../common/methods/classes";

const componentName = "checkbox";

interface CheckboxProps {
    checked?: boolean; // 选中状态
    defaultChecked?: boolean; // 默认选中状态
    disabled?: boolean; // 禁用状态
    halfChecked?: boolean; // 半选状态
    onChange?: (checked: boolean, e: MouseEvent) => void;
}

const Checkbox: FC<CheckboxProps> =
    ({
         checked,
         children,
         defaultChecked = false,
         disabled = false,
         halfChecked = false,
         onChange
     }) => {
        const [checkboxState, setCheckboxState] = useState(defaultChecked);

        const clickHandler = (e: MouseEvent) => {
            if (disabled) return;
            if (onChange) {
                onChange(typeof checked === "boolean" ? checked : !checkboxState, e);
            }
            if (typeof checked !== "boolean") {
                setCheckboxState(!checkboxState);
            }
        };

        useEffect(() => {
            if (typeof checked === "boolean") {
                setCheckboxState(checked);
            }
        }, [checked]);

        return (
            <div
                className={classes(componentName, "")}
                onClick={clickHandler}
            >
                <div className={classes(componentName, "core", {
                    checked: checkboxState,
                    disabled,
                    "half-checked": halfChecked
                })}
                >
                    {children}
                </div>
            </div>
        );
    };
export default Checkbox;