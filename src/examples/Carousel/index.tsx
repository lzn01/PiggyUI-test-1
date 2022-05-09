import * as React from 'react';
import Carousel from '../../components/Carousel';
import './index.scss';
import { useRef } from 'react';
import Button from '../../components/Button';

const CarouselExample = () => {
    const ref = useRef<any>();
    const onClick = () => {
        const { current } = ref;
        current.prev();
    };

    const onClick2 = () => {
        const { current } = ref;
        current.next();
    };

    return (
        <div className={'carousel'}>
            <Button onClick={onClick}>跳转</Button>
            <Button onClick={onClick2}>跳转</Button>
            <Carousel arrows autoplay={true} dotsTimer ref={ref}>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>1</h3></div>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>2</h3></div>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>3</h3></div>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>4</h3></div>
            </Carousel>
        </div>
    );
};
export default CarouselExample;