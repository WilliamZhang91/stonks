import { numberFormatter } from "./numberFormatter";

export const formatValue = (key: string, value: any): any => {
    if (key === 'date') {
        return new Intl.DateTimeFormat('en-GB').format(new Date(value));
    } else if (typeof value === 'number') {
        return "$" + numberFormatter(value);
    } else {
        return value;
    }
};