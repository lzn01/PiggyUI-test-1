import * as React from 'react';
import type { FC, HTMLAttributes } from 'react';
import './styles/index.scss';
import { classes } from '../../common/methods/classes';

const componentName = 'Button-group';

const ButtonGroup: FC<HTMLAttributes<HTMLElement>> =
    ({
         children,
         className,
         ...rest
     }) => {
        return (
            <div className={classes(componentName, '', [className])}
                 {...rest}
            >
                {children}
            </div>
        );
    };
export default ButtonGroup;