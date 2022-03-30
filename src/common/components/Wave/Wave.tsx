import * as React from 'react';
import './styles/index.scss';
import type { FC } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { classes } from '../../methods/classes';

const Wave: FC = ({ children }) => {
    const active = useRef<boolean>(false);
    const originCN = useRef<string>('');

    const animationToEnd = useCallback((node: HTMLElement) => {
        active.current = false;
        node.className = classes('', [originCN.current]);
        node.removeEventListener('animationend', () => animationToEnd(node));
    }, []);

    const animationOnStart = useCallback((node: HTMLElement) => {
        if (!active.current) {
            active.current = true;
            originCN.current = node.className;
            node.className = classes('', [originCN.current, 'pui-wave-animation-animating']);
            node.addEventListener('animationend', () => animationToEnd(node));
        }
    }, [animationToEnd]);

    useEffect(() => {
        if (!(children as any).ref?.current) return;
        const node = (children as any).ref.current;
        node.addEventListener('click', () => animationOnStart(node));
        return () => {
            node.removeEventListener('click', () => animationOnStart(node));
            node.removeEventListener('animationend', () => animationToEnd(node));
        };
    }, [animationOnStart, animationToEnd, children]);

    return (<>{children}</>);
};
export default Wave;
