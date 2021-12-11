import * as React from "react";
import "./index.scss";
import type {FC} from "react";
import {useCallback, useEffect} from "react";
import classes from "../../methods/classes";

interface WaveProps {
    closeWave?: boolean;
}

let animating: boolean;
let originClassName: string;

const Wave: FC<WaveProps> =
    ({
         children,
         closeWave
     }) => {

        const animationToEnd = useCallback((node: HTMLElement) => {
            animating = false;
            node.className = classes("", [originClassName]);
            node.removeEventListener("animationend", () => animationToEnd(node));
        }, []);

        const animationOnStart = useCallback((node: HTMLElement) => {
            if (animating || closeWave) return;
            animating = true;
            originClassName = node.className;
            node.className = classes("", [originClassName, "pui-wave-animation-animating"]);
            node.addEventListener("animationend", () => animationToEnd(node));
        }, [animationToEnd, closeWave]);

        useEffect(() => {
            const node = (children as any).ref.current;
            node?.addEventListener("click", () => animationOnStart(node));
            return () => {
                node?.removeEventListener("click", () => animationOnStart(node));
                node?.removeEventListener("animationend", () => animationToEnd(node));
            };
        }, [animationOnStart, animationToEnd, children]);

        return (
            <>{children}</>
        );
    };

export default Wave;
