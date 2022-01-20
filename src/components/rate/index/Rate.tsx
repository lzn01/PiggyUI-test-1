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
    onMouseEnter?: (value: number) => void;
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
         onMouseEnter,
         style,
         tips,
         value
     }) => {
        const [hoveredRateValue, setHoveredRateValue] = useState(0);
        const [selectedRateValue, setSelectedRateValue] = useState(defaultValue);

        const mouseLeaveHandler = () => {
            setHoveredRateValue(0)
        };
        
        const mouseEnterHandler = () => {
          
        }
        
        const clickHandler = () => {
          
        }

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