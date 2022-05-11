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

interface DebounceResult {
    run: noop;
    cancel: () => void;
    flush: () => void;
}

const useDebounceFn: <T extends noop>(func: T, opts?: DebounceOptions) => DebounceResult
    = (func, opts) => {
    const { wait = 1000, ...restOpts } = opts || {};

    const funcRef = useLatest(func);

    const debounced = useMemo(
        () =>
            debounce(
                <T extends noop>(...args: Parameters<T>): ReturnType<T> => funcRef.current(...args),
                wait,
                restOpts,
            ),
        [],
    );

    useUnmount(() => debounced.cancel());

    return {
        run: debounced,
        cancel: debounced.cancel,
        flush: debounced.flush,
    };
};

export default useDebounceFn;