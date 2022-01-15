import * as React from "react";
import "../index.scss";
import type {ReactNode, FC, CSSProperties} from "react";
import {useEffect, useState} from "react";
import classes from "../../../common/methods/classes";
import Checkbox from "./Checkbox";

interface Option {
    disable?: boolean;
    label: ReactNode;
    value: string;
}

interface CheckboxGroupProps {
    className?: string;
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    options: Option[];
    style?: CSSProperties;
    title?: ReactNode;
    value?: string[];
}

const componentName = "checkbox-group";

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
            return;
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
                >
                    {title}
                </Checkbox>

            </div>
        );
    };
export default CheckboxGroup;