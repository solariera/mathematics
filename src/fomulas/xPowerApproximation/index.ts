/**
 * xPowerApproximation
 * y = a * x ^ bのx=
 * @param x
 * @param a
 * @param b
 */
const xPowerApproximation = (y: number, a: number, b: number): number => {
  return Math.pow(y / a, 1 / b);
};

export { xPowerApproximation };
