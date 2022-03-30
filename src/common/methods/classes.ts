import { isArray, isObject, isString } from './is';

const prefix = 'pui';

export const classes = (componentName: string, ...args: any): string => {
    const className = new Array<string>();
    args.forEach((arg: any) => {
        if (isString(arg)) {
            className.push(`${prefix}-${componentName.toLowerCase()}${arg && '-' + arg}`);
        } else if (isArray(arg)) {
            arg.forEach(str => isString(str) && className.push(str));
        } else if (isObject(arg) && !(isArray(arg))) {
            for (const key in arg) {
                if (arg.hasOwnProperty.call(key) && arg[key]) {
                    className.push(key);
                }
            }
        }
    });
    return className.filter(v => v).join(' ');
};
