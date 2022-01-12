import * as React from "react";
import type {ChangeEventHandler, FC} from "react";
import "../index.scss";
import type {TextareaProps} from "../../../types/input";
import {useRef, useState} from "react";
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
        const textareaRef = useRef<HTMLTextAreaElement | null>(null);
        const [textareaValue, setTextareaValue] = useState(defaultValue);

        const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
            if (onChange) {
                onChange(e);
            }
            setTextareaValue(e.target.value);
        };

        return (
            <textarea
                className={classes(componentName, "", [className], {autosize})}
                cols={size && size.cols}
                rows={size && size.rows}
                onChange={changeHandler}
                value={textareaValue}
                ref={textareaRef}
                {...rest}
            />
        );
    };
export default Textarea;