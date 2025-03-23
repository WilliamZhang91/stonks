export const numberFormatter = (num: number): string => {
    if (Math.abs(num) >= 1.0e9) {
        return (num / 1.0e9).toFixed(2).toString() + " B";
    } else if (Math.abs(num) >= 1.0e6) {
        return (num / 1.0e6).toFixed(0).toString() + " M";
    } else {
        return num.toLocaleString();
    }
}