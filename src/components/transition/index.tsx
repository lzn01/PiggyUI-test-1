import * as React from "react";
import type {FC} from "react";
import {useCallback, useEffect} from "react";

interface TransitionProps {
    afterEnter?: React.CSSProperties;
    afterLeave?: React.CSSProperties;
    beforeEnter?: React.CSSProperties;
    beforeLeave?: React.CSSProperties;
    transitionActive?: React.CSSProperties;
    visible: boolean;
}

const Transition: FC<TransitionProps> =
    ({
         afterEnter,
         afterLeave,
         beforeEnter,
         beforeLeave,
         children,
         transitionActive,
         visible,
         ...rest
     }) => {
        const defaultTransitionActive = {
            transition: "300ms all cubic-bezier(.645, .045, .355, 1)"
        };

        const nodeStyleHandler = (node: HTMLElement, css: any) => {
            Object.keys(css).forEach((key) => {
                node.style[key as any] = css[key];
            });
        };

        const nodeHandler = useCallback((node: HTMLElement) => {
            node.style.display = visible ? "" : "none";
            nodeStyleHandler(node, {
                transition: "",
                ...visible
                    ? (beforeEnter || afterLeave || {})
                    : (beforeLeave || afterEnter || {})
            });
            node.getBoundingClientRect();
            nodeStyleHandler(node, {
                ...transitionActive ?? defaultTransitionActive,
                ...visible
                    ? (afterEnter || beforeLeave || {})
                    : (afterLeave || beforeEnter || {})
            });
        }, [visible]);

        useEffect(() => {
            if (!(children as any).ref) return;
            const node = (children as any).ref.current;
            node.addEventListener("transitionend", () => nodeHandler(node));
            return () => {
                node.removeEventListener("transitionend", () => nodeHandler(node));
            };
        }, [children, nodeHandler]);

        return (
            visible
                ? React.cloneElement(children as React.ReactElement<{}>, rest)
                : null
        );
    };
export default Transition;