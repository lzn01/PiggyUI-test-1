import * as React from 'react';
import type { FC } from 'react';
import './styles/index.scss';
import '../../common/methods/importAll';
import { classes } from '../../common/methods/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number;
}

const componentName = 'Icon';

const Icon: FC<IconProps> = (
    {
        className,
        name,
        size,
        style,
        ...rest
    },
) => {
    return (
        <svg className={classes(componentName, '', [className])}
             style={{
                 width: size && `${size}px`,
                 height: size && `${size}px`,
                 ...style,
             }}
             {...rest}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;