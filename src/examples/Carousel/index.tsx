import * as React from 'react';
import Carousel from '../../components/Carousel';

const CarouselExample = () => {
    return (
        <>
            <Carousel
                arrows={true}
                dotsTimer
                style={{
                    textAlign: 'center',
                    height: '160px',
                    background: '#292c33',
                    overflow: 'hidden',
                    fontSize: '24px',
                }}>
                <div><h3 style={{ color: '#fff' }}>1</h3></div>
                <div><h3 style={{ color: '#fff' }}>2</h3></div>
                <div><h3 style={{ color: '#fff' }}>3</h3></div>
                <div><h3 style={{ color: '#fff' }}>4</h3></div>
            </Carousel>
        </>
    );
};
export default CarouselExample;