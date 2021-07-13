/**
 * sum
 * @param values
 * @returns
 */
export const sum = (...values: number[]): number => {
  return values.reduce((prev, current) => prev + current);
};
