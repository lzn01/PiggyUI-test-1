import * as React from "react";
import type {FC} from "react";
import "../index.scss";
import classes from "../../../common/methods/classes";
import type {GridProps, Option} from "../../../types/grid";

export interface ColProps extends GridProps {
    span?: number;
    offset?: number;
    xs?: number | Option;
    sm?: number | Option;
    md?: number | Option;
    lg?: number | Option;
    xl?: number | Option;
    xxl?: number | Option;
}

const componentName = "col";

const Col: FC<ColProps> =
    ({
         children,
         className,
         gutter,
         span = 0,
         offset = 0,
         style,
         xs,
         sm,
         md,
         lg,
         xl,
         xxl,
         ...rest
     }) => {
        const classNameHandler = (): string[] => {
            const responseSizes: any = {xs, sm, md, lg, xl, xxl};
            const classNameArray = [`col-span-${span}`, `col-offset-${offset}`];

            if (className) {
                classNameArray.push(className);
            }

            Object.keys(responseSizes).forEach(key => {
                if (typeof responseSizes[key] === "object") {
                    const {span: sizeSpan, offset: sizeOffset} = responseSizes[key];
                    classNameArray.push(`${key}-col-span-${sizeSpan}`, `${key}-col-offset-${sizeOffset ?? 0}`);
                }
                if (typeof responseSizes[key] === "number") {
                    classNameArray.push(`${key}-col-span-${responseSizes[key]}`, `${key}-col-offset-0`);
                }
            });
            return classNameArray;
        };

        return (
            <div
                className={classes(componentName, "", classNameHandler())}
                style={{
                    paddingLeft: `${gutter ? 0 : gutter! / 2}px`,
                    paddingRight: `${gutter ? 0 : gutter! / 2}px`,
                    ...style
                }}
                {...rest}
            >
                {children}
            </div>
        );
    };
export default Col;