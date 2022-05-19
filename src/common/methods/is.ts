import { isValidElement } from 'react';

export const isArray = (v: any) => Array.isArray(v);
export const isUndefined = (v: any) => v == null;
export const isNotUndefined = (v: any) => v != null;
export const isFunc = (v: any) => typeof v === 'function';
export const isNumber = (v: any) => typeof v === 'number';
export const isObject = (v: any) => v && typeof v === 'object' && !isArray(v);
export const isString = (v: any) => typeof v === 'string';
export const isBoolean = (v: any) => typeof v === 'boolean';
export const isLink = (el: {} | null | undefined) => {
    if (!isValidElement(el)) return false;
    if (!el.type) return false;
    if (el.type === 'a') return true;
    return !!(el.props && el.props.to);

};

export const isEnterPress = (e: { keyCode: number; }) => e.keyCode === 13;

export const isMacOS = () => /macintosh|mac os x/i.test(navigator.userAgent);

export const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;