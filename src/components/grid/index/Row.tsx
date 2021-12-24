import * as React from "react";
import type {FC} from "react";
import "../index.scss";
import classes from "../../../common/methods/classes";
import type {GridProps} from "../data";
import type {ColProps} from "./Col";

interface RowProps extends GridProps {
}

const componentName = "col";

const Row: FC<RowProps> =
    ({
         children,
         className,
         gutter,
         style,
         ...rest
     }) => {
        return (
            <div
                className={classes(componentName, "", [className])}
                style={{
                    paddingLeft: `${gutter ? 0 : -gutter! / 2}px`,
                    paddingRight: `${gutter ? 0 : -gutter! / 2}px`,
                    ...style
                }}
                {...rest}
            >
                {
                    React.Children.map(children, child => (
                            React.cloneElement(child as React.ReactElement<ColProps>, {gutter})
                        )
                    )
                }
            </div>
        );
    };
export default Row;