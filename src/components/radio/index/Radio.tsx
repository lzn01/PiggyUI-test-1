import * as React from "react";
import "../index.scss";
import type {CSSProperties, FC, ReactElement} from "react";
import {Children, cloneElement, useState} from "react";
import classes from "../../../common/methods/classes";
import {OptionProps} from "./Option";

interface RadioProps {
    checkedValue?: any;
    className?: string;
    defaultValue?: any;
    disabled?: boolean;
    onClick?: (checkedValue: any, e: React.MouseEvent) => any;
    radioStyle?: "radio" | "button";
    style?: CSSProperties;
    value?: any;
    vertical?: boolean;
}

const componentName = "radio";

const Radio: FC<RadioProps> =
    ({
         checkedValue,
         children,
         className,
         defaultValue,
         disabled,
         onClick,
         radioStyle = "radio",
         value,
         vertical = false,
         style
     }) => {

        const [radioValue, setRadioValue] = useState(defaultValue);

        const clickHandler = (checkedValue: any, e: MouseEvent) => {
        };

        return (
            <div
                className={classes(componentName, "", [className], {vertical})}
                style={style}
            >
                {
                    Children.map(children, (child: ReactElement<OptionProps>) => {
                        return cloneElement(child, {
                            checkedValue,
                            onClick: clickHandler,
                            radioStyle,
                            vertical
                        });
                    })
                }
            </div>
        );
    };
export default Radio;