import { debounce } from 'lodash';
import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import type { ForwardedRef } from 'react';
import { observerDomResize } from '../methods/observerDomResize';

export const useAutoResize = (ref: ForwardedRef<any>) => {
  const domRef = useRef<any>();
  const [size, setSize] = useState({ width: 0, height: 0 });

  const setWH = () => {
    const { clientWidth = 0, clientHeight = 0 } = domRef.current;
    setSize({ width: clientWidth, height: clientHeight });
  };

  useImperativeHandle(
    ref,
    () => setWH,
    [domRef.current],
  );

  useEffect(() => {
    // 给setWH函数添加防抖
    const debounceSetWH = debounce(
      setWH,
      500,
      { leading: true },
    );

    // 创建一个观察者对象 domObserver
    const domObserver = observerDomResize(domRef.current, debounceSetWH);

    addEventListener('resize', debounceSetWH);

    return () => {
      domObserver?.disconnect();
      domObserver?.takeRecords();
      removeEventListener('resize', debounceSetWH);
    };
  }, []);

  return { ...size, domRef, setWH };
};
