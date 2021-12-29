import * as React from "react";
import "./index.scss";
import classes from "../../common/methods/classes";
import type {FC} from "react";
import {useState} from "react";

interface SwitchProps {
    checked?: boolean;
    className?: string;
    defaultChecked?: boolean;
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
         defaultChecked,
         disabled,
         onChange,
         size,
         style
     }) => {
        const [derivedChecked, setDerivedChecked] = useState(false);

        const clickHandler: React.MouseEventHandler = (e) => {
            if (disabled) return;
            if (onChange) {
                onChange(!derivedChecked, e);
            }
            setDerivedChecked(!derivedChecked);
        };

        return (
            <div
                className={classes(
                    componentName,
                    "",
                    [className, size],
                    {checked: derivedChecked, disabled})
                }
                onClick={clickHandler}
                style={style}
            >
                <span className={classes(componentName, "core")}/>
            </div>
        );
    };
export default Switch;