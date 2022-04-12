import * as React from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon';
import Button from '../Button';
import Transition from '../../common/components/Transition';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';

type CancelType = 'default' | 'dashed' | 'primary' | 'success' | 'warning' | 'danger';
type OkType = 'default' | 'dashed' | 'primary' | 'success' | 'warning' | 'danger';

interface ModalProps {
    cancelText?: string; // 取消按钮文字
    cancelType?: CancelType;// 取消按钮类型
    className?: string;
    closable?: boolean; // 是否展示右上角关闭按钮
    footer?: ReactNode;
    mask?: boolean; // 是否展示蒙层
    maskClosable?: boolean; // 点击蒙层是否允许关闭
    maskStyle?: CSSProperties; // 蒙层样式
    okText?: string; // 确定按钮文字
    okType?: OkType; // 确定按钮类型
    onCancel?: MouseEventHandler; // 取消回调
    onOk?: MouseEventHandler; // 确定回调
    title?: ReactNode; // 标题
    visible: boolean;
}

const componentName = 'Modal';

const Modal: FC<ModalProps> =
    ({
         cancelText = '取 消',
         cancelType = 'default',
         children,
         className,
         closable = true,
         footer,
         mask = true,
         maskClosable = true,
         maskStyle,
         okText = '确 定',
         okType = 'primary',
         onCancel,
         onOk,
         title,
         visible,
     }) => {
        const maskRef = useRef<HTMLDivElement | null>(null);
        const modalRef = useRef<HTMLDivElement | null>(null);
        const bodyOverflowRef = useRef(window.getComputedStyle(document.body).overflow); // 在第一次渲染时取 body 原始的 overflow 值

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

        // modal显示时 阻止页面滚动
        useEffect(() => {
            document.body.style.overflow = visible
                ? 'hidden'
                : bodyOverflowRef.current;
        }, [visible]);

        return createPortal(
            <>
                <Transition
                    visible={mask && visible}
                    beforeEnter={{ opacity: 0 }}
                    afterEnter={{ opacity: 0.7 }}
                    style={{ ...maskStyle }}
                >
                    <div
                        className={classes(componentName, 'mask')}
                        ref={maskRef}
                        onClick={maskHandler}
                    />
                </Transition>
                <Transition
                    visible={visible}
                    beforeEnter={{
                        top: '50%',
                        opacity: 0,
                        transform: 'translateX(-50%) translateY(-50%) scale(0)',
                    }}
                    afterEnter={{
                        top: '30%',
                        opacity: 1,
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                    }}
                >
                    <div
                        className={classes(componentName, '', [className])}
                        ref={modalRef}
                    >
                        {
                            closable &&
                            <div
                                className={classes(componentName, 'close')}
                                onClick={cancelHandler}
                            >
                                <Icon name={'close'} size={12} />
                            </div>
                        }
                        <header className={classes(componentName, 'header')}>
                            {title ?? ''}
                        </header>
                        <main className={classes(componentName, 'main')}>
                            {children}
                        </main>
                        {
                            footer !== null
                                ? <footer className={classes(componentName, 'footer')}>
                                    {
                                        footer ??
                                        <>
                                            <Button
                                                type={cancelType}
                                                onClick={cancelHandler}
                                                style={{ marginRight: '8px' }}
                                            >
                                                {cancelText}
                                            </Button>
                                            <Button
                                                type={okType}
                                                onClick={okHandler}
                                            >
                                                {okText}
                                            </Button>
                                        </>
                                    }
                                </footer>
                                : null
                        }
                    </div>
                </Transition>
            </>,
            document.body,
        );
    };
export default Modal;