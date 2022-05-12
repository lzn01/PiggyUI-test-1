import * as React from 'react';
import { useRef } from 'react';
import Transition from '../../common/components/Transition';
import Icon from '../Icon';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { CSSProperties, FC } from 'react';

interface SpinProps {
    className?: string;
    size?: number;
    spinning?: boolean;
    style?: CSSProperties;
    tip?: string; // 自定义描述文案
}

const componentName = 'Spin';

const Spin: FC<SpinProps> =
    ({
         children,
         className,
         size = 24,
         spinning = true,
         style,
         tip,
     }) => {
        const spinRef = useRef<HTMLDivElement | null>(null);

        return (
            <div
                className={classes(componentName, '', [className], { 'with-children': !!children })}
                style={style}
            >
                <div className={classes(componentName, 'mask', { active: !!children, spinning })} />
                <Transition
                    visible={!!spinning}
                    beforeEnter={{ opacity: 0 }}
                    afterEnter={{ opacity: 1 }}
                >
                    <div
                        className={classes(componentName, 'container', {
                                'with-tip': !!tip,
                                'with-children': !!children,
                            },
                        )}
                        ref={spinRef}
                    >
                        <Icon
                            className={classes(componentName, 'icon')}
                            name="loading"
                            size={size}
                        />
                        {
                            tip &&
                            <span className={classes(componentName, 'tip')}>
                                {tip}
                            </span>
                        }
                    </div>
                </Transition>
                {children}
            </div>
        );
    };

export default Spin;