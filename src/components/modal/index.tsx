import * as React from "react";
import {FC} from "react";
import "./index.scss";
import classes from "../../common/methods/classes";
import Icon from "../icon";

interface DialogProps {
    visible: boolean;
    className?: string;
}

const componentName = "modal";

const Modal: FC<DialogProps> =
    ({
         children,
         className,
         visible
     }) => {
        return (
            visible
                ?
                <>
                    <div className={classes(componentName, "mask")}/>

                    <div className={classes(componentName, "", [className])}>
                        <div className={classes(componentName, "close")}>
                            <Icon name={"wechat"}/>
                        </div>
                        <header className={classes(componentName, "header")}>
                            提示
                        </header>
                        <main className={classes(componentName, "main")}>
                            {children}
                        </main>
                        <footer className={classes(componentName, "footer")}>
                            按钮
                        </footer>
                    </div>
                </>
                :
                null
        );
    };

export default Modal;