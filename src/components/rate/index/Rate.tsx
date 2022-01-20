import * as React from "react";
import "../index.scss";
import type {CSSProperties, FC, ReactNode} from "react";
import {useState} from "react";
import classes from "../../../common/methods/classes";
import Star from "./Star";

interface RateProps {
    allowClear?: boolean;
    allowHalf?: boolean;
    className?: string;
    defaultValue?: number;
    disabled?: boolean;
    onChange?: (value: number) => void;
    onHover?: (value: number) => void;
    style?: CSSProperties;
    tips?: ReactNode;
    value?: number;
}

const componentName = "rate";

const Rate: FC<RateProps> =
    ({
         allowClear = false,
         allowHalf = false,
         className,
         defaultValue = 0,
         disabled = false,
         onChange,
         onHover,
         style,
         tips,
         value
     }) => {
        const [hoveredRateValue, setHoveredRateValue] = useState(0);
        const [selectedRateValue, setSelectedRateValue] = useState(defaultValue);


        const mouseLeaveHandler = () => {
            hoverHandler(0);
            setHoveredRateValue(0);
        };

        const mouseEnterHandler = (index: number, position: string) => {
            const newValue = position === "left" ? 0.5 : 1 + index;
            if (disabled) return;
            if (allowHalf && hoveredRateValue !== newValue) {
                hoverHandler(newValue);
                setHoveredRateValue(newValue);
            }
            if (!allowHalf && hoveredRateValue !== index + 1) {
                hoverHandler(index + 1);
                setHoveredRateValue(index + 1);
            }
        };

        const hoverHandler = (param: number) => {
            if (onHover) {
                onHover(param);
            }
        };

        const clickHandler = () => {

        };

        return (
            <div
                className={classes(componentName, "", [className])}
                style={style}
            >
                <ul
                    className={classes(componentName, "container")}
                    onMouseLeave={mouseLeaveHandler}
                >
                    {
                        Array
                            .from({length: 5}, (v, k) => `item-${k}`)
                            .map((_, index) =>
                                <Star
                                    key={_}
                                    count={hoveredRateValue || selectedRateValue}
                                    index={index}
                                    onClick={clickHandler}
                                    onMouseEnter={mouseEnterHandler}
                                />
                            )
                    }
                </ul>
                {
                    tips &&
                    <div className={classes(componentName, "tips")}>
                        {tips}
                    </div>
                }
            </div>
        );
    };
export default Rate;