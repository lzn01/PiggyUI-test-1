import * as React from "react";
import "./index.scss";
import type {ButtonHTMLAttributes, FC} from "react";
import classes from "../../common/methods/classes";
import Icon from "../icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    ghost?: boolean;
    icon?: string;
    loading?: boolean;
    kind?: "default" | "dashed" | "primary" | "success" | "warning" | "danger";
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
         kind,
         position,
         size,
         style,
         type,
         ...rest
     }) => {
        const buttonClassName = classes(
            componentName,
            "",
            [className, kind ?? "default", position ?? "left", size ?? "medium"],
            {ghost, disabled}
        );

        const iconRenderHandler = () => {
            const className = classes(componentName, "icon", [size ?? "medium"], {loading});
            return loading
                ? <Icon name={"wechat"} className={className}/>
                : icon && <Icon name={icon} className={className}/>;
        };

        return (
            <button
                className={buttonClassName}
                disabled={disabled}
                type={type}
                style={style}
                {...rest}
            >
                {iconRenderHandler()}
                <span className={classes(componentName, "inner")}>
                    {children}
                </span>
            </button>
        );
    };

export default Button;