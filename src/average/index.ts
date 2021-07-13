import { sum } from '../sum';

/**
 * average
 * @param values
 * @returns
 */
export const average = (...values: number[]): number => {
  return sum(...values) / values.length;
};
