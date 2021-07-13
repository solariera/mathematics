import { sum } from '../sum';

/**
 * factorial
 * @param value
 * @returns
 */
export const factorial = (value: number): number => {
  return value <= 0 ? 1 : value * factorial(value - 1);
};
