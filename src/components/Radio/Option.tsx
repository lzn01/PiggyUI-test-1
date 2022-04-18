import * as React from 'react';
import { classes } from '../../common/methods/classes';
import './styles/index.scss';
import type { OptionProps } from './Radio';
import type { FC, MouseEventHandler } from 'react';

const componentName = 'Option';

const Option: FC<OptionProps> =
    ({
         checkedValue,
         children,
         disabled,
         onClick,
         radioStyle,
         value,
         vertical,
     }) => {
        const clickHandler: MouseEventHandler = (e) => {
            if (disabled || !onClick) {
                return;
            }
            onClick(e, value);
        };

        return (
            <label
                className={classes(componentName, '', [radioStyle + '-style'], {
                        checked: value === checkedValue,
                        disabled,
                        vertical,
                    },
                )}
                onClick={clickHandler}
            >
                {
                    radioStyle === 'Radio' &&
                    <span className="label-dot" />
                }
                <div className="label-text">
                    {children}
                </div>
            </label>
        );
    };
export default Option;