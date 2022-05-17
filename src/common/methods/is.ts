export const isArray = (v: any) => Array.isArray(v);
export const isUndefined = (v: any) => v == null;
export const isNotUndefined = (v: any) => v != null;
export const isFunc = (v: any) => typeof v === 'function';
export const isNumber = (v: any) => typeof v === 'number';
export const isObject = (v: any) => v && typeof v === 'object' && !isArray(v);
export const isString = (v: any) => typeof v === 'string';
export const isBoolean = (v: any) => typeof v === 'boolean';
export const isPercent = n => typeof n === 'string' && /\d{1,3}%$/.test(n)
export const isInseparable = val =>
    Object(val) !== val || isFunc(val) || isDate(val) || isError(val) || isSet(val) || isMap(val) || isRegexp(val)