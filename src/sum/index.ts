/**
 * sum
 * @param values
 * @returns
 */
const sum = (...values: number[]): number => {
  return values.reduce((prev, current) => prev + current);
};

export { sum };
