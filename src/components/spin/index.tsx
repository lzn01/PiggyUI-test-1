import * as React from "react";
import "./index.scss";
import type {CSSProperties, FC} from "react";

interface SpinProps {
    className?: string;
    size?: number;
    spinning?: boolean;
    style?: CSSProperties;
    tip?: string; // 自定义描述文案
}

const Spin: FC<SpinProps> =
    ({
         children,
         className,
         size,
         spinning,
         style,
         tip
     }) => {
        return (
            <></>
        );

    };
export default Spin;