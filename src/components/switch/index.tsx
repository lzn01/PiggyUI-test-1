import * as React from "react";
import "./index.scss";
import classes from "../../common/methods/classes";
import type {FC} from "react";
import {useEffect, useState} from "react";

interface SwitchProps {
    checked?: boolean; // 当前选中状态
    className?: string;
    defaultChecked?: boolean; // 默认选中状态
    disabled?: boolean;
    onChange?: (checked: boolean, e: React.MouseEvent) => any;
    size?: "small" | "default";
    style?: React.CSSProperties;
}

const componentName = "switch";

const Switch: FC<SwitchProps> =
    ({
         checked,
         className,
         defaultChecked = false,
         disabled = false,
         onChange,
         size,
         style
     }) => {
        const [switchState, setSwitchState] = useState<boolean | undefined>(defaultChecked); // 开关状态 true开 false关

        const clickHandler: React.MouseEventHandler = (e) => {
            if (disabled) return;
            if (onChange) {
                onChange(!switchState, e);
            }
            setSwitchState(!switchState);
        };

        useEffect(() => {
            if (checked !== switchState) {
                setSwitchState(checked);
            }
        }, [checked, switchState]);

        return (
            <div
                className={classes(
                    componentName,
                    "",
                    [className, size ?? "default"],
                    {checked: switchState, disabled})
                }
                onClick={clickHandler}
                style={style}
            >
                <span className={classes(componentName, "core")}/>
            </div>
        );
    };
export default Switch;