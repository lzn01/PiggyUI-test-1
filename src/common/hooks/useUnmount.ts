import { isFunc } from '../methods/is';
import useLatest from './useLatest';
import { useEffect } from 'react';

const useUnmount = (fn: () => void) => {
    if (!isFunc(fn)) return;
    const fnRef = useLatest(fn);

    useEffect(() => () => fnRef.current(), []);
};

export default useUnmount;