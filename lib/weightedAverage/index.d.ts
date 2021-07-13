export declare type WeightData = {
    value: number;
    weight: number;
};
/**
 * weightedAverage
 * @param data
 * @returns
 */
declare const weightedAverage: (...data: WeightData[]) => number;
export { weightedAverage };
