import type {CSSProperties} from "react";

export interface Option {
    span: number; // 栅格占位格数
    offset?: number; // 栅格向右偏移的格数
}

export interface GridProps {
    className?: string;
    gutter?: number; // 栅格间隔
    style?: CSSProperties;
}

export interface RowProps extends GridProps {
}