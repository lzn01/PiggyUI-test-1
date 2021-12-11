import * as React from "react";
import type {FC, HTMLAttributes} from "react";
import "./index.scss";
import classes from "../../../common/methods/classes";

const componentName = "button-group";

const ButtonGroup: FC<HTMLAttributes<HTMLElement>> =
    ({
         children,
         className,
         ...rest
     }) => {
        return (
            <div className={classes(componentName, "", [className])}
                 {...rest}
            >
                {children}
            </div>
        );
    };
export default ButtonGroup;