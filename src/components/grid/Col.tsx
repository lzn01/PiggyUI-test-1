import * as React from "react";
import type {FC} from "react";
import "./index.scss";

// import classes from "../../common/methods/classes";

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
    xs?: Option;
    sm?: Option;
    md?: Option;
    lg?: Option;
    xl?: Option;
    xxl?: Option;
}

// const componentName = "col";

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
            const classNameArray = [`col-span-${span}`, `col-offset-${offset}`];
            const responseSizeKeys = [xs, sm, md, lg, xl, xxl];
            responseSizeKeys.forEach(size => {

            });
            const options: any = {sm, md, lg, xl};
            Object.keys(options).forEach(key => {
                if (options[key]) {
                    console.log(options[key]);
                }
            });
            return classNameArray;
        };
        return (
            <div/>
        );
    };
export default Col;