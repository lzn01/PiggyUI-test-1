import * as React from "react";
import {Children, cloneElement, useEffect, useState} from "react";
import type {FC, MouseEvent, ReactElement} from "react";
import type {OptionProps, RadioProps} from "../../types/radio";
import classes from "../../common/methods/classes";
import "./styles/index.scss";

const componentName = "Radio";

const Radio: FC<RadioProps> =
    ({
         children,
         className,
         defaultValue,
         onChange,
         radioStyle = "Radio",
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