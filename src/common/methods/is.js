export const isArray = Array.isArray
export const isUndef = v => v == null
export const isNotUndef = v => v != null
export const isFunc = f => typeof f === 'function'
export const isNumber = n => typeof n === 'number'
export const isObject = val => val && typeof val === 'object' && !isArray(val)
export const isString = s => typeof s === 'string'