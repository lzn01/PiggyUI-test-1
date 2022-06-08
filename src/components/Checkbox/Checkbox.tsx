import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import Group from './CheckboxGroup';
import { isBoolean } from '../../common/methods/is';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { FC, MouseEvent } from 'react';
import type { CheckboxGroupProps } from './CheckboxGroup';

const componentName = 'Checkbox';

interface CheckboxProps {
    children: ReactNode;
    checked?: boolean; // 选中状态
    defaultChecked?: boolean; // 默认选中状态
    disabled?: boolean; // 禁用状态
    halfChecked?: boolean; // 半选状态
    onChange?: (checked: boolean, e: MouseEvent) => void;
}

interface CheckboxInterface extends FC<CheckboxProps> {
    Group: FC<CheckboxGroupProps>;
}

const Checkbox: CheckboxInterface = (
    {
        checked,
        children,
        defaultChecked = false,
        disabled = false,
        halfChecked = false,
        onChange,
    }: CheckboxProps,
) => {
    const [checkboxState, setCheckboxState] = useState(defaultChecked);

    const clickHandler = (e: MouseEvent) => {
        if (disabled) return;
        if (onChange) {
            onChange(isBoolean(checked) ? checked as boolean : !checkboxState, e);
        }
        if (!isBoolean(checked)) {
            setCheckboxState(!checkboxState);
        }
    };

    useEffect(() => {
        if (isBoolean(checked)) {
            setCheckboxState(checked as boolean);
        }
    }, [checked]);

    return (
        <div
            className={classes(componentName, '')}
            onClick={clickHandler}
        >
            <div className={classes(componentName, 'core', {
                    checked: checkboxState,
                    disabled,
                    'half-checked': halfChecked,
                },
            )} />
            {children}
        </div>
    );
};

Checkbox.Group = Group;
export default Checkbox;