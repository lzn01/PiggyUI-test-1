import * as React from "react";
import "../index.scss";
import type {ButtonHTMLAttributes, FC} from "react";
import {useRef} from "react";
import classes from "../../../common/methods/classes";
import Icon from "../../icon";
import Wave from "../../../common/components/wave";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    ghost?: boolean;
    icon?: string;
    loading?: boolean;
    type?: "default" | "dashed" | "primary" | "success" | "warning" | "danger";
    position?: "left" | "right";
    size?: "small" | "medium" | "large";
}

const componentName = "button";

const Button: FC<ButtonProps> =
    ({
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
     }) => {
        const buttonRef = useRef<HTMLButtonElement | null>(null);
        const buttonClassName = classes(
            componentName,
            "",
            [className, `p-${type ?? "default"}`, `p-${position ?? "left"}`, `p-${size ?? "medium"}`],
            {ghost, disabled}
        );

        const iconRenderHandler = () => {
            const iconClassName = classes(componentName, "icon", [size ?? "medium"], {loading});
            return loading
                ? <Icon name={"wechat"} className={iconClassName}/>
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
                    <span className={classes(componentName, "text")}>
                        {children}
                    </span>
                    {!disabled && <span className={classes(componentName, "ripple")}/>}
                </button>
            </Wave>
        );
    };
export default Button;