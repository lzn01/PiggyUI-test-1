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
        const nodeStyleHandler = (node: HTMLElement, css: any) => {
            Object.keys(css).forEach((key) => {
                node.style[key as any] = css[key];
            });
        };

        const nodeHandler = useCallback((node: HTMLElement) => {
            node.style.display = "";
            nodeStyleHandler(node, {
                transition: "",
                ...visible
                    ? (beforeEnter || afterLeave || {})
                    : (beforeLeave || afterEnter || {})
            });
            node.getBoundingClientRect();
            nodeStyleHandler(node, {
                ...transitionActive ?? {transition: "300ms all cubic-bezier(.645, .045, .355, 1)"},
                ...visible
                    ? (afterEnter || beforeLeave || {})
                    : (afterLeave || beforeEnter || {})
            });
        }, [afterEnter, afterLeave, beforeEnter, beforeLeave, transitionActive, visible]);

        useEffect(() => {
            if (!(children as any).ref.current) return;
            const node = (children as any).ref.current;
            nodeHandler(node);
            node?.addEventListener("transitionend", () => {
                node.style.display = visible ? "" : "none";
            });
            return () => {
                node?.removeEventListener("transitionend", () => {
                    node.style.display = visible ? "" : "none";
                });
            };
        }, [children, nodeHandler, visible]);

        return (
            visible
                ? React.cloneElement(children as React.ReactElement, rest)
                : null
        );
    };
export default Transition;