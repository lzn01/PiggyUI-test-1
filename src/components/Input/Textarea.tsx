import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { classes } from '../../common/methods/classes';
import { calculateNodeHeight } from '../../common/methods/calculateNodeHeight';
import './styles/index.scss';
import type { ChangeEventHandler, FC, KeyboardEventHandler, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    autosize?: boolean;
    defaultValue?: string;
    onPressEnter?: KeyboardEventHandler;
    value?: string;
}

const componentName = 'Textarea';

const Textarea: FC<TextareaProps> = (
    {
        autosize,
        className,
        defaultValue = '',
        onChange,
        ...rest
    },
) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [textareaValue, setTextareaValue] = useState(defaultValue);
    const [originHeight, setOriginHeight] = useState(0);

    const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const node = textareaRef.current as HTMLTextAreaElement;

        if (onChange) {
            onChange(e);
        }

        if (autosize) {
            const hiddenHeight = calculateNodeHeight(node);

            if (hiddenHeight > originHeight) {
                node.style.height = `${hiddenHeight}px`;
            }
        }

        setTextareaValue(e.target.value);
    };

    useEffect(() => {
        const node = textareaRef.current as HTMLTextAreaElement;
        const { top, bottom } = node.getBoundingClientRect();

        setOriginHeight(bottom - top);
    }, []);

    return (
        <textarea
            className={classes(componentName, '', [className], { autosize })}
            onChange={changeHandler}
            value={textareaValue}
            ref={textareaRef}
            {...rest}
        />
    );
};

export default Textarea;