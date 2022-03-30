import { isArray, isObject, isString } from './is';

const prefixClassName = 'pui';

export const classes = (componentName: string, ...params: any): string => {
    const className = new Array<string>();

    params.forEach((param: any) => {
        if (isString(param)) {
            className.push(`${prefixClassName}-${componentName.toLowerCase()}${param && '-' + param}`);
        }
        if (isArray(param)) {
            param.forEach((str: any) => isString(str) && className.push(str));
        }
        if (isObject(param)) {
            for (const key in param) {
                if (param.hasOwnProperty.bind(key) && param[key]) {
                    className.push(key);
                }
            }
        }
    });

    return className.filter(v => v).join(' ');
};
