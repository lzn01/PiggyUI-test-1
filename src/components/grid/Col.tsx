import * as React from "react";
import type {FC} from "react";
import "./index.scss";
// import classes from "../../common/methods/classes";

interface Option {
    offset?: number;
    span: number;
}

interface ColProps {
    className?: string;
    gutter?: number;
    offset?: number;
    span?: number;
    style?: React.CSSProperties;
    sm?: Option;
    md?: Option;
    lg?: Option;
    xl?: Option;
}

// const componentName = "col";

const Col: FC<ColProps> = () => {
    return (
        <div/>
    );
};
export default Col;