import { variance, OptionsType } from '../variance';

/**
 * stdev
 * @param values
 * @returns
 */
export const stdev = (values: number[], options: OptionsType = {}): number => {
  return Math.sqrt(variance(values, options));
};
