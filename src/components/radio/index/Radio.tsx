import * as React from "react";
import {Children, cloneElement, useEffect, useState} from "react";
import type {CSSProperties, FC, MouseEvent, ReactElement} from "react";
import classes from "../../../common/methods/classes";
import "../index.scss";
import {OptionProps} from "./Option";

interface RadioProps {
    className?: string;
    defaultValue?: any;
    onChange?: (checkedValue: any, e: MouseEvent) => void;
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

        const clickHandler = (e: MouseEvent, param: any) => {
            if (onChange) {
                onChange(e, param);
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