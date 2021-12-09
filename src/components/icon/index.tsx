import * as React from "react";
import type {FC} from "react";
import "./index.scss";
import "../../common/methods/importAll";
import classes from "../../common/methods/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
}

const componentName = "icon";

const Icon: FC<IconProps> =
    ({
         className,
         name,
         size,
         style,
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