export declare type WeightData = {
    value: number;
    weight: number;
};
/**
 * weightedAverage
 * @param data
 * @returns
 */
export declare const weightedAverage: (...data: WeightData[]) => number;
