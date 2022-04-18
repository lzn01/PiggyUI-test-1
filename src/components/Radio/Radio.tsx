import * as React from 'react';
import { Children, cloneElement, useEffect, useState } from 'react';
import Option from './Option';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { FC, MouseEvent, CSSProperties, ReactElement, ReactNode } from 'react';

type RadioStyle = 'radio' | 'button';

export interface BaseProps {
    radioStyle?: RadioStyle;
    value?: any;
    vertical?: boolean;
}

export interface RadioProps extends BaseProps {
    children: ReactNode;
    className?: string;
    defaultValue?: any;
    onChange?: (checkedValue: any, e: MouseEvent) => void;
    style?: CSSProperties;
}

export interface OptionProps extends BaseProps {
    checkedValue?: any;
    disabled?: boolean;
    onClick?: (checkedValue: any, e: MouseEvent) => void;
}

interface RadioInterface extends FC<RadioProps> {
    Option: FC<OptionProps>;
}

const componentName = 'Radio';

const Radio: RadioInterface =
    ({
         children,
         className,
         defaultValue,
         onChange,
         radioStyle = 'radio',
         value,
         vertical = false,
         style,
     }: RadioProps) => {
        const [radioValue, setRadioValue] = useState<any>(defaultValue);

        const clickHandler = (e: MouseEvent, param: any) => {
            if (onChange) {
                onChange(e, param);
            }
            setRadioValue(param);
        };

        useEffect(() => {
            if (typeof value !== 'undefined') {
                setRadioValue(value);
            }
        }, [value]);

        return (
            <div
                className={classes(componentName, '', [className], { vertical })}
                style={style}
            >
                {
                    Children.map(children, (child: ReactElement<OptionProps>) => {
                        return cloneElement(child, {
                            checkedValue: radioValue,
                            onClick: clickHandler,
                            radioStyle,
                            vertical,
                        });
                    })
                }
            </div>
        );
    };
Radio.Option = Option;
export default Radio;