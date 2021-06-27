"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
/**
 * sum
 * @param values
 * @returns
 */
const sum = (...values) => {
    return values.reduce((prev, current) => prev + current);
};
exports.sum = sum;
