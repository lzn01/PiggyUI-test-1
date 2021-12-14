import * as React from "react";
import type {FC} from "react";
import "./index.scss";
import classes from "../../common/methods/classes";
import Icon from "../icon";
import Transition from "../transition";
import {useRef} from "react";

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
        const modalRef = useRef<HTMLDivElement | null>(null);
        return (
            <Transition
                visible={visible}
                beforeEnter={{
                    opacity: 0,
                    transform: 'translateX(-50%) translateY(-50%) scale(0)',
                    top: '50%'
                }}
                afterEnter={{
                    opacity: 1,
                    transform: 'translateX(-50%) translateY(-50%) scale(1)',
                    top: '30%'
                }}
            >
                <div className={classes(componentName, "", [className])} ref={modalRef}>
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
            </Transition>

        );
    };
export default Modal;