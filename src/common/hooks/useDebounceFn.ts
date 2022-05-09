import useLatest from './useLatest';
import { debounce } from 'lodash';
import { useMemo } from 'react';
import useUnmount from './useUnmount';

export type noop = (...args: any[]) => any;

export interface DebounceOptions {
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
    maxWait?: number;
}

export interface DebounceResult {
    run: noop;
    cancel: () => void;
    flush: () => void;
}

const useDebounceFn: <T extends noop>(fn: T, opts?: DebounceOptions) => DebounceResult
    = (fn, opts) => {
    const { wait = 1000, ...restOpts } = opts || {};

    const fnRef = useLatest(fn);

    const debounced = useMemo(() =>
        debounce(
            (<T extends noop>(...args: Parameters<T>): ReturnType<T> => fnRef.current(...args)),
            wait,
            restOpts,
        ), []);

    useUnmount(() => debounced.cancel());

    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush,
    };
};

export default useDebounceFn;