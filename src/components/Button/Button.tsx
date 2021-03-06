import * as React from 'react';
import './styles/index.scss';
import { useRef } from 'react';
import { classes } from '../../common/methods/classes';
import Icon from '../Icon';
import Wave from '../../common/components/Wave';
import Group from './ButtonGroup';
import type { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';

type ButtonType = 'default' | 'dashed' | 'primary' | 'success' | 'warning' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonPosition = 'left' | 'right'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    ghost?: boolean;
    icon?: string;
    loading?: boolean;
    type?: ButtonType;
    position?: ButtonPosition;
    size?: ButtonSize;
}

interface ButtonInterface extends FC<ButtonProps> {
    Group: FC<HTMLAttributes<HTMLElement>>;
}

const componentName = 'Button';
// const twoCNCharRegex = /^[\u4e00-\u9fa5]{2}$/; // regex char 字符
// const isTwoCNChar = twoCNCharRegex.test.bind(twoCNCharRegex); // test() 方法用于检测一个字符串是否匹配某个模式

const Button: ButtonInterface = (
    {
        children,
        className,
        disabled,
        ghost,
        icon,
        loading,
        position,
        size,
        type,
        ...rest
    }: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonClassName = classes(
        componentName,
        '',
        [className, `p-${type ?? 'default'}`, `p-${position ?? 'left'}`, `p-${size ?? 'medium'}`],
        { ghost, disabled },
    );

    const iconRenderHandler = () => {
        const iconClassName = classes(componentName, 'icon', [size ?? 'medium'], { loading });
        return loading
            ? <Icon name={'wechat'} className={iconClassName}/>
            : icon && <Icon name={icon} className={iconClassName}/>;
    };

    return (
        <Wave>
            <button
                className={buttonClassName}
                disabled={disabled}
                ref={buttonRef}
                {...rest}
            >
                {iconRenderHandler()}
                <span className={classes(componentName, 'text')}>
                        {children}
                </span>
                {!disabled && <span className={classes(componentName, 'ripple')}/>}
            </button>
        </Wave>
    );
};

Button.Group = Group;
export default Button;