"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = void 0;
const sum_1 = require("../sum");
/**
 * average
 * @param values
 * @returns
 */
const average = (...values) => {
    return sum_1.sum(...values) / values.length;
};
exports.average = average;
