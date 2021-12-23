import * as React from "react";
import type {FC} from "react";
import "./index.scss";
import classes from "../../common/methods/classes";

interface Option {
    span: number; // 栅格占位格数
    offset?: number; // 栅格向右偏移的格数
}

interface ColProps {
    className?: string;
    gutter?: number; // 栅格间隔
    span?: number;
    offset?: number;
    style?: React.CSSProperties;
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
         span,
         offset,
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
            const classNameArray = className
                ? [`col-span-${span ?? 0}`, `col-offset-${offset ?? 0}`, className]
                : [`col-span-${span ?? 0}`, `col-offset-${offset ?? 0}`];

            Object.keys(responseSizes).forEach(key => {
                if (typeof responseSizes[key] === "object") {
                    const {span: sizeSpan, offset: sizeOffset} = responseSizes[key];
                    classNameArray.push(`${key}-col-span-${sizeSpan}`);
                    classNameArray.push(`${key}-col-offset-${sizeOffset ?? 0}`);
                }
                if (typeof responseSizes[key] === "number") {
                    classNameArray.push(`${key}-col-span-${responseSizes[key]}`);
                    classNameArray.push(`${key}-col-offset-0`);
                }
            });
            return classNameArray;
        };

        return (
            <div
                className={classes(componentName, "", classNameHandler())}
                style={{
                    paddingLeft: `${gutter! / 2}px`,
                    paddingRight: `${gutter! / 2}px`,
                    ...style
                }}
                {...rest}
            >
                {children}
            </div>
        );
    };
export default Col;