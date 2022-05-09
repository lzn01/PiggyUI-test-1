import { isFunc } from '../methods/is';
import useLatest from './useLatest';
import { debounce } from 'lodash';
import { useMemo } from 'react';
import useUnmount from './useUnmount';

type noop = (...args: any[]) => any;

interface DebounceOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}

interface Result {
    run: noop;
    cancel: () => void;
    flush: () => void;
}

const useDebounceFn: <T extends noop>(fn: T, opts?: DebounceOptions) => Result | undefined
    = (fn, opts) => {
    if (!isFunc(fn)) return;

    const fnRef = useLatest(fn);
    const wait = opts?.wait ?? 1000;
    const debounced = useMemo(() =>
        debounce(
            (<T extends noop>(...args: Parameters<T>): ReturnType<T> => fnRef.current(...args)),
            wait,
            opts,
        ), []);

    useUnmount(() => {
        debounced.cancel();
    });

    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush,
    };
};

export default useDebounceFn;