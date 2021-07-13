"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xPowerApproximation = void 0;
/**
 * xPowerApproximation
 * y = a * x ^ bのx=
 * @param x
 * @param a
 * @param b
 */
const xPowerApproximation = (y, a, b) => {
    return Math.pow(y / a, 1 / b);
};
exports.xPowerApproximation = xPowerApproximation;
