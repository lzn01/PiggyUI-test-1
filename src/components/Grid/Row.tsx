import * as React from "react";
import "./styles/index.scss";
import classes from "../../common/methods/classes";
import type {FC} from "react";
import type {ColProps, GridProps} from "./Col";

export type RowProps = GridProps

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