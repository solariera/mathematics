"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = void 0;
/**
 * gcd: Greatest Common Divisor
 * 引数の最大公約数を求める
 * @param {number} values 公約数を求める数値(可変長引数)
 * @returns {number} 求められた最大公約数
 */
const gcd = (...values) => {
    let ans = values[0];
    const f = (b, c) => (c ? f(c, b % c) : b);
    for (let i = 1; i < values.length; i++)
        ans = f(ans, values[i]);
    return ans;
};
exports.gcd = gcd;
