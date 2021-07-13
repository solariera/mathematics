"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variance = void 0;
const average_1 = require("../average");
/**
 * variance
 * @param values
 * @returns
 */
const variance = (...values) => {
    /**
     * 値の平均を求める
     */
    const ave = average_1.average(...values);
    /**
     * 平均値からの差分の配列を生成する
     */
    const diffs = values.map((current) => {
        /**
         * 平均値との差を求める
         */
        const difference = current - ave;
        /**
         * 差を二乗する
         */
        return difference ** 2;
    });
    /**
     * 平均からの差分の平均が分散となる
     */
    return average_1.average(...diffs);
};
exports.variance = variance;
