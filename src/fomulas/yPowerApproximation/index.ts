/**
 * yPowerApproximation
 * y = a * x ^ bのy=
 * @param x
 * @param a
 * @param b
 */
const yPowerApproximation = (x: number, a: number, b: number): number => {
  return a * Math.pow(x, b);
};

export { yPowerApproximation };
