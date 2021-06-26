/**
 * lcm: Least Common Multiple
 * 引数の最小公倍数を求める
 * @param {number} values 公倍数を求める数値(可変長引数)
 * @returns {number} 求められた最小公倍数
 */
const lcm = (...values: number[]): number => {
  let ans: number = values[0];
  const g = (n: number, m: number): number => (m ? g(m, n % m) : n);
  const l = (n: number, m: number): number => (n * m) / g(n, m);
  for (let i = 1; i < values.length; i++) ans = l(ans, values[i]);
  return ans;
};

export { lcm };
