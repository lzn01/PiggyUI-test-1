export const { isArray } = Array;
export const isUndefined = (v: any) => v == null;
export const isNotUndefined = (v: any) => v != null;
export const isFunc = (f: any) => typeof f === 'function';
export const isNumber = (n: any) => typeof n === 'number';
export const isObject = (val: any) => val && typeof val === 'object' && !isArray(val);
export const isString = (s: any) => typeof s === 'string';