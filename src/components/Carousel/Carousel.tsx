import * as React from 'react';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { findDOMNode } from 'react-dom';
import SlickCarousel from 'react-slick';
import _ from 'lodash';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { CSSProperties, ForwardRefRenderFunction } from 'react';
import type { Settings } from 'react-slick';

export type CarouselEffect = 'scrollX' | 'fade';                // 动画效果
export type DotsPosition = 'top' | 'bottom' | 'left' | 'right'; // 面板指示点的四个显示位置

export interface CarouselProps extends Settings {
    dotsPosition?: DotsPosition;                                // 面板指示点的显示位置
    dotsTimer?: boolean;                                        // 是否在面板指示点提供帧剩余时间效果，开启自动切换时有效
    effect?: CarouselEffect;                                    // 动画效果函数
    style?: CSSProperties;                                      // 容器样式
}

export interface CarouselRef {
    autoPlay: boolean;                                          // 是否自动切换
    goTo: (slide: number, dontAnimate?: boolean) => void;       // 切换到指定面板
    innerSlider: any;
    next: () => void;                                           // 切换到下一面板
    prev: () => void;                                           // 切换到上一面板
}

const componentName = 'Carousel';

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
        effect = 'scrollX',
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

    useImperativeHandle(ref, () => ({
        autoPlay: slickRef.current.innerSlider.autoPlay,
        goTo,
        innerSlider: slickRef.current.innerSlider,
        next,
        prev,
    }), [slickRef.current]);

    useEffect(() => {
        if (!autoplay) return;
        if (dotsTimer) {
            const slickDOM = findDOMNode(slickRef.current) as HTMLDivElement;
            const timerElement = slickDOM?.querySelector('.timer') as HTMLLIElement;
            const animationName = dotsPosition === 'left' || dotsPosition === 'right' ? 'dotsAniVertical' : 'dotsAniHorizontal';

            const mouseoverAniHandler = () => {
                timerElement.style.setProperty('dots-ani', `none`);
            };

            const mouseoutAniHandler = () => {
                timerElement.style.setProperty('dots-ani', `${animationName} ${autoplaySpeed / 1000}s infinite`);
            };

            slickDOM.addEventListener('mouseover', () => mouseoverAniHandler());
            slickDOM.addEventListener('mouseout', () => mouseoutAniHandler());

            return () => {
                slickDOM.removeEventListener('mouseover', () => mouseoverAniHandler());
                slickDOM.removeEventListener('mouseout', () => mouseoutAniHandler());
            };
        }

        const autoPlayHandler = () => {
            if (slickRef.current?.innerSlider) {
                slickRef.current.autoPlay();
            }
        };

        const onWindowResized = _.debounce(
            autoPlayHandler,
            500,
            { leading: false },
        );

        addEventListener('resize', onWindowResized);

        return () => {
            removeEventListener('resize', onWindowResized);
            onWindowResized.cancel();
        };
    }, [autoplay, slickRef.current]);

    return (
        <div
            className={classes(componentName, '', [className, dotsPosition])}
            style={style}
        >
            <SlickCarousel
                ref={slickRef}
                {...rest}
                arrows={arrows}
                autoplay={autoplay}
                autoplaySpeed={autoplaySpeed}
                centerMode={centerMode}
                centerPadding={centerPadding}
                dots={dots}
                dotsClass={classes(componentName, 'dots', {
                        timer: autoplay && dotsTimer,
                        vertical: dotsPosition === 'left' || dotsPosition === 'right',
                    },
                )}
                fade={effect === 'fade'}
                nextArrow={nextArrow ?? <div className={classes(componentName, 'next')} onClick={next} />}
                prevArrow={prevArrow ?? <div className={classes(componentName, 'prev')} onClick={prev} />}
                slidesToShow={slidesToShow}
            />
        </div>
    );
};

export const Carousel = forwardRef<CarouselRef, CarouselProps>(InternalCarousel);