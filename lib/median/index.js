"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.median = void 0;
/**
 * median
 * @param values
 * @returns
 */
const median = (...values) => {
    const halfColumn = (values.length / 2) | 0;
    const sortedValues = values.sort((a, b) => a - b);
    if (sortedValues.length % 2)
        return sortedValues[halfColumn];
    return (sortedValues[halfColumn - 1] + sortedValues[halfColumn]) / 2;
};
exports.median = median;
