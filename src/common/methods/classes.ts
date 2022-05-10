import { isArray, isObject, isString } from './is';

const prefixClassName = 'pui';

export const classes = (componentName: string, ...args: any): string => {
    const className = new Array<string>();

    args.forEach((arg: any) => {
        if (isString(arg)) {
            className.push(`${prefixClassName}-${componentName.toLowerCase()}${arg && '-' + arg}`);
        }
        if (isArray(arg)) {
            arg.forEach((str: any) => isString(str) && className.push(str));
        }
        if (isObject(arg)) {
            for (const key in arg) {
                if (arg.hasOwnProperty.bind(key) && arg[key]) {
                    className.push(key);
                }
            }
        }
    });

    return className.filter(v => v).join(' ');
};

// str.toUpperCase() 把字符串转换为大写
// str.toLowerCase() 把字符串转换为小写
