import { useRef } from 'react';
import type { MutableRefObject } from 'react';

const useLatest: <T>(value: T) => MutableRefObject<T> = (value) => {
    const ref = useRef(value);
    ref.current = value;
    return ref;
};

export default useLatest;