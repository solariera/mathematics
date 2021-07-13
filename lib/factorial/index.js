"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
/**
 * factorial
 * @param value
 * @returns
 */
const factorial = (value) => {
    return value <= 0 ? 1 : value * exports.factorial(value - 1);
};
exports.factorial = factorial;
