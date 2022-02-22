import * as React from "react";
import "./index.scss";
import type {ReactNode, FC, CSSProperties} from "react";
import {useEffect, useState} from "react";
import classes from "../../common/methods/classes";
import Checkbox from "./Checkbox";

interface Option {
    label: ReactNode;
    value: string;
}

export interface CheckboxGroupProps {
    className?: string;
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    options: Option[];
    style?: CSSProperties;
    title?: ReactNode;
    value?: string[];
}

const componentName = "Checkbox-group";

const CheckboxGroup: FC<CheckboxGroupProps> =
    ({
         className,
         defaultValue = [],
         onChange,
         options,
         style,
         title = "All",
         value
     }) => {
        const [checkboxGroupValue, setCheckboxGroupValue] = useState(defaultValue);

        const checkBoxStateHandler = () => {
            if (checkboxGroupValue?.length > 0) {
                return checkboxGroupValue?.length < options.length ? "half-checked" : "all";
            }
            return "none";
        };

        const masterCheckBoxChangeHandler = () => {
            const newCheckboxGroupValue = checkBoxStateHandler() === "all"
                ? []
                : options.reduce((prev, current) => [current.value, ...prev], []);
            if (onChange) {
                onChange(newCheckboxGroupValue);
            }
            setCheckboxGroupValue(newCheckboxGroupValue);
        };

        const otherCheckBoxChangeHandler = (param: string) => {
            const newCheckboxGroupValue = checkboxGroupValue?.indexOf(param) > -1
                ? checkboxGroupValue?.filter(i => i !== param)
                : [param, ...checkboxGroupValue];
            if (onChange) {
                onChange(newCheckboxGroupValue);
            }
            setCheckboxGroupValue(newCheckboxGroupValue);
        };

        useEffect(() => {
            if (typeof value !== "undefined") {
                setCheckboxGroupValue(value);
            }
        }, [value]);

        return (
            <div
                className={classes(componentName, "", [className])}
                style={style}
            >
                <Checkbox
                    checked={checkBoxStateHandler() === "all"}
                    halfChecked={checkBoxStateHandler() === "half-checked"}
                    onChange={masterCheckBoxChangeHandler}
                >
                    {title}
                </Checkbox>
                {
                    options.map(option =>
                        <Checkbox
                            key={option.value}
                            checked={checkboxGroupValue?.indexOf(option.value) > -1}
                            onChange={() => otherCheckBoxChangeHandler(option.value)}
                        >
                            {option.label}
                        </Checkbox>
                    )
                }
            </div>
        );
    };
export default CheckboxGroup;