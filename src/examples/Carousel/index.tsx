import * as React from 'react';
import Carousel from '../../components/Carousel';
import './index.scss';

const CarouselExample = () => {
    return (
        <div className={'carousel'}>
            <Carousel arrows dotsTimer>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>1</h3></div>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>2</h3></div>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>3</h3></div>
                <div className={'abc'}><h3 style={{ color: '#fff' }}>4</h3></div>
            </Carousel>
        </div>
    );
};
export default CarouselExample;