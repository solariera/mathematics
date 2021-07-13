import { variance } from '../variance';

/**
 * stdev
 * @param values
 * @returns
 */
const stdev = (...values: number[]): number => {
  return Math.sqrt(variance(...values));
};

export { stdev };
