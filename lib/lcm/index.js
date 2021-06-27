"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcm = void 0;
/**
 * lcm: Least Common Multiple
 * 引数の最小公倍数を求める
 * @param {number} values 公倍数を求める数値(可変長引数)
 * @returns {number} 求められた最小公倍数
 */
const lcm = (...values) => {
    let ans = values[0];
    const g = (n, m) => (m ? g(m, n % m) : n);
    const l = (n, m) => (n * m) / g(n, m);
    for (let i = 1; i < values.length; i++)
        ans = l(ans, values[i]);
    return ans;
};
exports.lcm = lcm;
