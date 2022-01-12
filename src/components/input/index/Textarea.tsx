import * as React from "react";
import type {FC} from "react";
import "../index.scss";
import {Size, TextareaProps} from "../../../types/input";
import {useState} from "react";
import classes from "../../../common/methods/classes";

const componentName = "textarea";

const Textarea: FC<TextareaProps> =
    ({
         autosize,
         className,
         defaultValue = "",
         onChange,
         size,
         ...rest
     }) => {
        const [textareaValue, setTextareaValue] = useState(defaultValue);

        return (
            <textarea
                className={classes(componentName, "", [className], {autosize})}
                cols={size && size.cols}
                rows={size && size.rows}
                value={textareaValue}
                {...rest}
            />
        );
    };
export default Textarea;