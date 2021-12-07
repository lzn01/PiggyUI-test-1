import * as React from "react";
import {FC} from "react";
import "./methods/importAll";
import "./index.scss";
import classes from "../../utils/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const componentName = "icon";

const Icon: FC<IconProps> =
    ({
         className,
         name,
         ...restProps
     }) => {
        return (
            <svg className={classes(componentName, "", [className])}
                 {...restProps}
            >
                <use xlinkHref={`#${name}`}/>
            </svg>
        );
    };

export default Icon;