import * as React from 'react';
import { useEffect, useState } from 'react';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { CSSProperties, FC } from 'react';

interface SwitchProps {
    checked?: boolean; // 当前选中状态
    className?: string;
    defaultChecked?: boolean; // 默认选中状态
    disabled?: boolean;
    onChange?: (checked: boolean, e: React.MouseEvent) => any;
    size?: 'small' | 'default';
    style?: CSSProperties;
}

const componentName = 'switch';

const Switch: FC<SwitchProps> =
    ({
         checked,
         className,
         defaultChecked = false,
         disabled = false,
         onChange,
         size,
         style,
     }) => {
        const [switchState, setSwitchState] = useState(defaultChecked); // 开关状态 true开 false关

        const clickHandler: React.MouseEventHandler = (e) => {
            if (disabled) return;
            if (onChange) {
                onChange(typeof checked === 'boolean' ? checked : !switchState, e);
            }
            if (typeof checked !== 'boolean') {
                setSwitchState(!switchState);
            }
        };

        useEffect(() => {
            if (typeof checked === 'boolean') {
                setSwitchState(checked);
            }
        }, [checked]);

        return (
            <div
                className={classes(
                    componentName,
                    '',
                    [className, size ?? 'default'],
                    { checked: switchState, disabled },
                )}
                onClick={clickHandler}
                style={style}
            >
                <span className={classes(componentName, 'core')} />
            </div>
        );
    };
export default Switch;