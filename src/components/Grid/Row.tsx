import * as React from "react";
import type {FC} from "react";
import "./index.scss";
import classes from "../../common/methods/classes";
import type {RowProps} from "../../types/grid";
import {ColProps} from "./Col";

const componentName = "row";

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