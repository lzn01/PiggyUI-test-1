import * as React from 'react';
import './styles/index.scss';
import Icon from '../Icon';
import { classes } from '../../common/methods/classes';
import type { FC } from 'react';

type Position = 'left' | 'right';

interface StarProps {
    count: number;
    index: number;
    onClick?: (index: number, position: Position) => void;
    onMouseEnter?: (index: number, position: Position) => void;
}

const componentName = 'star';

const Star: FC<StarProps> =
    ({
         count,
         index,
         onClick,
         onMouseEnter,
     }) => {
        const iconNameHandler = () => {
            const starValue = count - index;
            if (starValue < 0.5) {
                return 'empty-star';
            }
            if (starValue > 0.5) {
                return 'full-star';
            }
            return 'half-star';
        };

        const mouseEnterHandler = (position: 'left' | 'right') => {
            if (onMouseEnter) {
                onMouseEnter(index, position);
            }
        };

        const clickHandler = (position: 'left' | 'right') => {
            if (onClick) {
                onClick(index, position);
            }
        };

        return (
            <li className={classes(componentName, '')}>
                <Icon
                    name={iconNameHandler()}
                    size={20}
                    className="pui-rate-star-icon"
                />
                <div
                    className={classes(componentName, 'filler', ['left'])}
                    onMouseEnter={() => mouseEnterHandler('left')}
                    onClick={() => clickHandler('left')}
                />
                <div
                    className={classes(componentName, 'filler', ['right'])}
                    onMouseEnter={() => mouseEnterHandler('right')}
                    onClick={() => clickHandler('right')}
                />
            </li>
        );
    };
export default Star;