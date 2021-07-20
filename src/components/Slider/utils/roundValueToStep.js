import getDecimalPrecision from "./getDecimalPrecision";

export default function (value, step, min) {
    const nearest = Math.round((value - min) / step) * step + min;
    return Number(nearest.toFixed(getDecimalPrecision(step)));
}