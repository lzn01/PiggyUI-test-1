import * as React from 'react';
import { isNotUndefined } from '../../common/methods/is';
import './styles/index.scss';
import type { CSSProperties, FC } from 'react';
import type { Settings } from 'react-slick';

if (isNotUndefined(window)) {
    const matchMediaPolyfill = (mediaQuery: string) => ({
        media: mediaQuery,
        matches: false,
        addListener() {},
        removeListener() {},
    }) as unknown as MediaQueryList;
    window.matchMedia = matchMedia || matchMediaPolyfill;
}

export type CarouselEffect = 'scrollx' | 'fade';                // 动画效果
export type DotsPosition = 'top' | 'bottom' | 'left' | 'right'; // 面板指示点的四个显示位置

export interface CarouselProps extends Omit<Settings, 'dots'> {
    dots?: boolean;                                             // 是否显示面板指示点
    dotsPosition?: DotsPosition;                                // 面板指示点的显示位置
    effect?: CarouselEffect;                                    // 动画效果函数
    style?: CSSProperties;                                      // 容器样式
}

export interface CarouselRef {
    goTo: (slide: number, dontAnimate?: boolean) => void;       // 切换到指定面板
    next: () => void;                                           // 切换到下一面板
    prev: () => void;                                           // 切换到上一面板
    autoPlay: boolean;                                          // 是否自动切换
    innerSlider: any;
}

// const componentName = 'Carousel';

const Carousel: FC<CarouselProps> =
    ({
         afterChange,
         beforeChange,
         children,
         className,
         dots,
         style,
     }) => {
        return (
            <></>
        );
    };
export default Carousel;