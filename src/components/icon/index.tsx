import * as React from "react";
import type {FC} from "react";
import "./methods/importAll";
import "./index.scss";
import classes from "../../utils/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
}

const componentName = "icon";

const Icon: FC<IconProps> =
    ({
         name,
         size,
         style,
         className,
         ...rest
     }) => {
        return (
            <svg className={classes(componentName, "", [className])}
                 style={{
                     width: `${size ?? 16}px`,
                     height: `${size ?? 16}px`,
                     ...style
                 }}
                 {...rest}
            >
                <use xlinkHref={`#${name}`}/>
            </svg>
        );
    };

export default Icon;