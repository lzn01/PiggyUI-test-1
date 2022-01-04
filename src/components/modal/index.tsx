import * as React from "react";
import {useRef} from "react";
import {createPortal} from "react-dom";
import type {CSSProperties, FC, MouseEventHandler, ReactNode} from "react";
import "./index.scss";
import Icon from "../icon";
import Button from "../button";
import classes from "../../common/methods/classes";
import Transition from "../../common/components/transition";

interface ModalProps {
    cancelText?: string; // 取消按钮文字
    cancelType?: "default" | "dashed" | "primary" | "success" | "warning" | "danger"; // 取消按钮类型
    className?: string;
    footer?: ReactNode;
    mask?: boolean; // 是否展示蒙层
    maskClosable?: boolean; // 点击蒙层是否允许关闭
    maskStyle?: CSSProperties; // 蒙层样式
    okText?: string; // 确定按钮文字
    okType?: "default" | "dashed" | "primary" | "success" | "warning" | "danger"; // 确定按钮类型
    onCancel?: MouseEventHandler; // 取消回调
    onOk?: MouseEventHandler; // 确定回调
    title?: ReactNode;
    visible: boolean;
}

const componentName = "modal";

const Modal: FC<ModalProps> =
    ({
         cancelText = "取 消",
         cancelType = "default",
         children,
         className,
         footer,
         mask = true,
         maskClosable = true,
         maskStyle,
         okText = "确 定",
         okType = "primary",
         onCancel,
         onOk,
         title,
         visible
     }) => {
        const maskRef = useRef<HTMLDivElement | null>(null);
        const modalRef = useRef<HTMLDivElement | null>(null);

        // 取消回调
        const cancelHandler: React.MouseEventHandler = (e) => {
            if (onCancel) {
                onCancel(e);
            }
        };

        // 确定回调
        const okHandler: React.MouseEventHandler = (e) => {
            if (onOk) {
                onOk(e);
            }
        };


        // 蒙层点击事件
        const maskHandler: React.MouseEventHandler = (e) => {
            if (maskClosable && onCancel) {
                onCancel(e);
            }
        };

        return createPortal(
            <>
                <Transition
                    visible={mask && visible}
                    beforeEnter={{opacity: 0}}
                    afterEnter={{opacity: 0.7}}
                    style={{...maskStyle}}
                >
                    <div
                        className={classes(componentName, "mask")}
                        ref={maskRef}
                        onClick={maskHandler}
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
                            {title ?? "Title"}
                        </header>
                        <main className={classes(componentName, "main")}>
                            {children}
                        </main>
                        <footer className={classes(componentName, "footer")}>
                            {
                                footer
                                ??
                                <>
                                    <Button
                                        kind={cancelType}
                                        onClick={cancelHandler}
                                        style={{marginRight: "8px"}}
                                    >
                                        {cancelText}
                                    </Button>
                                    <Button
                                        kind={okType}
                                        onClick={okHandler}
                                    >
                                        {okText}
                                    </Button>
                                </>
                            }
                        </footer>
                    </div>
                </Transition>
            </>,
            document.body
        );
    };
export default Modal;