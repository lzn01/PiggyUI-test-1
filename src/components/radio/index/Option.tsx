import * as React from "react";
import type {FC, MouseEvent, MouseEventHandler} from "react";
import "../index.scss";
import classes from "../../../common/methods/classes";

export interface OptionProps {
    checkedValue?: any;
    disabled?: boolean;
    onClick?: (checkedValue: any, e: MouseEvent) => void;
    radioStyle?: "radio" | "button";
    value?: any;
    vertical?: boolean;
}

const componentName = "option";

const Option: FC<OptionProps> =
    ({
         checkedValue,
         children,
         disabled,
         onClick,
         radioStyle,
         value,
         vertical
     }) => {
        const clickHandler: MouseEventHandler = (e) => {
            if (disabled || !onClick) {
                return;
            }
            onClick(e, value);
        };

        return (
            <label
                className={classes(componentName, "", [radioStyle + "-style"], {
                        checked: value === checkedValue,
                        disabled,
                        vertical
                    }
                )}
                onClick={clickHandler}
            >
                {
                    radioStyle === "radio" &&
                    <span className="label-dot"/>
                }
                <div className="label-text">
                    {children}
                </div>
            </label>
        );
    };
export default Option;