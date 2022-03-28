export const { isArray } = Array;
export const isUndef = (v: any) => v == null;
export const isNotUndef = (v: any) => v != null;
export const isFunc = (f: any) => typeof f === 'function';
export const isNumber = (n: any) => typeof n === 'number';
export const isObject = (val: any) => val && typeof val === 'object' && !isArray(val);
export const isString = (s: any) => typeof s === 'string';