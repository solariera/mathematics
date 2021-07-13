import { sum } from '../sum';

export type WeightData = { value: number; weight: number };

/**
 * weightedAverage
 * @param data
 * @returns
 */
export const weightedAverage = (...data: WeightData[]): number => {
  const weights = data.map((d) => d.weight);
  let values = 0;
  for (let i = 0; i < data.length; i++) values += data[i].value * data[i].weight;
  return values / sum(...weights);
};
