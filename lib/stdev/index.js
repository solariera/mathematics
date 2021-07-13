"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdev = void 0;
const variance_1 = require("../variance");
/**
 * stdev
 * @param values
 * @returns
 */
const stdev = (values, options = {}) => {
    return Math.sqrt(variance_1.variance(values, options));
};
exports.stdev = stdev;
