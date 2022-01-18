import * as React from "react";
import "../index.scss";
import type {CSSProperties, FC, ReactElement} from "react";
import {Children, cloneElement, useEffect, useState} from "react";
import classes from "../../../common/methods/classes";
import {OptionProps} from "./Option";

interface RadioProps {
    className?: string;
    defaultValue?: any;
    onChange?: (checkedValue: any, e: MouseEvent) => any;
    radioStyle?: "radio" | "button";
    style?: CSSProperties;
    value?: any;
    vertical?: boolean;
}

const componentName = "radio";

const Radio: FC<RadioProps> =
    ({
         children,
         className,
         defaultValue,
         onChange,
         radioStyle = "radio",
         value,
         vertical = false,
         style
     }) => {

        const [radioValue, setRadioValue] = useState<any>(defaultValue);

        const clickHandler = (param: any, e: MouseEvent) => {
            if (onChange) {
                onChange(param, e);
            }
            setRadioValue(param);
        };

        useEffect(() => {
            if (typeof value !== "undefined") {
                setRadioValue(value);
            }
        }, [value]);

        return (
            <div
                className={classes(componentName, "", [className], {vertical})}
                style={style}
            >
                {
                    Children.map(children, (child: ReactElement<OptionProps>) => {
                        return cloneElement(child, {
                            checkedValue: radioValue,
                            onClick: () => clickHandler,
                            radioStyle,
                            vertical
                        });
                    })
                }
            </div>
        );
    };
export default Radio;