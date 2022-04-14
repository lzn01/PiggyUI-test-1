import * as React from 'react';
import { useEffect, useState } from 'react';
import Star from './Star';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { CSSProperties, FC, ReactNode } from 'react';

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

const componentName = 'Rate';

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
         value,
     }) => {
        const [hoveredRateValue, setHoveredRateValue] = useState(0);
        const [selectedRateValue, setSelectedRateValue] = useState(defaultValue);

        const changeHandler = (param: number) => {
            if (onChange) {
                onChange(param);
            }
        };

        const hoverHandler = (param: number) => {
            if (onHover) {
                onHover(param);
            }
        };

        // 处理星星点击事件
        const clickHandler = (index: number, position: string) => {
            const newValue = (allowHalf && position === 'left' ? 0.5 : 1) + index;
            const valueState = selectedRateValue === newValue;
            if (disabled) return;
            if (allowClear) {
                changeHandler(valueState ? 0 : newValue);
                setSelectedRateValue(valueState ? 0 : newValue);
                valueState && setHoveredRateValue(0);
            } else if (!valueState) {
                changeHandler(newValue);
                setSelectedRateValue(newValue);
            }
        };

        // 处理容器内鼠标移动
        const mouseEnterHandler = (index: number, position: string) => {
            const newValue = (position === 'left' ? 0.5 : 1) + index;
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

        // 处理容器外鼠标移动
        const mouseLeaveHandler = () => {
            hoverHandler(0);
            setHoveredRateValue(0);
        };

        useEffect(() => {
            if (typeof value !== 'undefined') {
                setSelectedRateValue(value);
            }
        }, [value]);

        return (
            <div
                className={classes(componentName, '', [className])}
                style={style}
            >
                <ul
                    className={classes(componentName, 'container')}
                    onMouseLeave={mouseLeaveHandler}
                >
                    {
                        Array
                            .from({ length: 5 }, (v, k) => `item-${k}`)
                            .map((_, index) =>
                                <Star
                                    key={_}
                                    count={hoveredRateValue || selectedRateValue}
                                    index={index}
                                    onClick={clickHandler}
                                    onMouseEnter={mouseEnterHandler}
                                />,
                            )
                    }
                </ul>
                {
                    tips &&
                    <div className={classes(componentName, 'tips')}>
                        {tips}
                    </div>
                }
            </div>
        );
    };
export default Rate;