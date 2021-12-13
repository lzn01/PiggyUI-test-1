import * as React from "react";
import "./index.scss";
import type {FC} from "react";
import {useCallback, useEffect, useRef} from "react";
import classes from "../../methods/classes";

const Wave: FC = ({children}) => {
    const animating = useRef<boolean | null>(null);
    const originClassName = useRef<string>("");

    const animationToEnd = useCallback((node: HTMLElement) => {
        animating.current = false;
        node.className = classes("", [originClassName]);
        node.removeEventListener("animationend", () => animationToEnd(node));
    }, []);

    const animationOnStart = useCallback((node: HTMLElement) => {
        if (animating.current) return;
        animating.current = true;
        originClassName.current = node.className;
        node.className = classes("", [originClassName, "pui-wave-animation-animating"]);
        node.addEventListener("animationend", () => animationToEnd(node));
    }, [animationToEnd]);

    useEffect(() => {
        const node = (children as any).ref.current;
        node.addEventListener("click", () => animationOnStart(node));
        return () => {
            node.removeEventListener("click", () => animationOnStart(node));
            node.removeEventListener("animationend", () => animationToEnd(node));
        };
    }, [animationOnStart, animationToEnd, children]);

    return (
        <>{children}</>
    );
};

export default Wave;
