"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variance = void 0;
const average_1 = require("../average");
/**
 * variance
 * @param values
 * @returns
 */
const variance = (values, options = {}) => {
    if (values.length < 2)
        return 0;
    const { unbiased = true } = options;
    /**
     * 値の平均を求める
     */
    const ave = average_1.average(...values);
    let dist = 0;
    for (let i = 0; i < values.length; i++) {
        let x = values[i] - ave;
        dist += x * x;
    }
    /**
     * 不偏分散の値を返す
     */
    if (unbiased)
        return dist / (values.length - 1);
    /**
     * 平標本分散の値を返す
     */
    return dist / values.length;
};
exports.variance = variance;
