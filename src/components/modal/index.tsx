import * as React from "react";
import type {FC} from "react";
import {useRef} from "react";
import "./index.scss";
import Icon from "../icon";
import classes from "../../common/methods/classes";
import Transition from "../../common/components/transition";

interface ModalProps {
    className?: string;
    onCancel?: React.MouseEventHandler;
    onMask?: React.MouseEventHandler;
    onOk?: React.MouseEventHandler;
    visible: boolean;
}

const componentName = "modal";

const Modal: FC<ModalProps> =
    ({
         children,
         className,
         onCancel,
         onMask,
         onOk,
         visible
     }) => {
        const markRef = useRef<HTMLDivElement | null>(null);
        const modalRef = useRef<HTMLDivElement | null>(null);

        // 关闭图标点击事件
        const cancelHandler: React.MouseEventHandler = (e) => {
            if (onCancel) {
                onCancel(e);
            }
        };

        return (
            <>
                <Transition
                    visible={visible}
                    beforeEnter={{opacity: 0}}
                    afterEnter={{opacity: 0.7}}
                >
                    <div
                        className={classes(componentName, "mask")}
                        ref={markRef}
                    />
                </Transition>
                <Transition
                    visible={visible}
                    beforeEnter={{
                        top: "50%",
                        opacity: 0,
                        transform: "translateX(-50%) translateY(-50%) scale(0)"
                    }}
                    afterEnter={{
                        top: "30%",
                        opacity: 1,
                        transform: "translateX(-50%) translateY(-50%) scale(1)"
                    }}
                >
                    <div
                        className={classes(componentName, "", [className])}
                        ref={modalRef}
                    >
                        <div
                            className={classes(componentName, "close")}
                            onClick={cancelHandler}
                        >
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
            </>
        );
    };
export default Modal;