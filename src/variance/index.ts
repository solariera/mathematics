import { average } from '../average';

export type OptionsType = {
  unbiased?: boolean;
};

/**
 * variance
 * @param values
 * @returns
 */
export const variance = (values: number[], options: OptionsType = {}): number => {
  if (values.length < 2) return 0;

  const { unbiased = true } = options;

  /**
   * 値の平均を求める
   */
  const ave = average(...values);
  let dist = 0;
  for (let i = 0; i < values.length; i++) {
    let x = values[i] - ave;
    dist += x * x;
  }

  /**
   * 不偏分散の値を返す
   */
  if (unbiased) return dist / (values.length - 1);

  /**
   * 平標本分散の値を返す
   */
  return dist / values.length;
};
