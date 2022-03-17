import * as React from "react";
import {Children, useEffect, useRef, useState} from "react";
import classes from "../../common/methods/classes";
import "./styles/index.scss";
import type {CSSProperties, FC} from "react";

interface CarouselProps {
    afterChange?: (current: number, from: number) => any; // 面板切换完成时的回调
    beforeChange?: (from: number, to: number) => any; // 面板开始切换时的回调
    className?: string;
    dots?: boolean; // 是否显示面板指示点
    duration?: number; // 自动播放间隔，设置为 0 时不自动播放，单位：秒
    style?: CSSProperties;
}

const componentName = "Carousel";

const Carousel: FC<CarouselProps> =
    ({
         afterChange,
         beforeChange,
         children,
         className,
         dots,
         duration,
         style
     }) => {
        const containerRef = useRef<HTMLDivElement | null>(null);
        const [current, setCurrent] = useState(1);
        const [hasTransitionClassName, setHasTransitionClassName] = useState(true);

        const cloneNode = () => {
            const nodeList: HTMLElement[] = [];
            const containerNode = containerRef.current;
            containerNode?.childNodes.forEach(node => {
                if (node.nodeType === 1) {
                    const eleNode = node as HTMLElement;
                    nodeList.push(eleNode);
                }
            });
            containerNode?.append(nodeList[0].cloneNode(true));
            containerNode?.prepend(nodeList[nodeList.length - 1].cloneNode(true));
        };

        const containerClassName = classes(componentName, "container", {
            "has-transition-class-name": hasTransitionClassName
        });

        useEffect(() => {
            cloneNode();
        }, []);

        return (
            <div
                className={classes(componentName, "", [className])}
                style={style}
            >
                <div
                    className={containerClassName}
                    ref={containerRef}
                >
                    {children}
                </div>
                {
                    dots &&
                    <div className={classes(componentName, "dot-wrapper")}>
                        {
                            Children.map(children, (
                                child, index) =>
                                <span
                                    className={classes(componentName, "dot", {
                                            active: current === index + 1
                                        }
                                    )}
                                    onClick={() => {
                                    }}
                                />
                            )
                        }
                    </div>
                }
            </div>
        );
    };
export default Carousel;