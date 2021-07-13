/**
 * gcd: Greatest Common Divisor
 * 引数の最大公約数を求める
 * @param {number} values 公約数を求める数値(可変長引数)
 * @returns {number} 求められた最大公約数
 */
export const gcd = (...values: number[]): number => {
  let ans: number = values[0];
  const f = (b: number, c: number): number => (c ? f(c, b % c) : b);
  for (let i = 1; i < values.length; i++) ans = f(ans, values[i]);
  return ans;
};
