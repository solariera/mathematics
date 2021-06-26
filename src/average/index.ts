import { sum } from '../sum';

/**
 * average
 * @param values
 * @returns
 */
const average = (...values: number[]): number => {
  return sum(...values) / values.length;
};

export { average };
