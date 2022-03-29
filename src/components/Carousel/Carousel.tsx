import * as React from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { isNotUndefined } from '../../common/methods/is';
import './styles/index.scss';
import type { CSSProperties, ForwardRefRenderFunction } from 'react';
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

export type CarouselEffect = 'scrollX' | 'fade';                // 动画效果
export type DotsPosition = 'top' | 'bottom' | 'left' | 'right'; // 面板指示点的四个显示位置

export interface CarouselProps extends Settings {
    dotsPosition?: DotsPosition;                                // 面板指示点的显示位置
    dotsTimer?: boolean;                                        // 是否在面板指示点提供帧剩余时间效果，开启自动切换时有效
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

const InternalCarousel: ForwardRefRenderFunction<CarouselRef, CarouselProps> = (
    {
        arrows = false,
        autoplay = true,
        autoplaySpeed = 3000,
        centerMode = false,
        centerPadding = '50px',
        className,
        dots = true,
        dotsPosition = 'bottom',
        dotsTimer = false,
        nextArrow,
        prevArrow,
        slidesToShow = 1,
        style,
        ...rest
    },
    ref,
) => {
    const slickRef = React.useRef<any>();

    const goTo = (slide: number, dontAnimate = false) => slickRef.current.slickGoTo(slide, dontAnimate);

    const next = () => slickRef.current.slickNext();

    const prev = () => slickRef.current.slickPrev();

    useImperativeHandle(
        ref, () => ({
            goTo,
            next,
            prev,
            autoPlay: slickRef.current.innerSlider.autoPlay,
            innerSlider: slickRef.current.innerSlider,
        }), [slickRef.current]);

    return (
        <></>
    );
};

const Carousel = forwardRef<CarouselRef, CarouselProps>(InternalCarousel);
export default Carousel;