import * as React from "react";
import type {FC} from "react";
import {useCallback, useEffect, useState} from "react";

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
        const [rendered, setRendered] = useState(false);

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
                    ? beforeEnter || afterLeave || {}
                    : beforeLeave || afterEnter || {}
            });
            node.getBoundingClientRect();
            nodeStyleHandler(node, {
                ...transitionActive ?? {transition: "300ms all cubic-bezier(.645, .045, .355, 1)"},
                ...visible
                    ? afterEnter || beforeLeave || {}
                    : afterLeave || beforeEnter || {}
            });
            setRendered(true);
        }, [afterEnter, afterLeave, beforeEnter, beforeLeave, transitionActive, visible]);

        const transitionendHandler = useCallback((node: HTMLElement) => {
            node.style.display = visible ? "" : "none";
        }, [visible]);

        useEffect(() => {
            if (!(children as any).ref?.current) return;
            const node = (children as any).ref.current;
            nodeHandler(node);
            node.addEventListener("transitionend", () => transitionendHandler(node));
            return () => {
                node.removeEventListener("transitionend", () => transitionendHandler(node));
            };
        }, [children, nodeHandler, transitionendHandler, visible]);

        return (
            visible || rendered
                ? React.cloneElement(
                    children as React.ReactElement,
                    {...rest, style: {display: "none"}}
                )
                : null
        );
    };
export default Transition;