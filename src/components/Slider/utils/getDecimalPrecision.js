export default function (num) {
    const decimalPart = num.toString().split(".")[1];
    return decimalPart ? decimalPart.length : 0;
}